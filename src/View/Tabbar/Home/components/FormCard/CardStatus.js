import React, { useEffect, useState } from 'react'
import { StatueStyle } from './style'

export default function CardStatus ({ projectStatus = "approving" }) {
	
	const [status, initStatus] = useState({
		color: '#999',
		value: '未知'
	})
	
	useEffect(() => {
		const nowState = ({
			approving: {
				color: '#FF4E33',
				value: '审批中'
			},
			processing: {
				color: '#2090FF',
				value: '进行中'
			}
		})[projectStatus]
		initStatus(nowState)
	}, [])
	
	return (
		<StatueStyle>
			<span style={ { backgroundColor: status.color } }/>{ status.value }
		</StatueStyle>
	)
}
