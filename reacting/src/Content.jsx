import Section from "./Section";
const Content=({content})=>{return(<>
					<div id="contentgrid">
					{content.map((d,v)=><div key={v+9} className="contentgrid"><h4>{d.name}</h4><Section section={d.items} /><hr /></div>)}
					</div>
			</>)};


export default Content;