import { Button } from 'antd';
import React, { Component } from 'react';
import Artist from './artistResults';

class InputSearchBar extends Component {
    state = {
        query: '',
        artistDetails: 'undefined'
    }
    updateQuery = (inputValue) => {
        this.setState({ query: inputValue })
    }
    getArtistDetails = () => {
        const url = `https://itunes.apple.com/search?term=${this.state.query.replace(" ", "+")}`;
        this.setState({ artistDetails: "" })
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const file = window.URL.createObjectURL(blob);
                fetch(file)
                    .then(response => response.text())
                    .then(text => { console.log(JSON.parse(text)); this.setState({ artistDetails: JSON.parse(text) }) })
            })
    }
    render() {
        const artistComponentsArray = [];
        this.state.artistDetails && this.state.artistDetails.results && this.state.artistDetails.results.map(artistData => {
            artistComponentsArray.push(<Artist artistData={artistData} key={artistData.previewUrl} />)
        })
        return (
            <div className='list-artists'>
                <div className='list-artists-top'>
                    <input
                        className='search-artists'
                        type='text'
                        placeholder='Search artists'
                        ref={this.textInput}
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />

                    <Button type="primary" className='add-artist'
                        onClick={this.getArtistDetails} >+</Button>

                </div>
                {artistComponentsArray}
            </div>
        )
    }
}
export default InputSearchBar