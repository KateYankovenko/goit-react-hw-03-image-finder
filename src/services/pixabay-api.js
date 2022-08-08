import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = `27730818-b3b91ab106a7108cef17bdc3c`;


export default async function fetchResult(url, query, page) {
  const response = await axios
    .get(url, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: `true`,
        per_page: 12,
        page: page,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results with query "${query}"`;
    });
  const images = await response.data;
  if (images.totalHits === 0) {
    Notify.warning(`Sorry, no images found with query "${query}"`);
  }
  return images;
}

 