import React, { Component } from 'react';

//css import
import './css/App.css';

//component import
// import Menu from "./components/Menu";



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

  }
  render() {
    let stripHTML = (text) =>{
      return text.replace(/<.*?>/gm, '');
    }// end fn
    
    let projects =this.state.projects.map((project, index) => {
     let text =  stripHTML(project.content.rendered);
      return (
        <div key={index}> 
          <h1>{project.title.rendered}</h1>
          
          <p>{text} </p>
        </div> 
      );      
    });

    let links =this.state.links.map((link, index) => {    
      return (               
          <div key={index}>
          {link.title.rendered} 
          </div>
      );
    });

    return (
      <div className="App">

      {links}

       {projects}
      </div>
    );//end return

  }//end render
};//end class

export default App;
