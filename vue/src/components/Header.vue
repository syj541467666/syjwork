<!--  -->
<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="../assets/logo.jpg" />
        <div class="logo-right">
          <p>
            <img src="../assets/phone.png" /> 400-9675-186
          </p>
          <br />
          <ul>
            <li>
              <router-link to="/contact">联系我们</router-link>
            </li>
            <li></li>
            <li>
              <router-link to="/case">案例展示</router-link>
            </li>
            <li>
              <router-link to="/solve">解决方案</router-link>
            </li>
            <li>
              <router-link to="/news">新闻动态</router-link>
            </li>
            <li>
              <router-link to="/product">产品中心</router-link>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
            </li>
            <li>
              <router-link to="/">首页</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
#app {
  #nav {
    .logo {
      width: 1200px;
      height: 56px;
      margin: 0 auto;
      img {
        float: left;
      }
      .logo-right {
        width: 600px;
        height: 56px;
        float: right;
        p {
          width: 130px;
          float: right;
          color: #196ec6;
        }
        ul {
          width: 615px;
          height: 12px;
          display: right;
          li {
            font-size: 10px;
            padding: 5px 15px;
            float: right;
          }
          li:nth-last-child(7) {
            padding: 5px 0;
          }
        }
      }
    }
  }
}
.router-link-active {
  color: #f00;
}
</style>