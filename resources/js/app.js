/**
 * 这个是整个 app所有的js集合
 * 根据不同的name来判断要执行的js片段
 */
//初始化页面的方法，并获取页面的名字
function initPage(option){
	var name = option ? option.name : "";
	//根据页面的name
	if(name == 'index'){
		index();
	}
}
//主页的部分
function index(){
	mui('#offCanvasSideScroll').scroll();
	//创建列表组件
	const list = {
		template: "#list-template",
		data: function(){
			return {
				title: "全部"
			}
		},
		watch: {
		    // 如果路由有变化，会再次执行该方法
		    //'$route': 'refreshData'
		},
		methods: {
		    refreshData: function(){
		    		//关闭侧导航
		    		var type = app.$router.params.type;
		      	app.title = type;
		    		//mui('.mui-off-canvas-wrap').offCanvas().hide();
		    }
		}
	}
	const routes = [
	  { 
	  	path: '/',
	  	redirect: '/list/all'
	  },
	  { 
	  	path: '/list/:type',
	  	component: list
	  }
	]
	
	// 3. 创建 router 实例，然后传 `routes` 配置
	// 你还可以传别的配置参数, 不过先这么简单着吧。
	const router = new VueRouter({
	  routes // （缩写）相当于 routes: routes
	})
	
	// 4. 创建和挂载根实例。
	// 记得要通过 router 配置参数注入路由，
	// 从而让整个应用都有路由功能
	const app = new Vue({
		el : '#app',
	  	router: router
	})
}
