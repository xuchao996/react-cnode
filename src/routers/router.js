import App from "../App.js"
import Api from "../views/api.js"
import About from "../views/about.js"
import Login from "../views/login.js"
import Getstart from "../views/getstart.js"
import Home from "../views/home.js"


const router = [
	{
		path: "/",
		component: App,
		// 小写
		indexRoute: {component: Home},
		childRoutes: [
			{
				path: 'getstart',
				component: Getstart
			},
			{
				path: 'api',
				component: Api
			},
			{
				path: 'about',
				component: About
			},
			{
				path: 'login',
				component: Login
			}
		]
	}
]

export default router;