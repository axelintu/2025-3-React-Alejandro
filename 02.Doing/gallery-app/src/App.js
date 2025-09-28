import { useState } from 'react';
import './App.css';
import Layout from './layout/Layout';

function App() {
  const albums = [{
    title:"My Album",
    description:"Description",
    images:[{url:"",name:"My Image"}],
  }]

  return (
    <div className="App">
      <h1>App</h1>
      <Layout>
        <AlbumCard album={albums[0]}></AlbumCard>
      </Layout>
    </div>
  );
}

export default App;
