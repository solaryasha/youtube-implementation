
const convertDuration = (str) => {
  const regex = /\d{1,2}/g;

  return str.match(regex).join(":");
};

const convertPublishedTime = (str) => (
  new Date().getDate() - new Date(str).getDate()
);

const convertData = ({items}) => {
  return items.map(video => {
    const { id, snippet, contentDetails, statistics } = video;
    const { publishedAt, title,thumbnails, channelTitle } = snippet;
    const { medium } = thumbnails;
    const { url } = medium;
    const { duration } = contentDetails;
    const { viewCount } = statistics;
    const fixedDuration = convertDuration(duration);
    const publishedTime = convertPublishedTime(publishedAt);


    return {id, publishedTime, title, url, channelTitle, fixedDuration, viewCount}
  })
}
