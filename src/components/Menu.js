import React, { Component } from 'react';

class Menu extends React.Component {

    render() {

        let links =this.state.links.map((link, index) => {    
            return (               
                <li key={index}>
                {link.title.rendered} 
                </li>
            );
          });
        return(

            {links}

        )
    }
}
export default Menu;