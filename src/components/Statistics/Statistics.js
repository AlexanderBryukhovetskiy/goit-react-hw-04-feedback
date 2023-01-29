import {useRef, useEffect} from "react";
import css from './Statistics.module.css';

export default function Statistics ({good, neutral, bad, total, positivePercentage}) {

	const isFirstRender = useRef(true);

	useEffect( () => {
		if (isFirstRender.current === true) {
			isFirstRender.current = false;
			return;
		}
	})

	return (
		<ul className={css.statistics}>
			<li>
				<h2 className={css.statItem}>
					Good: &nbsp; 
					<span>{good}</span>
				</h2>
			</li>    
			<li>
				<h2 className={css.statItem}>
					Neutral: &nbsp;   
					<span>{neutral}</span>
				</h2>
			</li>
			<li>
				<h2 className={css.statItem}>
					Bad:   &nbsp; 
					<span>{bad}</span>
				</h2>
			</li>    
			<li>
				<h2 className={css.statItem}>
					Total: &nbsp;    
					<span>{total}</span>
				</h2>
			</li>  
			<li>
				<h2 className={css.statItem}>
					Positive feedback:   &nbsp; 
					<span>{positivePercentage}%</span>
				</h2>
			</li>
	</ul>
	);
}