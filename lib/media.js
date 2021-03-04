import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.formats.small.url
    ? getStrapiURL(media.formats.small.url)
    : media.url;
  return imageUrl;
}