import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes:[{
		path:"/login",
		name:"login",
		meta:{
			title:"登录页"
		},
		component:()=>import('./pages/login.vue')
	},{
		path:"/",
		name:"layout",
		component:()=>import('./pages/layout.vue'),
		redirect:{ 
			name:"index",
		},
		children:[{
			path:"/index",
			name:"index",
			component:()=>import('./pages/template/index.vue'),
		}]
	}]
})