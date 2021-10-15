import React from 'react';
import '../App.css';

function LargeLogoHeader() {
  return ( 
    <section id="logo-header">
        <div id="main-logo">
            <img src={require("../images/logo.png")} height="55" width="200" alt="The movie network"/>
        </div>
    </section>
  );
}

export default LargeLogoHeader;


    



