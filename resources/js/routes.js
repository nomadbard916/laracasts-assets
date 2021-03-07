import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Colors from './components/Colors';
import Illustrations from "./components/Illustrations";
import Mascot from "./components/Mascot";
import Typography from "./components/Typography";
import Wallpapers from "./components/Wallpapers";
import NotFound from "./components/NotFound";
import SiteStats from "./components/SiteStats";

// dynamic import
let LoadersAndAnimations = () => import(
    /* webpackChunkName: "loaders-and-animations.bundle" */
    "./components/LoadersAndAnimations"
    );

export default {
    mode: 'history',
    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Logo
        },
        {
            path: '/logo-symbol',
            component: LogoSymbol,
        },
        {
            path: '/colors',
            component: Colors,

        },
        {
            path: '/illustrations',
            component: Illustrations,

        },
        {
            path: '/loaders-and-animations',
            component: LoadersAndAnimations,

        },
        {
            path: '/mascot',
            component: Mascot,

        },
        {
            path: '/typography',
            component: Typography,

        },
        {
            path: '/wallpapers',
            component: Wallpapers,

        },
        {
            path: '/site-stats',
            component: SiteStats,

        },


    ]
}
