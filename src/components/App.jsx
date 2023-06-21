import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { fetchImages } from 'API';
import './general.css';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    showModal: false,
    modalImageURL: '',
    status: 'idle',
    error: null,
    page: 1,
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue: prevQuery, page: prevPage } = prevState;
    const { searchValue: nextQuery, page: nextPage } = this.state;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchImagesData(nextQuery, nextPage);
    }
  }

  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue, status: 'pending', page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  fetchImagesData = (searchValue, page) => {
    fetchImages(searchValue, page)
      .then((data) => {
        if (!data.totalHits) {
          alert("No pictures were found");
          this.setState({
            status: 'resolved',
            showBtn: false,
          });
          return;
        }

        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
          showBtn: prevState.page < Math.ceil(data.totalHits / 12),
        }));
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error, status: 'rejected' });
      });
  };

  toggleModal = (modalImageURL) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      modalImageURL,
    }));
  };

  render() {
    const { images, showModal, modalImageURL, showBtn, status, error } = this.state;

    return (
      <div className="general__css">
        <SearchBar afterSubmit={this.handleFormSubmit} />

        {status === 'pending' && <Loader />}

        {status === 'rejected' && <p>{error && error.message}</p>}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            showModal={showModal}
            modalImageURL={modalImageURL}
            toggleModal={this.toggleModal}
          />
        )}

        {showBtn && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default App;
