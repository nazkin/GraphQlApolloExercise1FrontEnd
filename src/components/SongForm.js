import React, {useState} from 'react'
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getArtistsQuery, addSongMutation} from '../graphql/queries'

const SongForm = (props)=>  {
    const [songName, setSongName] = useState("");
    const [genre, setGenre] = useState("");
    const [artist, setArtist] = useState("select");

    const submitSongHandler = (e) => {
        e.preventDefault();
        console.log(songName, genre, artist);
    }


    let queryLoading = props.data.loading;
    let artists = queryLoading ? [] : props.data.artists;
    let options;
    if(artists){
        options = artists.map(art=> {
            return (<option key={art.id} value={art.id}>
                        {art.name}
                    </option>
            )

        })
    }
    console.log(props.data.artists)
    return (
        <form className="p-5 my-3" onSubmit={submitSongHandler}>
            <div className="form-group">
                <label >Song Title</label>
                <input type="text" className="form-control" value={songName} onChange={(e)=> setSongName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Genre</label>
                <input type="text" className="form-control" value={genre} onChange={(e)=> setGenre(e.target.value)}/>
            </div>
            {/* Author dropDown */}
            <select className="my-3 mr-5" onChange={(e)=> setArtist(e.target.value)} value={artist}>
                <option value="select">*Select Artist</option>
                {options}
            </select>
            <button type="submit" className="btn btn-info">Add</button>
        </form>
    )
}
export default graphql(getArtistsQuery)(SongForm);