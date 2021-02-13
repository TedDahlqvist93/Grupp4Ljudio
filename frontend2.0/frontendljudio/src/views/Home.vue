<template> </template>

<script>
// @ is an alias to /src
import MediaDisplay from "@/components/MediaDisplay.vue";

export default {
  name: "Home",
  components: {
    MediaDisplay,
  },
  data() {
    return {
      value: 1,
      text: "",
      firstname: "",
    };
  },

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "#880E4F";
        case 1:
          return "teal";
        case 2:
          return "cyan";
        case 3:
          return "indigo";
        default:
          return "#880E4F";
      }
    },
  },
  methods: {
    submit() {
      console.log(this.firstname);
    },
  },
};
</script>
