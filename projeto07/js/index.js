import {Router} from './router.js'
const router = new Router()
routes.add("/","/pages/home.html")
routes.add("/about","/pages/.about.html")
routes.add("/contact","/pages/contact.html")
routes.add(404,"/pages/404.html")
//const routes = {
// "/": "/pages/home.html",
// "/about": "/pages/.abouthtml",
// "/contact": "/pages/contact.html",
// 404: "/pages/404.html",
//}
      router.handle()

      window.onpopstate = () => router.handle()
      window.route = () => router.route()