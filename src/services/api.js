export const fetchImagesWithQuery = (searchQuery, page) => {
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=34223643-b3db1c288a37bd2710c13c9b4&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url)
    .then(response =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then(data => data.hits);
};
