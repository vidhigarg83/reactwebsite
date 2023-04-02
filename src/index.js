import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Sdata from'./Sdata';

ReactDOM.render(
<>
<h1 className='heading'>Hey! Here's Vidhi Garg ,Find me on </h1>
{Sdata.map( (val) => {
return (
<Cards
key = {val.id} // Keys help React identify which items have changed, To give unique identify to element
 imgsrc={val.imgsrc}
title={val.title}
sname ={val.sname}
Link ={val.Link}
/>
);
})};
</>,
document.getElementById('root')
    
);