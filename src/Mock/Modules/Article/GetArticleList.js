import response from "Mock/utils/response"

import Mock from "mockjs"
import { GetMockData } from "Mock/utils/mock"

const Random = Mock.Random

const API_URL = "/blog/v1/article"
const Total = 2000

const GetTags = (len) => {
	return Array.from({length: len}, () => null).reduce(item => {
		item.push({
			id: parseInt(Random.id()),
			tag_name: Random.csentence(2, 6),
			tag_describe: Random.csentence(20, 60),
			tag_poster: Random.dataImage("80x80", "图片"),
		})
		return item
	}, [])
}
const GetClassify = (len) => {
	return Array.from({length: len}, () => null).reduce(item => {
		item.push({
			id: parseInt(Random.id()),
			classify_name: Random.csentence(2, 6),
			classify_describe: Random.csentence(20, 60),
			classify_poster: Random.dataImage("80x80", "图片"),
		})
		return item
	}, [])
}

const API = GetMockData(API_URL, "get", (options) => {
	let _limit = options.body.limit || 50
	let _Product = []
	for (let i = 0; i < _limit; i++) {
		const Product = {
			id: parseInt(Random.id()),
			title: Random.csentence(12, 30),
			describe: Random.csentence(20, 60),
			poster: Random.dataImage("150x150", "图片"),
			author: 'KAM',
			points: 0,
			browse_times: 14,
			created_at: Random.date(),
			tags: GetTags(3),
			classify: GetClassify(3)
		}
		_Product.push(Product)
	}
	return response({
		data: _Product,
		total: Total,
		current_page: 5,
		last_page: 5
	})
})

export default API
