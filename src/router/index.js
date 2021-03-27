import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import StockIn from '../views/StockIn.vue'
import StockOut from "../views/StockOut.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/stock_in",
    name: "StockIn",
    component: StockIn,
  },
  {
    path: "/stock_out",
    name: "StockOut",
    component: StockOut,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
