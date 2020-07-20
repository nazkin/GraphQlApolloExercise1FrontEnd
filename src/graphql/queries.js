import { gql } from 'apollo-boost';


const getArtistsQuery = gql`
    {
        artists {
            name
            id
        }
    }
`;

const getSongsQuery = gql`
    {
        songs{
            name,
            genre,
            id,
            artist {
                name
            }
        }
    }
`;

const addArtistMutation = gql`
    mutation($name: String!, $age: Int!) {
        addArtist(name: $name, age: $age){
            name,
            id
        }
    }

`;

const addSongMutation = gql`
    mutation($name: String!, $genre: String!, $artistId: ID!){
        addSong(name: $name, genre: $genre, artistId: $artistId){
            name,
            id
        }
    }
`;


export {getArtistsQuery, getSongsQuery, addArtistMutation, addSongMutation}