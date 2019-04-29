import React, { Component } from 'react';

import './styles.scss';
class SearchBox extends Component {
  onChange = e => this.props.onChange(e.target.value);
  render() {
    const { searchTerm, clearSearch } = this.props;
    return (
      <div className="searchbox-container">
        <input value={searchTerm} onChange={this.onChange} placeholder="Search Tv shows" />
        <button onClick={clearSearch}>Clear</button>
      </div>
    );
  }
}

export default SearchBox;
