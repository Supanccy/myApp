<template>
  <div class="news-recoment">
     <ul>

       <li v-for="news in newsList">
         <div class="title">{{news.title}}</div>
         <div class="info">
           <span v-show="news.isUp" class="up">置顶</span>
           <span class="source">{{news.source}}</span>
           <span class="comment">{{news.comment}}评论</span>
           <span class="time">{{news.time}}</span>
         </div>
       </li>

     </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsRecoment',
  data() {
    return {
      newsList:[
        {
          title:'从一夜爆红到被疯狂质疑，香港“最美搬运工”港版罗拉后来怎么样了？',
          source:'人民日报微信',
          comment:355,
          time:'1分钟前',
          isUp:true,
        },
        {
          title:'中国自美进口农产品将扩大到当前的3倍？中方回应',
          source:'中国经济网',
          comment:9652,
          time:'3分钟前',
          isUp:true,
        },
        {
          title:'小偷日记写满“励志语录”警察:没喝过这么多鸡汤',
          source:'中国新闻社',
          comment:12302,
          time:'20分钟前',
          isUp:false,
        },



        {
          title:'小米集团第四季度营收444亿元人民币，全年净利润136亿元人民币',
          source:'AI财经社',
          comment:3333,
          time:'276分钟前',
          isUp:false,
        },
        {
          title:'中国首位芯片女掌门：打破国外芯片垄断！地位比肩华为任正非',
          source:'正商参阅',
          comment:2222,
          time:'30分钟前',
          isUp:false,
        },
        {
          title:'没想到华为隐藏这么深，这次创下一世界纪录，超美国两巨头之和',
          source:'中国科技先生',
          comment:300,
          time:'10小时前',
          isUp:false,
        },
        {
          title:'5G电话卡诞生了，普通用户4G过渡到5G到底是换手机还是SIM卡？',
          source:'中国新闻社',
          comment:12302,
          time:'20分钟前',
          isUp:false,
        },
        {
          title:'【朝花夕拾】写给玩家的散文诗——《艾迪芬奇的记忆》简评与随感',
          source:'艾渴echo',
          comment:600,
          time:'20分钟前',
          isUp:false,
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="less">
  .news-recoment{
    >ul{
      margin: 0;
      padding: 0;
      list-style: none;
      >li{
        margin: 0;
        padding: 0;
        list-style: none;
        padding: 6px 10px;
        .title{
          height: 60px;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }
        .info{
          height: 30px;
          line-height: 30px;
          color: #999999;
          font-size: 12px;
          span{
            display: inline-block;
            margin-left: 5px;
            &:first-child{
              margin-left: 0;
              line-height: 1.3;
              border-radius: 3px;
            }
          }
          .up{
            border: 1px solid #F04C4D;
            color:#F04C4D;
          }
        }
        border-bottom: 1px solid #E8E8E8;
        margin-bottom: 10px;
      }
    }
  }

</style>
