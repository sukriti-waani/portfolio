export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href; // it is taking a relative path, (base URL)
}