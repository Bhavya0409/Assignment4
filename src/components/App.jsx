import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  state = {
    markdown: ''
  }

  handleChange = (e) => {
    this.setState({markdown: e.target.value});
  }

  render() {
    const {markdown} = this.state;
    // console.log(markdown);
    return (<div className="container">
      <div className="row">
        <div className="col-sm col-md col-lg side left">
          <div className="header">
            <h2>Enter Markdown Text</h2>
            <button className="btn btn-primary">Download</button>
          </div>
          <textarea placeholder="Ex. # Hello Word!" value={markdown} onChange={this.handleChange}/>
        </div>
        <div className="col-sm col-md col-lg side right">
          <div className="header">
            <h2>Markdown Text Here</h2>
            <button className="btn btn-primary">Download</button>
          </div>
          <div className="markdown-container">
            <ReactMarkdown source={markdown}/>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;