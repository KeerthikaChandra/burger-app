import React from 'react';

import './Button.css';

const Button = (props) => (
     //****1
    //<button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
      //  {props.children}
    //</button>
    //****2
    //<div className='Button'>
      //  <button className={props.btnType} onClick={props.clicked}>
    //      {props.children}
     //   </button>
    //</div>
    <button className='Button'>
      <div className={props.btnType} onClick={props.clicked}>
       {props.children}
       </div>
        </button>
    
);

export default Button;