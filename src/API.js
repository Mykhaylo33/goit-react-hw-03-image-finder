const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35591917-63dcfa9e69eea21e43d62ef2e';

export const fetchImages = (searchValue, page) => {
  const url = `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("We're sorry, there are no pictures for your search");
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
