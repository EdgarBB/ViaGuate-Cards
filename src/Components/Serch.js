import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {MdSearch } from "react-icons/md";
import Switchs from './Switch';


export default class Search extends Component{
  render(){
      return(
        <div className="clearfix">
            <div className="float-left">
                <div className="search-icon">
                    <h4>The Best Accommodations</h4>
                    <input label="Search Country" placeholder="Search for destination in GUATEMALA"/>
                    <MdSearch/>
                </div>
            </div>
            <div className="float-right">
            <span className="span-left">$</span><Switchs/><span>Q</span>
            <ButtonToolbar>
                <Button variant="link" className="btn-search">Date</Button>
                <Button variant="link" className="btn-search">Guest</Button>
                <Button variant="link" className="btn-search">Price</Button>
                <Button variant="link" className="btn-search">More Filters</Button>
            </ButtonToolbar>
            </div>
        </div>         
      )
  }
}