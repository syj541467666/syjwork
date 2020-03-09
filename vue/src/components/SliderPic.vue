<!--  -->
<template>
  <div class="sliderPic">
    <a href="#">
      <img id="top" src="../assets/ab8.png" />
    </a>
    <a href="#">
      <img id="qq1" src="../assets/r_qq.png" />
    </a>
    <a href="#">
      <img id="qq2" src="../assets/r_qq.png" />
    </a>
    <a href="#">
      <img id="tel" src="../assets/r_tel.png" />
    </a>
    <a href="#">
      <img id="mes" src="../assets/r_msg.png" />
    </a>
    <div class="fix-pic">
      <a href="#">
        <img src="../assets/left-kf.png" />
      </a>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
#top,
#qq1,
#qq2,
#tel,
#mes {
  position: fixed;
  top: 315px;
  right: 0px;
}
#qq1 {
  top: 372px;
}
#qq2 {
  top: 419px;
}
#tel {
  top: 466px;
}
#mes {
  top: 513px;
}
.fix-pic {
  position: fixed;
  bottom: 200px;
  left: 0px;
}
.fix-pic img {
  width: 100px;
}
</style>