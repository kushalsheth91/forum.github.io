import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'
function Nav(){
    return(
        <div className="menustyle">
        <nav >
            
            <ul>
                <Link to='Form'>
                <li>SUBMIT IDEAS</li>
                </Link>

                <Link to='Forum'>
                <li>VIEW IDEAS</li>
                </Link>    

                <Link to='Contact'>
                <li>CONTACT US</li>
                </Link>          
             </ul>
         </nav>
</div>
    );
}
export default Nav