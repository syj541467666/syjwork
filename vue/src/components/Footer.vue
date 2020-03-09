<!--  -->
<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-left1">
        <a href="#">关于我们</a>
        <span>|</span>
        <a href="#">产品中心</a>
        <span>|</span>
        <a href="#">新闻动态</a>
        <span>|</span>
        <a href="#">解决方案</a>
        <span>|</span>
        <a href="#">案例展示</a>
        <span>|</span>
        <a href="#">联系我们</a>
      </div>
      <div class="footer-left2">
        <a href="#">Copyright &copy; 成都宏城科技 All Rights Reserved.蜀ICP备16023362号-1</a>
      </div>
      <div class="footer-right">
        <div class="footer-right1">
          <span style="color: white">友情链接：</span>
          <div>
            <a href="#">
              <span class="footer-span">爱诚科技</span>
            </a>
            <img class="footer-img" src="../assets/select.png" />
          </div>
        </div>
        <div class="footer-right2">技术支持：爱诚科技</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.footer {
  width: 100%;
  height: 140px;
  margin: 0px auto;
  background-image: url(../assets/footer_bg.png);
}
.footer-content {
  width: 1200px;
  height: 85px;
  margin: 0px auto;
  color: #fff;
  font-size: 12px;
  position: relative;
}
.footer-left {
  width: 800px;
  height: 140px;
  float: left;
}
.footer div:first-child {
  padding: 23px 0px;
  margin-bottom: 10px;
}
.footer-left2 a {
  color: white;
}
.footer-left1 span {
  padding: 0px 10px;
  color: white;
}
.footer-left1 a {
  color: white;
}
.footer-right {
  width: 200px;
  height: 100px;
  float: right;
  position: absolute;
  top: 20px;
  right: 0;
}
.footer-right1 > div {
  display: inline-block;
}
.footer-span {
  display: inline-block;
  width: 90px;
  height: 22px;
  border: 1px solid white;
  position: absolute;
  top: 16px;
  right: 31px;
  padding-top: 8px;
  padding-left: 10px;
  color: white;
}
.footer-img {
  position: absolute;
  top: 17px;
  right: 30px;
}
.fix-pic {
  position: fixed;
  bottom: 400px;
  left: 0px;
}
.footer-right2 {
  color: white;
  float: right;
  margin-right: 30px;
}
.fix-pic img {
  width: 100px;
}
</style>