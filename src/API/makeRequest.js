export const API_KEY = 'AIzaSyC_PBUS41BC6Jad-5OpCKV6-rZZo5_9DEs';

export const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${API_KEY}`;

export const searchUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&`;
export const getData = (youRurl) => {
  const response = fetch(youRurl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
