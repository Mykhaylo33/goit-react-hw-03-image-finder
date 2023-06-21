import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {

  state = {
    searchInput: '',
  }

  handleNameChange = (event) => {
    this.setState({ searchInput: event.currentTarget.value.toLowerCase() })
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.state.searchInput.trim() === '') {
      alert('Please put in a valid')
      return
    }
    this.props.afterSubmit(this.state.searchInput);
  }

  render() {

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchInput}
            onChange={this.handleNameChange}
          />

          <button type="submit" className="button" style={{ marginLeft: 15 }}>
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
