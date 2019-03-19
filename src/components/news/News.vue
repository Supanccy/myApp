<template>
  <div class="news">
     <div class="menu">
       <ul>
         <li :class="newsSubMenuSelectNo=='1'?'newsSubMenuActive':''" @click="switcSubMenu('/news/newsRecoment',1)">推荐</li>
         <li :class="newsSubMenuSelectNo=='2'?'newsSubMenuActive':''" @click="switcSubMenu('/news/newsIndex',2)">首页</li>
         <li :class="newsSubMenuSelectNo=='3'?'newsSubMenuActive':''" @click="switcSubMenu('/news/newsDomestic',3)">国内</li>
         <li :class="newsSubMenuSelectNo=='4'?'newsSubMenuActive':''" @click="switcSubMenu('/news/newsIndex',4)">国外</li>
         <li :class="newsSubMenuSelectNo=='5'?'newsSubMenuActive':''" @click="switcSubMenu('/news/newsIndex',5)">历史</li>
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
  newsSubMenuSelectNo: 1,
  data() {
    return {
      newsSubMenuSelectNo: 1,
    };
  },
  methods: {
    switcSubMenu(path,flag){
      this.newsSubMenuSelectNo = flag;
      this.$router.push({path:path,query:{}});
    },
  },
};
</script>

<style scoped lang="less">
  .news{
    font-size: 16px;
    height: 100%;
    padding-top: 40px;
    .menu{
      margin-top: -40px;
      font-size: 16px;
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
        .newsSubMenuActive{
          color:#F04C4D;
          font-weight: bold;
        }
      }
    }
    .content{
      padding: 0.2rem 0.2rem;
      height: 100%;
      overflow: auto;
    }
  }
</style>
