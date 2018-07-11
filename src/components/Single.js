import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';



const arr = [];


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
        this.state.cp.map(element => {
         
            console.log(element.id);
            if(element.id === this.props.location.state.project) {
              console.log("work");
            }
        
          arr.push(element.id);
           
         
        });
console.log(arr);
        

        
        return (
        <div>
         
       
no math
            
    

    
         
        
          </div>
        );
      };
    };