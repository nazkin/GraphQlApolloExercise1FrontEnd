import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AuthorForm from './components/AuthorForm';
import SongForm from './components/SongForm';
import Playlist from './components/Playlist';


import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <div className="jumbotron jumbo">
        <h1>Personal Music Management Tool </h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2 className="titleforms">Playlist</h2>
          <Playlist />
        </div>
        <div className="col-md-6">
          <h2 className="titleforms">Add Author</h2>
          <AuthorForm />
          <h2 className="titleforms">Add Song</h2>
          <SongForm />
        </div>
      </div>
    </div>

    </ApolloProvider>

  );
}

export default App;
