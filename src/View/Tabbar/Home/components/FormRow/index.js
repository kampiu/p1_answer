import React  from 'react'
import { FormRowStyle } from './style'
import { TimeFilter } from '@/Utils/filter'
import CardStatus from '../FormCard/CardStatus'
import Start from '../start'

export default function FormRow({ card, HandleTapAction }){
	
	return (
		<FormRowStyle onClick={ () => HandleTapAction() }>
			<td><Start/></td>
			<td>{card.productCategory}</td>
			<td>{card.prjCategory}</td>
			
			<td>{card.guid}</td>
			<td>{card.prjName}</td>
			<td><CardStatus projectStatus={card.projectStatus} /></td>
			
			<td>{card.prjManager}</td>
			<td>{card.department}</td>
			<td>{TimeFilter(card.prjStartDate)} ~ {TimeFilter(card.prjEndDate)}</td>
		</FormRowStyle>
	)
}
