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
    tags: [],
    count: 8,
    
  }

  
  componentWillMount() {
    let linkURL = "http://apiwordpress.cba.pl/wp-json/wp/v2/pages";
    fetch(linkURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        links:response
      })
    });

    let tagsURL = "http://apiwordpress.cba.pl/wp-json/wp/v2/tags?per_page=100";
    fetch(tagsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        tags:response
      })
    });
  }//end fn did mount
  
  componentDidMount() {
    let projetUrl = "http://apiwordpress.cba.pl/wp-json/wp/v2/posts?per_page=4";
    fetch(projetUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects:response
      })
    });
  }


  handleScrollCallback = () => {
    
  console.log("Scroll occured");
     
  }
    





  onClickBtn = () =>{
    let projetUrl = `http://apiwordpress.cba.pl/wp-json/wp/v2/posts?per_page=${this.state.count}`;
    fetch(projetUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects:response,
        count:this.state.count+4
      })
    });
  }

  render() {
    let stripHTML = (text) =>{
      return text.replace(/<.*?>/gm, '');
    }// end fn (get rid "" from response json element)

    const lengPar = str => {
      return(
        str.length
      );
    }
    console.log(this.state.count);
    let projects =this.state.projects.map((project, index) => {
    
     let text =  stripHTML(project.content.rendered);
   
    const res =  text.slice(0, 600);
  
//       window.onscroll = function() {
//     console.log('scrolling');
// };
    //  console.log(lengPar(text), res);
      return (
        <div className="item" key={index}> 
      
          <h1>{project.title.rendered}</h1>
          
          <p>{ lengPar(text) > 600 ? res+ "..." : text } </p>
        </div> 
      );      
    });//end fn
   
    return (
      <div className="App" >
      <div className="menu">
      <Menu links={this.state.links} />
      </div>
      <div className="slider">
      
       </div>

    <div className="wrapper"> 
    <div className="content-grid"> 
        {projects}
       </div>
       <div className="tags"> <h2> Tagi  </h2>
       <Tags tags={this.state.tags}/>
       </div>
       <div className="btn-wrap">
      <button onClick={this.onClickBtn} className="btn-more"> Load More</button>
      </div>
       </div>
      
      
      </div>
    );//end return

  }//end render
};//end class

export default App;
