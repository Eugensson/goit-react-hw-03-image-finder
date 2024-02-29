import { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImagesWithQuery } from 'services/api';

import {
  Searchbar,
  ImageGallery,
  Button,
  Modal,
  Loader,
  Notification,
} from 'components';

import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    data: [],
    totalHits: 0,
    largeImageURL: '',
    page: 1,
    showModal: false,
    loading: false,
    isSearch: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true });

      fetchImagesWithQuery(searchQuery, page)
        .then(data => this.setState({ data: data.hits, totalHits: data.totalHits,  loading: false, isSearch: true }))
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetchImagesWithQuery(this.state.searchQuery, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data.hits],
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
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
    const { data, loading, showModal, largeImageURL, page, totalHits, isSearch } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {data.length >0 && <ImageGallery data={data} modalClick={this.handleModalClick} />}
        {isSearch && totalHits === 0 && !loading && <Notification message="No results were found for your request. Enter another images or photo name."/> }
        {loading && <Loader />}
        {data.length > 0 && page < totalHits / 12 && <Button handleLoadMore={this.handleLoadMore} />}
        {showModal &&
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt='' />
          </Modal>
        }
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
