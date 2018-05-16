import React, { Component } from 'react';

//css import
import './css/App.css';

//component import
import Menu from "./components/Menu";
import Tags from "./components/Tags";


class App extends Component {

  state = {
    projects: [],
    links: [],
    tags: []
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

    let tagsURL = "http://apiwordpress.cba.pl/wp-json/wp/v2/tags";
    fetch(tagsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        tags:response
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
     
    return (
      <div className="App">
      <div className="menu">
      <Menu links={this.state.links} />
      </div>

       <div className="content-grid"> 
        {projects}
       </div>
       <div className="tags"> <h2> Tagi </h2>
       <Tags tags={this.state.tags}/>
       </div>
       
      
      
      </div>
    );//end return

  }//end render
};//end class

export default App;
