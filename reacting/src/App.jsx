import {useState,useEffect} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import ReactPlayer from "react-player";
import Page from './Page';
import fee from './assets/placeholder.mp4';
import leftlogo from "./assets/images/leftlogo.png";
import rightlogo from "./assets/images/rightlogo.png";
import foot from "./assets/images/footer.png";
import "./style.css";
import {useLocation} from 'react-router-dom';

const Index=()=><ReactPlayer controls url={fee} width={"100%"} height={"80%"} />;

const App=()=>{
	const location=useLocation(); const {pathname}=location; const ppp=pathname.split('/');
	const [a,b]=useState([]); 

	useEffect(()=>{fetch('site.json').then(d=>d.json()).then(d=>b(d.map((v,b)=>{const Temp=()=><Page key={b} name={v.name} a2={v.tabs} />;return {comp:Temp,name:v.name};})));},[]); 

	return (	
			<>
			<header>
				<div><img src={leftlogo} alt="leftlogo" /><img src={rightlogo} alt="rightlogo" /></div>	
				<nav><ul><li ><Link to="/" className={"nodec "+ (ppp[1]===""?"clickeffect":"")}>{"Introduction"}</Link></li>{a.length===0?"":a.map((d,vv)=><li key={vv+12} ><Link to={"/"+d.name.toLowerCase()} className={"nodec " + (ppp[1]===d.name.toLowerCase()?"clickeffect":"")}>{d.name}</Link></li>)}</ul></nav>
			</header>
			
 			<Switch><Route path="/" exact component={Index} /> {a.length===0?"":a.map((c,f)=><Route key={f+1} path={"/"+c.name.toLowerCase()} exact component={c.comp} />)} </Switch>

			<footer><img src={foot} alt="footer" /></footer>
			
			</>
		);

		};


export default App;