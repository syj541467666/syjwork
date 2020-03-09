<!--  -->
<template>
  <div class="product">
    <div class="product-top">
      <div class="about">
        <span style="font-weight:700">产品中心</span>
      </div>
      <div class="more-product">
        <img id="left1" src="../assets/btnL.png" />
        <img id="right1" src="../assets/btnr.png" />
        <div class="moreproduct">更多产品</div>
      </div>
    </div>
    <div class="footer-skip">
      <ul class="footer-list">
        <li>
          <img src="../assets/product01.jpg" />
        </li>
        <li>
          <img src="../assets/product02.jpg" />
        </li>
        <li>
          <img src="../assets/product03.jpg" />
        </li>
        <li>
          <img src="../assets/product04.jpg" />
        </li>
        <li>
          <img src="../assets/product05.jpg" />
        </li>
        <li>
          <img src="../assets/product06.jpg" />
        </li>
        <li>
          <img src="../assets/product07.jpg" />
        </li>
      </ul>
      <div class="picture1">46寸3.5mm液晶拼接</div>
      <div class="picture2">46寸5.5mm液晶拼接</div>
      <div class="picture3">49寸3.5mm液晶拼接</div>
      <div class="picture4">49寸5.5mm液晶拼接</div>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.product {
  width: 1200px;
  height: 225px;
  margin: 0px auto 20px;
  position: relative;
}
.product-top {
  width: 1200px;
  height: 40px;
  position: relative;
}
.about span {
  float: left;
}
.more-product {
  width: 80px;
  height: 40px;
  float: right;
  position: absolute;
  top: 0;
  right: 0;
}
.more-product img:first-child {
  position: absolute;
  bottom: 15px;
  right: 140px;
}
.more-product img:nth-child(2) {
  position: absolute;
  bottom: 15px;
  right: 105px;
}
.moreproduct {
  width: 80px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  background: red;
  border-radius: 26px;
  font-size: 12px;
  color: white;
}
.footer-skip {
  width: 1200px;
  height: 185px;
  overflow: hidden;
  position: relative;
}
.footer-list {
  width: 4200px;
  height: 185px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.footer-list li {
  width: 280px;
  height: 185px;
  margin-right: 20px;
  float: left;
}
.footer-list li img {
  width: 280px;
  height: 185px;
}
.picture1,
.picture2,
.picture3,
.picture4 {
  width: 265px;
  height: 30px;
  padding-left: 15px;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.picture2 {
  left: 300px;
}
.picture3 {
  left: 600px;
}
.picture4 {
  left: 900px;
}
#left1,
#right1 {
  cursor: pointer;
}
</style>