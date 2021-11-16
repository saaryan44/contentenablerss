import ReactPlayer from 'react-player';
import fee from "./assets/placeholder.mp4";

const Itemizer=({title})=>{

			return(
				<>

					<div id="itemizergrid">
						<ReactPlayer url={fee} width={"75%"} height={"70%"} controls />
						<h5>{title}</h5>
					</div>
				</>
				
				);
			};


export default Itemizer;