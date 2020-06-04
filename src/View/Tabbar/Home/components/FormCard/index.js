import React  from 'react'
import { FormCardStyle } from './style'
import LOGO from '@/Assets/images/image.jpg'
import CardStatus from './CardStatus'
import { TimeFilter } from '@/Utils/filter'
import Start from './../start'

export default function FormCard({ list, HandleTapAction }){
	
	return (
		<>
			{
				list.map(card => (
					<FormCardStyle className="card-item" key={card.guid} onClick={ () => HandleTapAction() }>
						<div className="icon">
							<img src={LOGO} title={card.logo} alt=""/>
						</div>
						<div className="box">
							<div className="title">{ card.prjName }</div>
							<div>项目经理: {card.prjManager}</div>
							<div>立项日期: {TimeFilter(card.prjStartDate)}</div>
							<div>
								{
									card.taskCount || card.taskCount === 0 ? (
										<>
											<span className="tab">任务:<i>{card.taskCount}</i></span>
											<span className="tab">完成:<i>{card.taskDoneCount}</i></span>
											<span className="tab">进行:<i>{card.taskDoingCount}</i></span>
										</>
									) : <></>
								}
							</div>
						</div>
						<div className="slide">
							<CardStatus projectStatus={card.projectStatus} />
							<Start />
						</div>
					</FormCardStyle>
				))
			}
		</>
	)
}
