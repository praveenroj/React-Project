import React, { Component } from 'react';
import ShowDetails from '../ShowDetails';
import "./styles.scss";
class SearchList extends Component {
  render() {
    const { isLoading, isError, showsList } = this.props;
    if (isLoading) return "Loading ....";
    if (isError) return "Oops! Somthing went wrong";
    if (!showsList.length) return "No Shows Avalable";
    return (
      <div className="searchlist-container">
        <div className="row">
          {
            showsList.map(({ show }) => {
              return (
                <div className="column" key={show.id}>
                  <ShowDetails show={show} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default SearchList;
