import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DemocritusCloud extends React.Component{
  constructor(props){
      super(props)
  }

  render(){
      return (<div>
          <JaneComp/>
          <ThomComp/>
          <StevenComp/>
          <JustinComp/>
      </div>)
  }

}

ReactDOM.render(<DemocritusCloud/>, document.getElementById('app'));