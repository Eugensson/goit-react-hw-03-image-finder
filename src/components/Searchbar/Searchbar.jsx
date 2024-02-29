import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { IconContext } from "react-icons";
import { MdImageSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { Header, LogoWrapper, Logo, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled';

class Searchbar extends Component {
    state = {
        searchQuery: ''
    }

    handleNameChange = e => {
        this.setState({ searchQuery: e.target.value.toLowerCase() });
    };

    resetForm = () => {
        this.setState({ searchQuery: '' });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
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
        this.props.onSubmit(this.state.searchQuery.trim())

        this.resetForm();
    }

    render() {
        return (
            <Header>
                <LogoWrapper href="/goit-react-hw-03-image-finder">
                    <IconContext.Provider value={{ size: '45px', color: '#ff0000' }}>
                        <MdImageSearch />
                    </IconContext.Provider>
                    <Logo>Image<span>Finder</span> </Logo>
                </LogoWrapper>
                
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                        <IconContext.Provider value={{ size: '22px', color: '#000' }}>
                            <FaSearch />
                        </IconContext.Provider>                        
                    </SearchFormBtn>
                    <SearchFormInput type="text" value={this.state.searchQuery} onChange={this.handleNameChange} placeholder="Enter images or photo name"/>
                </SearchForm>
            </Header>            
        )
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;