import Mock from 'mockjs'

const Random = Mock.Random

const API = Mock.mock('/mall/v1/banner',
  'get',
  () => {
	  let _Product = []
	  for (let i = 0; i < 20; i++) {
		  const Product = {
			  id: parseInt(Random.id()),
			  name: Random.csentence(6, 30),
			  describe: Random.csentence(20, 60),
			  poster: Random.dataImage('4000x400', '图片'),
			  isHot: Random.boolean(),
			  sale: Random.integer(16, 30000),
			  created_at: Random.date(),
			  address: Random.city(true)
		  }
		  _Product.push(Product)
	  }
	  return {
		  data: _Product,
		  status: 20000,
		  message: '请求成功',
		  timestamp: new Date().getTime()
	  }
  }
)

export default API
