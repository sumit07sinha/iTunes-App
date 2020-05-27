
import { Button } from 'antd';
import React, { Component } from 'react';
import Artist from './artistResults';


class InputSearchBar extends Component {
    state = {
        query: '',
        artistDetails: 'undefined'
    }
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }

    getArtistDetails = () => {
        fetch('artist.txt', { mode: 'no-cors' })
            .then(response => response.text())
            .then(data => { console.log(data); this.setState({ artistDetails: JSON.parse(data) }) })
            .catch(error => console.error(error));
    }

    updateQuery = (query) => {
        this.setState({ query })
    }
    clearQuery = () => {
        this.setState({ query: '' })
    }
    render() {
        const artistComponentsArray = [];
        this.state.artistDetails && this.state.artistDetails.results && this.state.artistDetails.results.map(artistData => {
            artistComponentsArray.push(<Artist artistData={artistData} />)
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
                    <Button type="primary"
                        className='add-artist'
                        onClick={this.getArtistDetails} >+</Button>
                </div>
                {artistComponentsArray}
            </div>
        )
    }
}
export default InputSearchBar



// const InputSearchBar = (React.FunctionComponent = () => {
//     const teamData = {
//         query: '',
//         artistDetails: 'undefined'
//     }
//     getArtistDetails = () => {
//         fetch('artist.txt', { mode: 'no-cors' })
//             .then(response => response.text())
//             .then(data => { console.log(data); setData({ artistDetails: JSON.parse(data) }) })
//             .catch(error => console.error(error));
//     }

//     updateQuery = (query) => {
//         setData({ query })
//     }
//     const artistComponentsArray = [];
//     artistDetails && artistDetails.results && artistDetails.results.map(artistData => {
//         artistComponentsArray.push(<Artist artistData={artistData} />)
//         const [data, setData] = useState(teamData);
//         useEffect(() => {
//             setData(teamData);
//         }, [setData]);
//         return (
//             <div className='list-artists'>
//                 <div className='list-artists-top'>
//                     <input
//                         className='search-artists'
//                         type='text'
//                         placeholder='Search artists'
//                         ref={textInput}
//                         value={teamData.query}
//                         onChange={(event) => updateQuery(event.target.value)}
//                     />
//                     <Button type="primary"
//                         className='add-artist'
//                         onClick={getArtistDetails} >+</Button>
//                 </div>
//                 {artistComponentsArray}
//             </div>
//         )
//     });
//     export default InputSearchBar;