export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
  };

  return [homeUrl];
}
