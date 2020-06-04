export const PrefixZero = (num, n) => (Array(n).join(0) + num).slice(-n)

export const TimeFilter = (time) => {
	const now = new Date(time)
	if(now instanceof Date && isNaN(now.getTime())){
		return time
	}else{
		return `${now.getFullYear()}-${PrefixZero(now.getMonth() + 1, 2)}-${PrefixZero(now.getDate(), 2)}`
	}
}
