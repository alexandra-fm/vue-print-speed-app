<template>
  <div class="checked-block">
    <!-- <a href="https://router.vuejs.org" target="_blank" rel="noopener"
      >vue-router</a
    > -->
    <input class="checked-text" type="text" autocomplete="off" />
    <div class="main-block">
      <div class="main-text">1</div>
      <div class="main-status">mjhygf</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrintedPage",
}
</script>

<style scoped lang="scss">
.checked-block {
  position: relative;
  width: 100%;
  width: 900px;
  height: 1200px;
  margin-top: 70px;
  background-color: rgb(201, 201, 201);
}
.main-block {
  position: relative;
  height: 500px;
  display: flex;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
}
.main-text {
  background-color: rgb(87, 94, 143);
  width: calc(100% - 170px);
}
.main-status {
  background-color: rgb(66, 126, 143);
  width: 170px;
}
</style>
