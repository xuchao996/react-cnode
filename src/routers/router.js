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
		// IndexRoute: {component: Home},
		childRoutes: [
			{
				path: 'about',
				component: About
			}
		]
	}
]

export default router;
