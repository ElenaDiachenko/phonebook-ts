import axios from 'axios';

const PixabayAPI = axios.create({
  baseURL: 'https://pixabay.com',
});

export const fetchImages = async query => {
  const searchParams = new URLSearchParams({
    key: '28311245-d5a87b2fb61808ea8cd4c4eb5',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 3,
  });
  const res = await PixabayAPI.get(`/api/?${searchParams}`);
  return res.data.hits;
};
