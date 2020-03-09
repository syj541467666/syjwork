<!--  -->
<template>
  <div class="productContent">
    <div class="img">
      <img src="../assets/product.jpg" alt />
    </div>
    <div class="position">
      <p>
        当前位置 : 首页 >
        <span>新闻动态</span>
      </p>
    </div>
    <div class="about-content">
      <div class="left">
        <div class="left-about">
          产品中心
          <div></div>
        </div>
        <div class="jianjie">公司新闻</div>
        <div class="wenhua">行业新闻</div>
        <div class="zuzhi">最新公告</div>
        <img src="../assets/contactUs.jpg" alt />
      </div>
      <div class="right">
        <div class="rightUp">
          <img class="imgs" src="../assets/newspic.jpg" alt />
          <div class="rightTitle">
            <h3>LED液晶拼接屏现在市场现状？</h3>
            <p>
              <img src="../assets/date.png" alt />
              <span>2016-08-13</span>
            </p>
            <div class="line"></div>
            <p>2008年以来，随着LCD拼接屏和大尺寸商务显示器产品的规模化应用的高速推进，价格竞争开始成为大屏市场的一个重要博弈领域。除了液晶拼接技术产品外，背投用和正投影显示系统、互动投影系统和LED大屏产业也加入到大屏显示价格竞争的行列中来。</p>
          </div>
        </div>
        <div class="rightBottom">
          <ul>
            <li>
              <img src="../assets/date.png" alt />
              <span>2016-07-05</span>
              液晶拼接屏关键技术得到突破，迈向更小拼接间隙
            </li>
            <li>
              <img src="../assets/date.png" alt />
              <span>2016-07-05</span>
              该如何选择液晶拼接屏和宽度
            </li>
            <li>
              <img src="../assets/date.png" alt />
              <span>2016-08-10</span>
              液晶拼接大屏、液晶拼接
            </li>
            <li>
              <img src="../assets/date.png" alt />
              <span>2016-07-06</span>
              大屏信息化时代的便利
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="button">
      <ul>
        <li>上一页</li>
        <li class="active">1</li>
        <li>2</li>
        <li>下一页</li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.productContent {
  width: 100%;
  .img {
    width: 100%;
    img {
      margin-top: 15px;
      width: 100%;
    }
  }
  .position {
    border-bottom: 1px solid skyblue;
    p {
      width: 1000px;
      font-size: 10px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      span {
        font-weight: bold;
      }
    }
  }
}
.about-content {
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 320px;
  margin-bottom: 50px;
  .left {
    width: 160px;
    float: left;
    .left-about {
      height: 60px;
      font-size: 20px;
      font-weight: bold;
      background: #186ec5;
      color: #fff;
      padding: 30px 0 0 30px;
      div {
        width: 25px;
        border: 1px solid #fff;
        background: #fff;
        margin-top: 5px;
      }
    }
    .jianjie {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      background: #1b82eb;
      color: #fff;
      font-size: 12px;
    }
    .wenhua {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      background: lightgray;
      font-size: 12px;
      margin-bottom: 2px;
    }
    .zuzhi {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      background: lightgray;
      font-size: 12px;
      margin-bottom: 20px;
    }
    img {
      width: 160px;
    }
  }
  .right {
    width: 770px;
    float: left;
    margin-left: 30px;
    margin-top: 30px;
  }
  .rightUp {
    font-size: 12px;
    height: 170px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;
    .imgs {
      width: 200px;
      height: 120px;
      float: left;
      margin-right: 70px;
    }
    .rightTitle {
      width: 500px;
      float: left;
    }
    p {
      line-height: 20px;
      span {
        margin-left: 5px;
      }
    }
    .line {
      height: 1px;
      background-color: lightgray;
      margin: 10px 0;
    }
  }
  .rightBottom {
    width: 710px;
    ul {
      li {
        font-size: 12px;
        line-height: 30px;
        background: url(../assets/arr-pic.jpg) no-repeat right center;
        span {
          margin-left: 10px;
          margin-right: 50px;
        }
      }
    }
  }
}
.button {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 150px;
  ul {
    width: 200px;
    margin: 0 auto;
    li {
      float: left;
      padding: 5px 10px;
      font-size: 12px;
    }
    li.active {
      background-color: #f00;
      color: #fff;
    }
  }
}
</style>