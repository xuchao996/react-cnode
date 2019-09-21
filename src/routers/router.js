import App from "../App.js"
import Api from "../views/api.js"
import About from "../views/about.js"
import Login from "../views/login.js"
import Getstart from "../views/getstart.js"
import Home from "../views/home.js"
import TopicDetail from "../views/topicDetail.js"
import UserDetail from "../views/userDetail.js"

const router = [
	{
		path: "/",
		component: App,
		// 小写
		indexRoute: {component: Home},
		childRoutes: [
			{
				path: 'home',
				component: Home
			},
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
			},
			{
				path: 'detail/:id',
				component: TopicDetail
			},
			{
				path: 'user/:id',
				component: UserDetail
			}
		]
	}
]

export default router;
