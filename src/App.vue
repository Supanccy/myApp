<template>
  <div id="app">
    <div class="container">
      <div class="content">
        <router-view/>
      </div>
      <div class="footer">
        <!--下面路由跳转方式会生成超链接形式，很难看，舍弃不用-->
        <!--<div><router-link :to="{name:'News',query:{}}">新闻</router-link></div>-->
        <!--<div><router-link :to="{name:'Video',query:{}}">小视频</router-link></div>-->
        <!--<div><router-link :to="{name:'Game',query:{}}">游戏</router-link></div>-->
        <!--<div><router-link :to="{name:'Me',query:{}}">我</router-link></div>-->
        <div :class="mainMenuSelectNo=='1'?'mainMenuActive':''" @click="switchMainMenu('/news',1)">新闻</div>
        <div :class="mainMenuSelectNo=='2'?'mainMenuActive':''" @click="switchMainMenu('/video',2)">小视频</div>
        <div :class="mainMenuSelectNo=='3'?'mainMenuActive':''" @click="switchMainMenu('/game',3)">游戏</div>
        <div :class="mainMenuSelectNo=='4'?'mainMenuActive':''" @click="switchMainMenu('/me',4)">我</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  mainMenuSelectNo:1,
  methods:{
    switchMainMenu(path,flag){
      this.mainMenuSelectNo = flag;
      this.$router.push({path:path,query:{}});
    },
  }
};
</script>


<style scoped lang="less">
*{
  box-sizing: border-box;
}
#app{
  height:100%; /*这里也要定义，重要*/
  width:100%;
  .container{
    height:100%; /*这里也要定义，重要*/
    width:100%;
    padding: 0 0 50px 0;
    box-sizing: border-box;

    .content{
      height: 100%;
    }
    .footer{
      height: 50px;
      background: blue;
      margin-bottom: -50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #F2F2F2;
      border-bottom: 1px solid #D4D4D4;
      font-weight: bold;
      div{
        flex: 0.25;
        height: 100%;
        display:flex;
        align-items:center;/*垂直居中*/
        justify-content: center;/*水平居中*/
        font-size: 16px;
      }
      .mainMenuActive{
        color:#F04C4D;
        font-weight: bold;
      }
    }
  }
}
</style>
