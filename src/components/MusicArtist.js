import React from 'react';
import axios from 'axios';
export default class MusicArtist extends React.Component {
    state = {
        artists: []
    }
    componentDidMount() {
        axios.get(` https://itunes.apple.com/search?term=jack+johnson`)
            .then(res => {
                console.log(res);
                this.setState({ artists: res.data })
            })
    }
    render() {
        return (
            <ul>
                {this.state.artists.map(artist => <li>{artist.name}</li>)}
            </ul>
        )
    }
}