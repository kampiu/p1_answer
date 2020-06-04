/*
 * @Author: KAM
 * @Date: 2019-11-09 11:55:19
 * @LastEditTime: 2019-12-04 15:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import request from 'Plugins/axios'
import API from './Modules'

let service = {}

API.forEach(_item => {
	Object.entries(_item.api).forEach((_api) => {
		service[`${ _item.namespaced }/${ _api[0] }`] = (params, version = 'v1') => request[(_api[1].method).toLowerCase()](`${ process.env.REACT_APP_API_BASEURL }${ _api[1].version }/${ _api[1].url }`, { params })
	})
})

export default service
