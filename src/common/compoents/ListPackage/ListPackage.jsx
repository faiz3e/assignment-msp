import React from 'react';

import { calculateCourierCharges } from '../../commonFunctions';
import "./listPackage.style.css";
export const ListPackage = (props) => {
	const { data } = props;
	return (
		<div>
			{data && data.map((item, index) => {
				return (
					<div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
						<h4 className='textCenter'>Package: {item.packageNumber + 1}</h4>
						<div className='textCenter'>
							{item.items && item.items.map((list, index) => {
								return (
									<span key={index}> {list.name} </span>
								)
							})}
						</div>
						<div className='textCenter'>
							<p>Total weight: {item.packageWeight && item.packageWeight}</p>
							<p>Total price: {item.packagePrice && item.packagePrice}</p>
							<p>Courier Price: {calculateCourierCharges(item.packageWeight)}</p>
						</div>
					</div>
				)
			})
			}
		</div>
	);
}