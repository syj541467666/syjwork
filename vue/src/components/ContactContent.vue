<!--  -->
<template>
  <div class="productContent">
    <div class="img">
      <img src="../assets/contact_01.jpg" alt />
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
          联系我们
          <div></div>
        </div>
        <div class="jianjie">联系方式</div>
        <div class="wenhua">在线留言</div>
        <img src="../assets/contactUs.jpg" alt />
      </div>
      <div class="right">
        <p>
          <img src="../assets/tel.png" alt />
          <span>手机：400-9675-186</span>
        </p>
        <p>
          <img src="../assets/fax.png" alt />
          <span>传真：028-86912595</span>
        </p>
        <p>
          <img src="../assets/addr.png" alt />
          <span>地址：四川成都市金牛区茶点子蜀西路36号金路天下</span>
        </p>
        <p>
          <img src="../assets/email.png" alt />
          <span>邮箱：610011</span>
        </p>
        <img class="img_ditu" src="../assets/未标题-2.png" alt />
      </div>
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
  margin-bottom: 280px;
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
    width: 780px;
    float: left;
    margin-left: 30px;
    margin-top: 30px;
    p {
      padding-bottom: 5px;
      span {
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .img_ditu {
      width: 780px;
      height: 400px;
    }
  }
}
</style>