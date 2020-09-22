import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { Dashboard } from "../views/dashboard/index";
export default {
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/dashboard/",
            name: "Dashboard",
            component: Dashboard,
            meta: { hideNavigation: true }
        }
    ]
};
