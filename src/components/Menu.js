import React from 'react';

 export default (props) =>  {

      let links =props.links.map((link, index) => {    
        return (               
            <li key={index}>{link.title.rendered} </li>
           
        );
      });

  return(
   <ul> {links} </ul>
  );
}

