<template>
  <div>
    <img :src="lesson.thumbnails.w300" width="100" />
    <br />
    <span class="title">{{lesson.title}}</span>
    <br />
    <span class="description">{{lesson.description}}</span>
  </div>
</template>

<script>
export default {
  props: ["lesson"]
};
</script>