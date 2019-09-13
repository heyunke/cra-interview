import {
  Dashboard,
  List,
  Edit,
  NotFound
} from './pages'

const route = [{
  path: "/dashboard",
  component: Dashboard,
  title: "仪表盘",
  isNav: true
}, {
  path: "/list",
  component: List,
  title: "文章列表",
  isNav: true
}, {
  path: "/edit/:id",
  component: Edit,
  title: "编辑文章",
  isNav: false
}, {
  path: "/404",
  component: NotFound,
  title: "404",
  isNav: false
}];

export default route;