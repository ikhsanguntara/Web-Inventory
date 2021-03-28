import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import StockIn from '../views/StockIn.vue'
import StockOut from "../views/StockOut.vue"
import Supplier from "../views/Supplier.vue"
import UnitItem from "../views/UnitItem.vue"
import TypeItem from "../views/TypeItem.vue"
import DataItem from "../views/DataItem.vue";
import Report from "../views/Report.vue"
import User from "../views/User.vue";


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
  {
    path: "/supplier",
    name: "Supplier",
    component: Supplier,
  },
  {
    path: "/unit_item",
    name: "UnitItem",
    component: UnitItem,
  },
  {
    path: "/type_item",
    name: "TypeItem",
    component: TypeItem,
  },
  {
    path: "/data_item",
    name: "DataItem",
    component: DataItem,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
