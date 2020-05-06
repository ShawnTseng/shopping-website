<template>
  <div class="header">
    <span class="cart">
      <span>購物車內:</span>
      <span class="lessons">{{lessons}}</span>
      <span>套課程，共</span>
      <span class="price">${{price}}</span>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    lessons() {
      return 0;
    },
    price() {
      return 0;
    }
  }
};
</script>