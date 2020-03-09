<!--  -->
<template>
  <div id="banner">
    <ul id="list-kip">
      <li class="kip-img">
        <img src="../assets/banner01.jpg" />
      </li>
      <li>
        <img src="../assets/banner02.jpg" />
      </li>
    </ul>
    <img id="left" src="../assets/left.png" />
    <img id="right" src="../assets/right.png" />
  </div>
</template>
<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
#banner {
  width: 100%;
  height: 480px;
  position: relative;
  margin-bottom: 50px;
}
#list-kip {
  width: 100%;
}
#list-kip li {
  width: 100%;
  height: 480px;
  float: left;
  display: none;
}
#list-kip .kip-img {
  display: block;
}
#list-kip img {
  width: 100%;
  height: 480px;
}
#left {
  position: absolute;
  top: 50%;
  left: 90px;
  margin-top: -30px;
  cursor: pointer;
}
#right {
  position: absolute;
  top: 50%;
  right: 90px;
  margin-top: -30px;
  cursor: pointer;
}
</style>