/*
 * @params fun       Function   需要延时的函数
 * @params delay     Number     相隔时间段
 * @params immediate Boolean    是否需要首次调用
 */
function throttle (fun, delay = 500, immediate = true) {
	let timer
	let previous = 0  //记录上一次触发的时间戳.这里初始设为0,是为了确保第一次触发产生回调
	return function (args) {
		let that = this
		let _args = args
		if (immediate) {
			let now = Date.now()            //记录此刻触发时的时间戳
			if (now - previous > delay) {   //如果时间差大于规定时间,则触发
				fun.call(that, _args)
				previous = now
			}
		} else {
			if (!timer) {  //如果定时器不存在,则设置新的定时器,到时后,才执行回调,并将定时器设为null
				timer = setTimeout(function () {
					timer = null
					fun.call(that, _args)
				}, delay)
			}
		}
	}
}
export default throttle
