import React from 'react';
import './playlist.css';
import { graphql } from 'react-apollo';
import {getSongsQuery} from '../graphql/queries'


// const getSongsQuery = gql`
//     {
//         songs{
//             name,
//             genre,
//             id
//         }
//     }
// `;

const Playlist = (props)=> {
    let loading = props.data.loading;
    let songs = loading ? [] : props.data.songs;
    let songsList;
    if(songs){
        songsList = songs.map(song=> {
            return (
                <div key={song.id}>
                   
                        <h4>{song.name}</h4>
                        -
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