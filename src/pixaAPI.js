import axios from "axios";
export async function getPictures(search, pageCount) {
  const BASE_URL = 'https://pixabay.com/api/';
    const options = {
    params: {
      key: '18437438-e84daa7a60435ecf6da817657',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: pageCount,
    },
  };
    const response = await axios.get(`${BASE_URL}?q=${search.replace(/ /g, '+')}`, options);
    
  return response;
}
