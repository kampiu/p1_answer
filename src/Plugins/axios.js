/*
 * @Author: your name
 * @Date: 2019-12-04 15:56:28
 * @LastEditTime : 2019-12-23 17:14:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bkqw_crm\src\plugins\axios.ts
 */
import axios from 'axios'
import qs from 'qs'

const request = axios.create({
  timeout: 10000,
  // retry: 4,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  withCredentials: true
});

const filterRequestData = (config) => {
  let _config = Object.assign({}, config);
  try {
    switch (_config.method.toLowerCase()) {
      case 'get':
        break;
      case 'post':
        if (_config.data.params && _config.data.params.file) {
          let _formData = new FormData()
          _config.data.params.file.forEach((item) => _formData.append('file', item))
          _config.data = _formData
        } else {
          _config.data = qs.stringify(_config.data.params);
        }
        break;
      case 'put':
        _config.data = qs.stringify(_config.data.params);
        break;
      case 'delete':
        break;
      default:
    }
  } catch (e) {
    console.error(`请求数据处理异常`, e)
  }
  return _config
};

request.interceptors.request.use((config) => {
  return filterRequestData(config)
});

request.interceptors.response.use((res) => {
  return res.data
}, (error) => {
  console.log(`%c 接口异常 `, 'background-color:orange;color: #FFF;border-radius: 4px;', error)
})

export default request

