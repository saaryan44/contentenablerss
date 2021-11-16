import {useState} from "react";
import Content from './Content';
import ReactPlayer from 'react-player';
import fee from './assets/placeholder.mp4';
import Para from './Para';

const Page=({name,a2})=>{

				
				const [c,d]=useState(a2[0].list);
				
				return(<>
						
						<ReactPlayer url={fee} width={"100%"} height={"80%"} controls />
						<div id="pagegrid">				
							<nav><ul>{a2.map((e,v)=><li key={v+6}  onClick={()=>{d(e.list);}}><div className="blueing"><h4>{e.name}</h4><Para name={e.name} /></div><hr /></li>)}</ul></nav>
							<Content  content={c} />
						</div>
						
					</>);

			};

export default Page;