const convertDuration = (str) => {
  const regex = /\d{1,2}/g;

  return str.match(regex).join(':');
};

const convertPublishedTime = str => (
  new Date().getDate() - new Date(str).getDate()
);

export const convertData = ({ items }) => items.map((video) => {
  const { id, snippet, contentDetails, statistics } = video;
  const { publishedAt, description, title, thumbnails, channelTitle } = snippet;
  const { medium } = thumbnails;
  const { url } = medium;
  const { duration } = contentDetails;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const fixedDuration = convertDuration(duration);
  const publishedTime = convertPublishedTime(publishedAt);

  return {
    id, publishedTime, title, url, description, channelTitle, fixedDuration, viewCount, likeCount, dislikeCount,
  };
});
