import React from 'react'
import './Profileph.css';
import P from './ProfilPhoto';
import FN from './FullName';
import A from './Address';

function Profile() {
    return (
       <div className="Profile">
           <P/>
           <FN/>
           <A/>
       </div>
    )
}

export default Profile
