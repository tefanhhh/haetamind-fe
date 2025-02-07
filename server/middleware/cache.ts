export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'public, max-age=31536000, stale-while-revalidate=86400');
});
