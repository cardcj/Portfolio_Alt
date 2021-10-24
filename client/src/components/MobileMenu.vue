<template>
  <div id="bottomWrapper">
    <button id="btnMenu">Menu</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MobileMenu",
});
</script>

<style lang="scss" scoped>
@media (max-width: 640px) {
    div#bottomWrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-content: center;
  }

  #btnMenu {
    background-color: #237979;
    color: #f0f0f0;
    margin: 0 auto;
    width: 40%;
    height: 30px;
    border-radius: 10px 10px 0 0;
    border: none;
  }
}

#bottomWrapper {
  display: none;
}
</style>
