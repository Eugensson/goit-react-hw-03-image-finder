import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchImagesWithQuery } from '../../services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/LoadMoreBtn/LoadMoreBtn';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import { AppContainer } from 'components/App/App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    data: [],
    largeImageURL: '',
    page: 1,
    isOpen: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ isLoading: true });
      fetchImagesWithQuery(this.state.searchQuery, 1)
        .then(data => {
          this.setState({ data, isLoading: false });
        })
        .catch(error => console.log(error));
    } else if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      fetchImagesWithQuery(this.state.searchQuery, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data],
            isLoading: false,
          }));
        })
        .catch(error => console.log(error));
    }
  }

  handleModalClick = largeImageURL => {
    this.setState({ largeImageURL, isOpen: true });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          data={this.state.data}
          modalClick={this.handleModalClick}
        />
        {this.state.isLoading && <Loader />}
        {this.state.data.length > 0 ? (
          <LoadMoreButton handleLoadMore={this.handleLoadMore} />
        ) : null}
        {this.state.isOpen && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.onModalClose}
          />
        )}
        <ToastContainer />
      </AppContainer>
    );
  }
}

export default App;
