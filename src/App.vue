<template>
  <div>
    <Header />
    <LessonList />
  </div>
</template>

<script>
import Header from "./Header.vue";
import LessonList from "./LessonList.vue";
export default {
  components: {
    Header,
    LessonList
  }
};
</script>