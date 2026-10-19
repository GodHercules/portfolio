const faviconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#0b1020" />
    <path d="M18 14h9v14h10V14h9v36h-9V36H27v14h-9V14Z" fill="#3b82f6" />
  </svg>
`;

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
