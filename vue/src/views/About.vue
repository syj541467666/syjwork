<!--  -->
<template>
  <div class="about">
    <Header />
    <AboutContent />
    <Footer />
    <SliderPic />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutContent from "@/components/AboutContent.vue";
import Footer from "@/components/Footer.vue";
import SliderPic from "@/components/SliderPic.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "About",
  components: {
    Header,
    AboutContent,
    Footer,
    SliderPic
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>