import {Switch,Route} from 'react-router-dom';
const Hi=()=><h1>hello test, hi</h1>;


const Test=()=><><h1>dd</h1><Route path="/test/hi" exact component={Hi}  /></>;
export default Test;