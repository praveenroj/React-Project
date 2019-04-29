import React, { Component } from 'react';
import { debounce } from 'lodash';

import { searchShowSearch } from '../../utils/api';

import SearchBox from '../SearchBox';
import ShowsList from '../ShowsList';

import './styles.scss';

class App extends Component {
  constructor() {
    super();
    this.MIN_SEARCH_LENGTH = 3;
    this.state = {
      searchTerm: '',
      showsList: [],
      isShowsListLoading: false,
      isShowsListError: null
    }
    this.debounceSearchShowSearch = debounce(this.searchShowSearch, 300);
  }

  onSearchChange = (searchTerm) => this.setState({ searchTerm }, () => (searchTerm.length >= this.MIN_SEARCH_LENGTH) && this.debounceSearchShowSearch(searchTerm));

  searchShowSearch = async (searchTerm) => {
    this.setState({
      isShowsListLoading: true
    })
    try {
      const showsList = await searchShowSearch(searchTerm);
      this.setState({
        showsList,
        isShowsListLoading: false,
        isShowsListError: false
      })
    } catch(e) {
      this.setState({
        isShowsListLoading: false,
        isShowsListError: e
      });
    }
  }

  clearSearch = () => this.setState({ searchTerm: '', showsList: [], isShowsListLoading: false, isShowsListError: false  })


  render() {
    const { showsList, isShowsListLoading, isShowsListError, searchTerm } = this.state;
    return (
      <div className="app-container">
        <SearchBox searchTerm={searchTerm} onChange={this.onSearchChange} clearSearch={this.clearSearch} />
        <ShowsList showsList={showsList} isLoading={isShowsListLoading} isError={isShowsListError} />
      </div>
    );
  }
}

export default App;
