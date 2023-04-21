import { Component } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImagesWithQuery } from '../../services/api';
import {
  Searchbar,
  ImageGallery,
  LoadMoreButton,
  Modal,
  Loader,
} from 'components/index';
import { AppContainer } from 'components/App/App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    data: [],
    largeImageURL: '',
    page: 1,
    showModal: false,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ loading: true });
      fetchImagesWithQuery(this.state.searchQuery, 1)
        .then(data => {
          this.setState({ data, loading: false });
        })
        .catch(error => console.log(error));
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetchImagesWithQuery(this.state.searchQuery, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data],
            loading: false,
          }));
        })
        .catch(error => console.log(error));
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalClick = largeImageURL => {
    this.setState({ largeImageURL, showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { data, loading, showModal, largeImageURL } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery data={data} modalClick={this.handleModalClick} />
        {loading && <Loader />}
        {data.length > 0 ? (
          <LoadMoreButton handleLoadMore={this.handleLoadMore} />
        ) : null}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppContainer>
    );
  }
}

export default App;
