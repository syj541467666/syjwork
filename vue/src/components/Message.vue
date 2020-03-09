<!--  -->
<template>
  <div class="news">
    <div class="news-left">
      <div class="about">
        <span>关于我们</span>
        <span>
          <a href="#">查看更多 +</a>
        </span>
      </div>
      <img src="../assets/about.jpg" />
      <div
        class="news-left-text"
      >我们是一家显示系统研发、商用显示面板销售、工程安装及售后服务于一体的高科技企业；公司主营产品有三星、LG、奇美电子等液晶面板。我们始终致力于为广大用户提供高质量、高性能、高性价比的...</div>
    </div>
    <div class="news-center">
      <div class="about">
        <span>新闻动态</span>
        <span>
          <a href="#">查看更多 +</a>
        </span>
      </div>
      <div class="news-center-middle">
        <div class="news-center-middle-left">
          <h4>
            <a href="#">LED液晶拼接屏现在市场状况 ？</a>
          </h4>
          <p>
            <a href="#">2008年以来，随着LCD拼接屏和大尺寸商务显示器产品的规模化应用的高速推进...</a>
          </p>
          <p>
            <a href="#">
              <img src="../assets/date.png" /> 2016-08-13
            </a>
          </p>
        </div>
        <div class="news-pic">
          <a href="#">
            <img src="../assets/newspic.jpg" />
          </a>
        </div>
      </div>
      <div class="news-center-bottom">
        <ul class="news-list1">
          <a href="#">
            <li>液晶拼接屏关键技术得到突破，迈向更小拼接间隙</li>
          </a>
          <a href="#">
            <li>该如何选择液晶拼接屏和亮度</li>
          </a>
          <a href="#">
            <li>液晶拼接大屏、液晶拼接</li>
          </a>
        </ul>
        <ul class="news-list2">
          <a href="#">
            <li>2016-07-05</li>
          </a>
          <a href="#">
            <li>2016-07-05</li>
          </a>
          <a href="#">
            <li>2016-08-10</li>
          </a>
        </ul>
      </div>
    </div>
    <div class="news-right">
      <div class="about">
        <span>新闻动态</span>
      </div>
      <img src="../assets/contact.jpg" />
      <a href="#">
        <p>
          <img src="../assets/tel.png" />手机：400-9675-186
        </p>
      </a>
      <a href="#">
        <p>
          <img src="../assets/fax.png" />传真：028-86912595
        </p>
      </a>
      <a href="#">
        <p>
          <img src="../assets/addr.png" />地址：四川成都市金牛区茶店子蜀西路36号金路天下
        </p>
      </a>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.news {
  width: 1200px;
  height: 300px;
  margin: 0px auto 20px;
}
.news-left,
.news-center,
.news-right {
  width: 380px;
  height: 300px;
  float: left;
}
.news-center {
  margin: 0px 30px;
}
.about {
  width: 380px;
  height: 40px;
}
.about span:first-child {
  font-size: 14px;
  font-weight: bold;
  border-left: 2px solid #e70012;
  padding-left: 5px;
  margin-right: 251px;
}
.about span a {
  font-size: 12px;
  color: gray;
}
.news-left > img {
  margin-bottom: 25px;
}
.news-left-text {
  width: 380px;
  height: 120px;
  font-size: 12px;
  line-height: 40px;
}
.news-center-middle-left {
  width: 220px;
  height: 100px;
  float: left;
  font-size: 12px;
  line-height: 20px;
}
.news-pic {
  width: 140px;
  height: 100px;
  overflow: hidden;
  float: right;
}
.news-center-middle {
  width: 380px;
  height: 100px;
  margin-bottom: 28px;
}
.news-list1,
.news-list2 {
  height: 120px;
  font-size: 12px;
  line-height: 40px;
}
.news-list1 {
  width: 270px;
  float: left;
}
.news-list2 {
  width: 70px;
  float: right;
}
.news-right > img {
  margin-bottom: 25px;
}
.news-right p {
  width: 380px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.news-right p img {
  margin-right: 10px;
}
/*新闻区域样式结束*/
/*产品中心区域样式开始*/
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