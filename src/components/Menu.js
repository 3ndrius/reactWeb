import React from 'react';

class Menu extends React.Component {

    render() {

  return(
    <li> {this.props.link.title.rendered}  </li>
  )

    }
}
export default Menu;