import React, {useState} from 'react'
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getArtistsQuery, addSongMutation, getSongsQuery} from '../graphql/queries';
import './forms.css';


const SongForm = (props)=>  {
    const [songName, setSongName] = useState("");
    const [genre, setGenre] = useState("");
    const [artist, setArtist] = useState("select");


    const submitSongHandler = (e) => {
        e.preventDefault();
        if(songName === "" || genre === "" || artist === "select"){
            console.log('Incomplete form, please fill out all empty fields')
            return;
        }
        props.addSongMutation({
            variables:{
                name: songName,
                genre: genre,
                artistId: artist
            },
            refetchQueries: [{query: getSongsQuery}]
        }).then(result=> {
            console.log(result);
            setSongName("");
            setGenre("");
            setArtist("select");
        }).catch(err=> console.log(err));
    }

    var data = props.getArtistsQuery;
    let artists = data.loading ? [] : data.artists;
    let options;

    if(artists && !data.loading){
        options = artists.map(art=> {
            return (<option key={art.id} value={art.id}>
                        {art.name}
                    </option>
            )
        });
    }else {
        options = <option>---</option>
    }

    return (
        <form className="p-5 my-3 aForm" onSubmit={submitSongHandler}>
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

export default compose(
    graphql(getArtistsQuery, { name: "getArtistsQuery" }),
    graphql(addSongMutation, { name: "addSongMutation" })
)(SongForm);