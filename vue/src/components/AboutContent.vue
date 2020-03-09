<!--  -->
<template>
  <div class="aboutContent">
    <div class="img">
      <img src="../assets/about-us.jpg" alt />
    </div>
    <div class="position">
      <p>
        当前位置 : 首页 >
        <span>公司简介</span>
      </p>
    </div>
    <div class="about-content">
      <div class="left">
        <div class="left-about">
          关于我们
          <div></div>
        </div>
        <div class="jianjie">公司简介</div>
        <div class="wenhua">企业文化</div>
        <div class="zuzhi">组织架构</div>
        <img src="../assets/contactUs.jpg" alt />
      </div>
      <div class="right">
        <p>成都宏城科技位于天府之国。我们是一家从事商用显示系统开发，大尺寸液晶面板销售、工程安装及售后服务于一体得高科技企业；公司主营产品有：液晶拼接显示墙、三星、LG、奇美等液晶屏，超窄边液晶拼接屏，触控拼接屏、超大尺寸液晶监视器，VGA矩阵、AV矩阵、数字矩阵、多屏拼接图像处理器、画面分割器以及各种信号传输设备等。我们优质得产品和贴心得服务，得到广大消费者的支持与认可。我们始终致力于为广大用户提供高质量、高性能、高性价比的商用显示。以满足客户对不同显示的需求。。</p>
        <p>公司产品已广泛应用于金融、医院、车站、码头、交通、通信、机场、政府机关、商场、企业事业单位、部队、体育场馆等各个领域/拥有丰富的工程案例、高品质的产品和服务，赢得了广大客户和行业的支持与认可。公司目前的客户遍布全国各地。成为西南液晶拼接屏市场的重要供应商；并于成都众多大型企业和系统集成商建立了长期稳固的合作关系。</p>
        <p>我们的服务理念：诚信经营、互赢互利。</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.aboutContent {
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
  padding-bottom: 350px;
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
    width: 800px;
    float: left;
    font-size: 12px;
    line-height: 28px;
    padding-top: 30px;
    margin-left: 20px;
    p {
      text-indent: 8px;
    }
  }
}
</style>