<!--  -->
<template>
  <div class="productContent">
    <div class="img">
      <img src="../assets/product.jpg" alt />
    </div>
    <div class="position">
      <p>
        当前位置 : 首页 >
        <span>液晶拼接屏</span>
      </p>
    </div>
    <div class="about-content">
      <div class="left">
        <div class="left-about">
          产品中心
          <div></div>
        </div>
        <div class="jianjie">液晶拼接屏</div>
        <div class="wenhua">监控显示屏</div>
        <img src="../assets/contactUs.jpg" alt />
      </div>
      <div class="right">
        <ul>
          <li>
            <img src="../assets/product01.jpg" alt />
            <p>46寸3.5mm液晶拼接</p>
          </li>
          <li>
            <img src="../assets/product02.jpg" alt />
            <p>46寸5.5mm液晶拼接</p>
          </li>
          <li>
            <img src="../assets/product03.jpg" alt />
            <p>49寸3.5mm液晶拼接</p>
          </li>
          <li>
            <img src="../assets/product04.jpg" alt />
            <p>55寸5.5mm液晶拼接</p>
          </li>
          <li>
            <img src="../assets/product06.jpg" alt />
            <p>55寸3.5mm液晶拼接</p>
          </li>
          <li>
            <img src="../assets/product07.jpg" alt />
            <p>47寸4.9mm液晶拼接</p>
          </li>
        </ul>
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
  margin-bottom: 120px;
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
      margin-bottom: 20px;
    }
    img {
      width: 160px;
    }
  }
  .right {
    float: left;
    ul {
      width: 780px;
      margin-top: 40px;
      li {
        float: left;
        width: 240px;
        height: 140px;
        margin-left: 20px;
        margin-bottom: 60px;
        img {
          width: 100%;
          height: 100%;
        }
        p {
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
.button {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 200px;
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