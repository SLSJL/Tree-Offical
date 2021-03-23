import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tree",
      name: "treeview",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "tree" */ "@/views/tree/"),
      redirect: "/tree/index",
      children: [
        {
          path: "/tree/index",
          name: "tree",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/tree/Tree")
        },
        {
          path: "/tree/storymap",
          name: "storyMap",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/tree/StoryMap")
        },
        {
          path: "/tree/InfoCard",
          name: "infoCard",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/tree/Knowledge")
        }
      ]
    },
    {
      path: "/sensor",
      name: "sensor",

      component: () => import(/* webpackChunkName: "about" */ "@/views/sensor")
    },
    {
      path: "/database",
      name: "database",

      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/database")
    },
    {
      path: "/aboutus",
      name: "aboutUs",

      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/aboutUs/index.vue"),
      redirect: "/aboutus/projectBackground",
      children: [
        {
          path: "/aboutus/projectBackground",
          name: "projectBackground",
          component: () =>
            import(
              /* webpackChunkName: "tree" */ "@/views/aboutUs/ProjectBackground"
            )
        },
        {
          path: "/aboutus/projectObjectives",
          name: "projectObjectives",
          component: () =>
            import(
              /* webpackChunkName: "tree" */ "@/views/aboutUs/ProjectObjectives"
            )
        },
        {
          path: "/aboutus/projectStage",
          name: "projectStage",
          component: () =>
            import(
              /* webpackChunkName: "tree" */ "@/views/aboutUs/ProjectStage"
            )
        },
        {
          path: "/aboutus/projectTeam",
          name: "projectTeam",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/aboutUs/ProjectTeam")
        },
        {
          path: "/aboutus/collaboratingPartner",
          name: "collaboratingPartner",
          component: () =>
            import(
              /* webpackChunkName: "tree" */ "@/views/aboutUs/CollaboratingPartner"
            )
        },
        {
          path: "/aboutus/contactUs",
          name: "contactUs",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/aboutUs/ContactUs")
        },
        {
          path: "/aboutus/disclaimer",
          name: "disclaimer",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/aboutUs/Disclaimer")
        },
        {
          path: "/aboutus/policy",
          name: "policy",
          component: () =>
            import(/* webpackChunkName: "tree" */ "@/views/aboutUs/Policy")
        }
      ]
    },
    {
      path: "/resource",
      name: "resource",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/resource")
    },
    {
      path: "/resource/mediamore",
      name: "mediamore",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/resource/MoreMedia")
    }
  ]
});
