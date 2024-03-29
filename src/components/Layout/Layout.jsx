import React from 'react';

import Aux from '../../aax';

import './Layout.css';

const layout = ( props ) => (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className='Content'>
        {props.children}
      </main>
    </Aux>
);


export default layout;