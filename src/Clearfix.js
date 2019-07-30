import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { MdMenu } from "react-icons/md";


const ClearfixPage = () => {
return (
<div className="clearfix">
  <div className="float-left">
    <Navbar expand="lg" variant="light">
        <div className="cont-logo" >
            Logo
        </div>
        <ButtonToolbar>
            <Button variant="link" className="btn-herader">Accommodatios</Button>
            <Button variant="link" className="btn-herader">Transportation</Button>
            <Button variant="link" className="btn-herader">Things To Do</Button>
            <Button variant="link" className="last">Tours Info</Button>
        </ButtonToolbar>
    </Navbar>
  </div>
  <div className="float-right">
    <div className="icon-header">
        <div className="text-icon"></div>
        <p className="text">Get Offerts</p>  
        <div className="text-icon"></div>
        <p className="text">Social Media</p>  
        <div className="text-icon"></div>
        <p className="text">Contact</p> 
        <div className="menu">
            <MdMenu/>
        </div>        
    </div>
  </div>
</div>
);
}

export default ClearfixPage;