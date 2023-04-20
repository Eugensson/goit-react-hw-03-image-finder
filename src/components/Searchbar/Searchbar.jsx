import { Component } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

class Searchbar extends Component {
  state = { searchQuery: '' };

  handleNameChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.trim().toLowerCase() });
  };

  resetForm = () => {
    this.setState({ searchQuery: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery === '') {
      toast.info('The input field must not be empty!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.resetForm();
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <GoSearch />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
