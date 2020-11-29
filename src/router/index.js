import Vue from "vue";
import VueRouter from "vue-router";
import editor from "../views/editor.vue";
import templateList from "../views/template.list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/editor",
    name: "editor",
    component: editor
  },
  {
    path: "/",
    name: "editor",
    component: editor
  },
  {
    path: "/templates",
    name: "templates",
    component: templateList
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
