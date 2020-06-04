import Mock from 'mockjs'

// const Random = Mock.Random
//
// const designSeller = [
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/c5d1096cbe099475ef738d30ecfd2790.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/2c261bff0fe75a1be80ac6c844ac6c6d.JPG',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/f54c526731592a6fc9a2e1b602dca2ea.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/4ca111de17bf3f7c68e2cba5ea5a6551.JPG',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/8b9547e81a4f27ca1957ba646fae724e.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/4ecbbaf47a50ced2824b91e71960b6bb.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/b21ab61fa7160819eb0fb6f1aea63579.JPG',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/72a32a7b3ecbc1d5eda16a54dea3cbfb.JPG',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/a0cde6bc225a0f2b47ed4f143c8e63ab.JPG',
// ]
//
// const residenceList = [
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/6ca4799d9f5571e8c630a31f132e5b6b.JPG',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/6d8a8a3f2a5d7ef68f0e960f28df3abd.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/e7f814759b41c6d8349fc653c1503ec0.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/3b68a7076bc07ed40f4d0a208c707c90.JPG',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/8243784b6372b146c2910564e384c2f7.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/e8119e531b074c3624779153ba1a7a02.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/3e9cc0b5563a9f5d5bdb11dfca8721c5.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/d73c0874e5e18c23ce2ef4dc6b9f2f11.jpg',
// 	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/39a1fdc1e4136570d743ba631111b410.jpg',
// ]

const DATA = [{
	'productCategory': '家教机',
	'prjCategory': '教育电子软件产品开发项目',
	'prjName': '测试项目密码',
	'prjManager': '孙工',
	'prjStartDate': '2018-08-04 18:34:58',
	'prjEndDate': '2018-08-28 18:34:58',
	'guid': 'a6d6e2d1-ea1f-47de-aec7-4397bc74bfcd',
	'projectStatus': 'processing',
	'department': '系统管理部',
	'logo': 'image.png',
	'taskCount': 0,
	'taskDoneCount': 0,
	'taskDoingCount': 0
}, {
	'productCategory': '电话手表',
	'prjCategory': '电话手表产品开发项目',
	'prjName': '集成测试0712',
	'prjManager': '孙工,郑工',
	'prjStartDate': '2018-08-04 18:34:58',
	'prjEndDate': '2018-08-28 18:34:58',
	'guid': '4be3d93b-b901-462d-b87e-d17548597ab6',
	'projectStatus': 'processing',
	'department': '系统管理部',
	'logo': 'image.png',
	'taskCount': 0,
	'taskDoneCount': 0,
	'taskDoingCount': 0
}, {
	'productCategory': '其他',
	'prjCategory': 'IT项目',
	'prjName': 'testRead',
	'prjManager': '孙工',
	'prjStartDate': '2018-08-06 20:56:23',
	'prjEndDate': '2018-08-31 20:56:23',
	'guid': '0508420c-ecc4-4cc3-9b21-3b5256874221',
	'projectStatus': 'approving',
	'department': '系统管理部',
	'logo': 'image.png',
	'taskCount': null,
	'taskDoneCount': null,
	'taskDoingCount': null
}, {
	'productCategory': '其他',
	'prjCategory': '产品预研项目',
	'prjName': '任务直接完成',
	'prjManager': '孙工',
	'prjStartDate': '2018-07-30 16:40:03',
	'prjEndDate': '2018-07-30 16:40:03',
	'guid': 'b4fdc9d4-dc8a-4190-b16c-d5c0f3feb379',
	'projectStatus': 'processing',
	'department': '系统管理部',
	'logo': 'image.png',
	'taskCount': 14,
	'taskDoneCount': 13,
	'taskDoingCount': 1
}, {
	'productCategory': '其他',
	'prjCategory': '测试',
	'prjName': 'aab1216',
	'prjManager': '孙工',
	'prjStartDate': '2018-07-30 16:40:03',
	'prjEndDate': '2018-07-30 16:40:03',
	'guid': 'c6ae03d5-b90b-41da-9103-7463fa61a6f3',
	'projectStatus': 'processing',
	'department': '系统管理部',
	'logo': 'image.png',
	'taskCount': 1,
	'taskDoneCount': 0,
	'taskDoingCount': 1
}]

export const GetHomeData = Mock.mock('/v1/home',
	'get',
	() => {
		return {
			data: DATA,
			status: 20000,
			message: '请求成功',
			timestamp: new Date().getTime()
		}
	}
)

