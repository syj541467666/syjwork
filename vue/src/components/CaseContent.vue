<!--  -->
<template>
  <div class="caseContent">
    <div class="img">
      <img src="../assets/case.jpg" alt />
    </div>
    <div class="position">
      <p>
        当前位置 : 首页 >
        <span>案例展示</span>
      </p>
    </div>
    <div class="about-content">
      <div class="left">
        <div class="left-about">
          产品中心
          <div></div>
        </div>
        <div class="jianjie">液晶拼接案例</div>
        <div class="wenhua">商用显示案例</div>
        <img src="../assets/contactUs.jpg" alt />
      </div>
      <div class="right">
        <ul>
          <li>
            <img src="../assets/case_01.jpg" alt />
            <p>绵阳LG47寸3*3拼接</p>
          </li>
          <li>
            <img src="../assets/case_02.jpg" alt />
            <p>宜宾学院 三星46寸3.5mm 2*4拼接</p>
          </li>
          <li>
            <img src="../assets/case_03.jpg" alt />
            <p>成都 三星55寸 2*2拼接</p>
          </li>
          <li>
            <img src="../assets/case_04.jpg" alt />
            <p>宜宾 LG49寸3.5mm 3*3拼接</p>
          </li>
          <li>
            <img src="../assets/case_05.jpg" alt />
            <p>三星55寸5.5mm 2*2拼接</p>
          </li>
          <li>
            <img src="../assets/case_06.jpg" alt />
            <p>重庆 三星55寸3.9mm 5*4拼接</p>
          </li>
          <li>
            <img src="../assets/case_07.jpg" alt />
            <p>绵阳 三星46寸5.5mm 2*2拼接</p>
          </li>
          <li>
            <img src="../assets/case_08.jpg" alt />
            <p>昭通 三星55寸5.5mm 3*3拼接</p>
          </li>
          <li>
            <img src="../assets/case_09.jpg" alt />
            <p>阿坝州 三星46寸5.5 2*2拼接</p>
          </li>
          <li>
            <img src="../assets/case_10.jpg" alt />
            <p>成都LG48寸4.9mm 2*2拼接</p>
          </li>
          <li>
            <img src="../assets/case_11.jpg" alt />
            <p>南充 奇美50寸 12mm 2*2拼接</p>
          </li>
          <li>
            <img src="../assets/case_12.jpg" alt />
            <p>长寿县 三星48寸 8mm 4*3拼接</p>
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
.caseContent {
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
  margin-bottom: 160px;
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
      margin-top: 30px;
      li {
        float: left;
        width: 167.5px;
        height: 140px;
        margin-left: 20px;
        margin-bottom: 50px;
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
  margin-bottom: 360px;
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