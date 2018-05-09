import React, { Component } from 'react';

//css import
import './css/App.css';

//component import

class App extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    let projetUrl = "http://apiwordpress.cba.pl/wp-json/wp/v2/posts";
    fetch(projetUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects:response
      })
    })
  }
  render() {

    let projects =this.state.projects.map((project, index) => {
      return (
        <div key={index}> 
          <h1>{project.title.rendered}</h1>
        </div>
      )
            
    })
    return (
      <div className="App">
       <h1> Hello </h1>
       {projects}
      </div>
    );//end return

  }//end render
};//end class

export default App;
