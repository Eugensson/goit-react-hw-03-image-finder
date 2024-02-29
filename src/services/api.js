import axios from 'axios';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=34223643-b3db1c288a37bd2710c13c9b4&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Request failed with status code ' + response.status);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
