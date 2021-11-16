import Itemizer from './Itemizer';
const Scenarios=({name,items})=>{

			return(
					<>
						<h6>{name}</h6>
						<div id="scenariosgrid">
							{items.map((u,p)=><Itemizer key={p+22} title={u.title} />)}
						</div>
					</>
				);
			};


export default Scenarios;