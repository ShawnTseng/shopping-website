<template>
  <div>
    <div v-for="(lesson, index) in lessons" :key="index">
      <span>{{lesson.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lessons() {
      return this.$store.state.lessons;
    }
  },
  mounted() {
    this.$store.dispatch("fetchLessons");
  }
};
</script>