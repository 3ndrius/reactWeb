import React, { Component } from 'react';

//css import
import './css/App.css';

//component import
import Menu from "./components/Menu";


class App extends Component {

  state = {
    projects: [],
    links: []
  }

  componentDidMount() {
    let projetUrl = "http://apiwordpress.cba.pl/wp-json/wp/v2/posts";
    fetch(projetUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects:response
      })
    });
    let linkURL = "http://apiwordpress.cba.pl/wp-json/wp/v2/pages";
    fetch(linkURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        links:response
      })
    });
  }//end fn did mount

  render() {
    let stripHTML = (text) =>{
      return text.replace(/<.*?>/gm, '');
    }// end fn (get rid "" from response json element)

    let projects =this.state.projects.map((project, index) => {
     let text =  stripHTML(project.content.rendered);
      return (
        <div className="item" key={index}> 
          <h1>{project.title.rendered}</h1>
          
          <p>{text} </p>
        </div> 
      );      
    });//end fn
 
    let links =this.state.links.map((link, index) => {    
      return (               
          <Menu key={index} link={link}/>
      );
    });

    
    return (
      <div className="App">
      <ul className="menu">
      {links}
      </ul>

       <div className="content-grid">  {projects}
       
       <div>{} </div>
    
       </div>
       
      
      
      </div>
    );//end return

  }//end render
};//end class

export default App;
