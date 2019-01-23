import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            characters: this.props.characters,
            searchTerm: ''
        };
    }

    setSearchTerm(e) {
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        });
    }

    filterCharacters() {
        this.setState({
            characters: this.props.characters.filter(character => character.name.toLowerCase().includes(this.state.searchTerm))
        });
    }

    render () {
        return (
            <div className="live-search">
                <SearchForm handleChange={e => {
                    this.setSearchTerm(e);
                    this.filterCharacters();
                    }} />
                <CharacterCount count={this.props.characters.length} />
                <CharacterList characters={this.state.characters} />
            </div>
        );
    }
}
