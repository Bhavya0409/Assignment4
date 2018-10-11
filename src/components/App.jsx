import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import $ from 'jquery';

class App extends Component {
  state = {
    markdown: '',
    mdName: '',
    htmlName: ''
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      markdown: e.target.value
    });
  };

  updateMdName = (e) => {
    this.setState({
      ...this.state,
      mdName: e.target.value
    })
  };

  updateHtmlName = (e) => {
    this.setState({
      ...this.state,
      htmlName: e.target.value
    })
  };

  getDisabled = (index) => {
    const {mdName, htmlName} = this.state;
    const field = index === 1 ? mdName : htmlName;
    return field.trim().length === 0 ? 'disabled' : '';
  };

  render() {
    const {markdown, mdName, htmlName} = this.state;
    return (<div className="container">
      <div className="row">
        <div className="col-sm col-md col-lg side left">
          <h2>Enter Markdown Text</h2>
          <textarea placeholder="Ex. # Hello Word!" value={markdown} onChange={this.handleChange}/>

          <div className="download-section">
            <input type="text" placeholder='Name of File (i.e. "my-file")' value={mdName} onChange={this.updateMdName}/>
            <a className={'btn btn-primary ' + this.getDisabled(1)}
               download={mdName + '.md'}
               href={URL.createObjectURL(new Blob([markdown]))}>
                Download
            </a>
          </div>
        </div>

        <div className="col-sm col-md col-lg side right">
          <h2>Regular Text Here</h2>
          <div className="markdown-container">
            <ReactMarkdown source={markdown}/>
          </div>

          <div className="download-section">
            <input type="text" placeholder='Name of File (i.e. "my-file")' value={htmlName} onChange={this.updateHtmlName}/>
              <a className={'btn btn-primary ' + this.getDisabled(2)}
                 download={htmlName + '.html'}
                 href={URL.createObjectURL(new Blob([$(".markdown-container").html()], {type: 'text/html'}))}>Download</a>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;