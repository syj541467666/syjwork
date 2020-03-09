<template>
  <div class="index">
    <Header />
    <Banner />
    <Message />
    <ProductIndex />
    <Footer />
    <SliderPic />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Message from "@/components/Message.vue";
import ProductIndex from "@/components/ProductIndex.vue";
import Footer from "@/components/Footer.vue";
import SliderPic from "@/components/SliderPic.vue";
export default {
  name: "Index",
  components: {
    Header,
    Banner,
    Message,
    ProductIndex,
    Footer,
    SliderPic
  }
};
</script>

<style lang="less">
</style>
