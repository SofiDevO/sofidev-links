import { fetchYouTubeVideos } from '@services/youtubeService';
const channelId = "UC36_js-krsAHAEAWpEDhHtw"; // Youtube Channel ID

const initializeModal = (iframe, videoData) => {
  const videoNumber = iframe.getAttribute("vnum");
  const video = videoData[videoNumber];
  const videoId = video.link.split("v=")[1];
  const embeddUrl = `https://youtube.com/embed/${videoId}?controls=1&autoplay=1`;

  iframe.setAttribute("src", embeddUrl);
}
export const loadVideo = async (iframe) => {
  try {
    const videoData = await fetchYouTubeVideos(channelId);
    initializeModal(iframe, videoData);
  } catch (error) {
    console.error("Error loading video:", error);
  }
};

// Initialize video modal for all iframes with class "latestVideoEmbed"
const iframes = document.getElementsByClassName("latestVideoEmbed");
if (iframes.length > 0) {
  loadVideo(iframes[0]);
}
