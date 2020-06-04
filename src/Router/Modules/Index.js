import Loadable from 'react-loadable'
import Loading from 'Components/Loading'
// import Home from 'view/Home'
// import Article from 'view/Article'

// const Home = () => import('view/Home')
// const Article = () => import('view/Article')
const Home = Loadable({
	loader: () => import('View/Home'),
	loading: Loading
})

const Article = Loadable({
	loader: () => import('View/Article'),
	loading: Loading
})

const ArticleDetail = Loadable({
	loader: () => import('View/ArticleDetail'),
	loading: Loading
})

const About = Loadable({
	loader: () => import('View/About'),
	loading: Loading
})

const Demo = Loadable({
	loader: () => import('View/Demo'),
	loading: Loading
})

export {
	Home,
	Article,
	About,
	ArticleDetail,
	Demo
}
