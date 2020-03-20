import Login from "views/auth/login/Login.jsx";
import Register from "views/auth/register/Register.jsx";
const routes = [
  {
    path: "/shopee",
    name: "Shopee Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    layout: "/market-analytics"
  },
  {
    path: "/sendo",
    name: "Sendo Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    layout: "/market-analytics"
  },
  {
    collapse: true,
    name: "Pages",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/login",
        name: "Login",
        mini: "L",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        mini: "R",
        component: Register,
        layout: "/auth"
      }
    ]
  }
];

export default routes;
