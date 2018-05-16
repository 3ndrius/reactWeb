import React from 'react';

class Menu extends React.Component {

    render() {

      let links =this.props.links.map((link, index) => {    
        return (               
            <li key={index}>{link.title.rendered} </li>
        );
      });

  return(
   <ul> {links} </ul>
  )

    }
}
export default Menu;