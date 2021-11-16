const x=require('express'); const y=x(); y.use(x.static('build'));
const port=process.env.PORT || 4000;

y.listen(port,()=>console.log(`port ${port} running `));

