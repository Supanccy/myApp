import Vue from "vue";
import Router from "vue-router";
import News from "@/components/news/News";
import NewsDomestic from "@/components/news/News-Domestic";
import NewsIndex from "@/components/news/News-Index";
import NewsRecoment from "@/components/news/News-Recoment";



import Video from "@/components/video/Video";
import Game from "@/components/game/Game";
import Me from "@/components/me/Me";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "News"
    },
    {
      path: "/news",
      name: "News",
      component: News,
      redirect: "/news/newsRecoment",
      children: [{
        path: "newsIndex",
        name: "NewsIndex",
        component: NewsIndex
      },{
        path: "newsDomestic",
        name: "NewsDomestic",
        component: NewsDomestic,
      },{
        path: "newsRecoment",
        name: "NewsRecoment",
        component: NewsRecoment,
      },



      ]
    },
    {
      path: "/video",
      name: "Video",
      component: Video
    },
    {
      path: "/game",
      name: "Game",
      component: Game
    },
    {
      path: "/me",
      name: "Me",
      component: Me
    }
  ]
});
