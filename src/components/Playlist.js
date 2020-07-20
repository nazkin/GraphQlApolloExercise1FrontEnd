import React from 'react';
import './playlist.css';
import { graphql } from 'react-apollo';
import {getSongsQuery} from '../graphql/queries'



const Playlist = (props)=> {
    console.log(props)
    let loading = props.data.loading;
    let songs = loading ? [] : props.data.songs;
    let songsList;
    if(songs){
        songsList = songs.map(song=> {
            return (
                <div className="item" key={song.id}>
                   
                        <h4><span className="song-name">{song.name}</span>   <span className="artist-name">(prod. {song.artist.name})</span></h4>
                        <h6>{song.genre}</h6>
                  

                </div>
            )
        });
    }
    return (
        <div className="list">
            {songsList}
        </div>
    )
}

export default graphql(getSongsQuery)(Playlist);