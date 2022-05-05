import { createRouter, createWebHashHistory } from "vue-router";

import LandingView from "@/pages/LandingView";
import LoginView from "@/pages/LoginView";
import SignupView from "@/pages/SignupView";
import AuthSuccessView from "@/pages/AuthsuccessView";
import ConfirmOrderView from "@/pages/ConfirmOrderView";
import DashboardView from "@/pages/DashboardView";
import LocationSetupView from "@/pages/LocationSetupView";
import MyAccountView from "@/pages/MyAccountView";
import NotificationsView from "@/pages/NotificationsView";
import OrderReceivedView from "@/pages/OrderReceivedView";
import OrderStatusView from "@/pages/OrderStatusView";
import OrderSuccess from "@/pages/OrderSuccess";
import ProductView from "@/pages/ProductView";
import ResetView from "@/pages/ResetView";
import VerificationView from "@/pages/VerificationView";

//views Dashboard : [child routes]
import StoreView from "@/views/Dashboard/StoreView.vue";
import Cartview from "@/views/Dashboard/CartView.vue";
import FavouritesView from "@/views/Dashboard/FavouritesView";
import SettingsView from "@/views/Dashboard/SettingsView";

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/authsuccess",
    name: "AuthSuccessView",
    component: AuthSuccessView,
  },
  {
    path: "/confirmorder",
    name: "ConfirmOrderView",
    component: ConfirmOrderView,
  },
  {
    path: "/store",
    component: DashboardView,
    children: [
      {
        path: "",
        name: "StoreView",
        component: StoreView,
      },
      {
        path: "favourites",
        name: "FavouritesView",
        component: FavouritesView,
      },
      {
        path: "cart",
        name: "CartView",
        component: Cartview,
      },
      {
        path: "settings",
        name: "SettingsView",
        component: SettingsView,
      },
    ],
  },
  {
    path: "/locationsetup",
    name: "LocationSetupView",
    component: LocationSetupView,
  },
  {
    path: "/myaccount",
    name: "MyAccountView",
    component: MyAccountView,
  },
  {
    path: "/notifications",
    name: "NotificationsView",
    component: NotificationsView,
  },
  {
    path: "/ordereceived",
    name: "OrderReceivedView",
    component: OrderReceivedView,
  },
  {
    path: "/orderstatus",
    name: "OrderStatusView",
    component: OrderStatusView,
  },
  {
    path: "/ordersuccess",
    name: "OrderSuccessView",
    component: OrderSuccess,
  },
  {
    path: "/product",
    name: "ProductView",
    component: ProductView,
  },
  {
    path: "/reset",
    name: "ResetView",
    component: ResetView,
  },
  {
    path: "/verification",
    name: "VerificationView",
    component: VerificationView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
