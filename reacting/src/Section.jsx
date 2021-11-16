import Itemizer from "./Itemizer";
import Scenarios from "./Scenarios"; 

const Section=({section})=>{

			return(
					<>{(section.length===1)?<Scenarios name={section[0].name} items={section[0].items} />:<div id="sectiongrid">{section.map((t,e)=><Itemizer key={e+5} title={t.title} />)}</div>}</>
				);
			}

export default Section;