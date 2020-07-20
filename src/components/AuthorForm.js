import React, {useState} from 'react';
import { graphql } from 'react-apollo';
import {addArtistMutation, getArtistsQuery} from '../graphql/queries';
import './forms.css';


const AuthorForm = (props)=>  {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const submitArtistHandler = (e)=> {
        e.preventDefault();
        props.mutate({
            variables:{
                name: name,
                age: age
            },
            refetchQueries: [{query: getArtistsQuery}]
        }).then(result=> {
            console.log(result);
            setName("");
            setAge(0);
        })


    }

    return (
        <form className="p-5 my-3 aForm" onSubmit={submitArtistHandler}>
            <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=> {setName(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="text" className="form-control" value={age} onChange={(e)=> setAge(Number(e.target.value))}/>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}


export default graphql(addArtistMutation)(AuthorForm);