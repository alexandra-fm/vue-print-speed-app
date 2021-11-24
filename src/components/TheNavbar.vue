<template>
  <div class="nav-block">
    <div class="nav-block-wrapper">
      <h1>type sth in</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-block {
  position: relative;
  height: 70px;
  z-index: 100;
}
.nav-block-wrapper {
  position: fixed;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: rgb(252, 252, 252);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 0 0 #dadce0;
}
h1 {
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
