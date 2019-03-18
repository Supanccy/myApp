<template>
  <div class="news">
     <div class="menu">
       <ul>
         <li @click="switcSubMenu('/news/newsRecoment')">推荐</li>
         <li @click="switcSubMenu('/news/newsIndex')">首页</li>
         <li @click="switcSubMenu('/news/newsDomestic')">国内</li>
         <li @click="switcSubMenu('/news/newsIndex')">国外</li>
         <li @click="switcSubMenu('/news/newsIndex')">历史</li>
       </ul>
     </div>
     <div class="content">
       <router-view/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
    };
  },
  methods: {
    switcSubMenu(path){
      this.$router.push({path:path,query:{}});
    },
  },
};
</script>

<style scoped lang="less">
  .news{
    font-size: 14px;
    height: 100%;
    padding-top: 40px;
    .menu{
      margin-top: -40px;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      background: #F5F7F9;
      font-weight: bold;
      ul{
        margin: 0;
        padding: 0;
        list-style: none;
        height: 100%;
        width: auto;
        li{
          margin: 0;
          padding: 0;
          list-style: none;
          height: 100%;
          padding: 0 15px;
          display: inline-block;
        }
      }
    }
    .content{
      padding: 0.2rem 0.2rem;
    }
  }
</style>
