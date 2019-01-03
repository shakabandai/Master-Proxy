import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MusicPlayer from './Jane-MusicPlayer/client/src/components/MusicPlayer.jsx';
 import CommentSection from './siege211Component-Service/client/src/index.jsx';
 import SongInfo from './steven-songsInfo-module/client/src/components/App.jsx';
 import Sidebar from './JustinComponent-Service/client/index.jsx';


class DemocritusCloud extends React.Component{
  constructor(props){
      super(props)
  }

  render(){
      return (
        <div>
         <CommentSection />
         <SongInfo />
         <Sidebar />
         <MusicPlayer />
        </div>)
  }

}

ReactDOM.render(<DemocritusCloud/>, document.getElementById('app'));