<!--  -->
<template>
  <div class="solve">
    <Header />
    <CaseContent />
    <Footer />
    <SliderPic />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "@/components/Header.vue";
import CaseContent from "@/components/CaseContent.vue";
import Footer from "@/components/Footer.vue";
import SliderPic from "@/components/SliderPic.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    CaseContent,
    Footer,
    SliderPic
  },
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>