import React from "react";
import './homepage-example.styles.scss';

import Example from "../../components/example/example.component";

const HomepageExample = () => (
    <div className='homepage-example'>
        <Example text='first'/>
        <Example text='second'/>
        <Example text='third'/>
    </div>
);

export default HomepageExample;