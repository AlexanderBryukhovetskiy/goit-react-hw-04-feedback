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





// import PropTypes from 'prop-types';


// const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

//     return (
// 			<ul className={css.statistics}>
// 				<li>
// 					<h2 className={css.statItem}>
// 						Good: &nbsp; 
// 						<span>{good}</span>
// 					</h2>
// 				</li>    
// 				<li>
// 					<h2 className={css.statItem}>
// 						Neutral: &nbsp;   
// 						<span>{neutral}</span>
// 					</h2>
// 				</li>
// 				<li>
// 					<h2 className={css.statItem}>
// 						Bad:   &nbsp; 
// 						<span>{bad}</span>
// 					</h2>
// 				</li>    
// 				<li>
// 					<h2 className={css.statItem}>
// 						Total: &nbsp;    
// 						<span>{total}</span>
// 					</h2>
// 				</li>  
// 				<li>
// 					<h2 className={css.statItem}>
// 						Positive feedback:   &nbsp; 
// 						<span>{positivePercentage}%</span>
// 					</h2>
// 				</li>
// 		</ul>
// 	);
// }

// Statistics.propTypes= {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired
// };

// export default Statistics;