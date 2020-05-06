<template>
  <div>
    <img :src="lesson.thumbnails.w300" width="100" />
    <br />
    <span class="title">{{lesson.title}}</span>
    <br />
    <span class="description">{{lesson.description}}</span>
    <br />
    <button :class="buttonClass" @click="addToCart(lesson)">{{buttonLabel}}</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["lesson"],
  computed: {
    inCart() {
      return this.isLessonInCart(this.lesson);
    },
    buttonClass() {
      return {
        buy: true,
        bought: this.inCart
      };
    },
    buttonLabel() {
      return this.inCart ? "已加入購物車" : "加入購物車";
    },
    ...mapGetters(["isLessonInCart"])
  },
  methods: {
    ...mapMutations(["addToCart"])
  }
};
</script>