import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';



     

    const json = localStorage.getItem("proj");
    const proj = JSON.parse(json);
    
    export default class Single extends Component {
    
    
      state = ({
        cp:[]
      });
      
      componentWillMount = () => {
         
          this.setState({
            cp:proj
          })
      
      }
    
      componentDidMount = () => {
        const id = this.props.location.state.project; 
        console.log(this.state.cp);
     
      }
    
      render() {
    
      
        return (
        <div>
         
       
    {this.state.cp[1].title.rendered}
            
    
    
    
    work;;
    
         
        
          </div>
        );
      };
    };