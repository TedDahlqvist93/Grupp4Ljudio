const bcrypt = require("bcrypt")

module.exports = (app, db) => {

    // register user
    app.post("/api/users", async (request, response) => {
        let password = await bcrypt.hash(request.body.password, 10);
        let firstName = request.body.firstName
        let lastName = request.body.lastName
        let email = request.body.email

        await db.query(`INSERT INTO users SET email = ?, password = ?, first_name = ?, last_name = ? `,
            [email, password, firstName, lastName])
            .catch(error => {
                console.log(error)
                response.status(400)
                response.json({error: "database error"})
            })



        response.json({firstName, lastName, email, loggedIn: true})

    });

    // authentication: perform login
    app.post("/api/login", async (request, response) => {
        let user = await db.query("SELECT * FROM users WHERE email = ?", [
            request.body.email,
        ]);
        user = user[0];

        if (
            user &&
            user.email &&
            (await bcrypt.compare(request.body.password, user.password))
        ) {
            request.session.user = user;
            user.loggedIn = true;
            delete user.password;
            response.json(user);
        } else {
            response.status(401); // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            response.json({message: "no matching user"});
        }
    });

    // authentication: get logged in user
    app.get("/api/login", async (request, response) => {
        let user;
        if (request.session.user) {
            user = await db.query(
                "SELECT * FROM users WHERE email = ? AND password = ?",
                [request.session.user.email, request.session.user.password]
            );
            user = user[0];
        }
        if (user && user.email) {
            user.loggedIn = true;
            delete user.password;
            response.json(user);
        } else {
            response.status(401); // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            response.json({message: "not logged in"});
        }
    });

    // logga ut
    app.delete("/api/login", async (request, response) => {
        console.log(request.data)
        request.session.destroy(() => {
            response.json({loggedIn: false});
        });
    });

    // get playlist
    app.get('/api/playlists/', async (request, response) => {
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({error: 'not logged in'})
            return;
        }
        let result = await db.query(
            `SELECT DISTINCT id, name
            FROM playlist
            WHERE id = ? AND user_id = ?`,
            request.params.id, request.body.user_id)
        response.json(result);
    })


    // add playlist
    app.post('/api/playlists/', async (request, response) => {
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({error: 'not logged in'})
            return;
        }
        let result = await db.query(`
            INSERT INTO playlist
            SET id, user_id, name
            WHERE id = ? AND AND user_id = ? AND name = ?`,
            request.params.id, request.body.user_id, request.body.name)
        response.json(result);
    })

    // delete playlist
    app.delete("/api/playlists/", async (request, response) => {
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({error: 'not logged in'})
            return;
        }
        let result = await db.query(
            `DELETE FROM playlists
            WHERE id = ? AND user_id = ?`,
            request.params.id, request.body.user_id)
        response.json(result)
    })

    // get songs
    app.get('/api/songs/', async (request, response) => {
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({error: 'not logged in'})
            return;
        }
        let result = await db.query(
            `SELECT id, song_id, title, artist, album
            FROM songs
            WHERE id = ?`, request.params.id)
        response.json(result);
    })

    // add song
    app.post('/api/songs/', async (request, response) => {
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({error: 'not logged in'})
            return;
        }
        let result = await db.query(
            `INSERT INTO songs
            SET id, song_id, name, artist, album
            WHERE id = ? AND name = ? AND artist = ? AND album = ?`
            , request.params.id, request.body.song_id, request.body.name
            , request.body.artist, request.body.album)
        response.json(result);
    })

    // delete song
    app.delete("/api/songs/", async (request, response) => {
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({error: 'not logged in'})
            return;
        }
        let result = await db.query(`
            DELETE FROM songs
            WHERE id = ? AND song_id = ?`,
            request.body.id, request.body.song_id)
        response.json(result)
    })
}
