import React from 'react';

 export default (props) =>  {

      let tags =props.tags.map((tag, index) => {    
        return (               
            <li key={index}>{tag.name} </li>
        );
      });

  return(
   <ul> {tags} </ul>
  );
}

