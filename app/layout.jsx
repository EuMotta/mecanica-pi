import '../styles/globals.css';

export default ({ children, title }) => (
  <html lang="en">
    <head>
      <title>{title ? `${title} - MECANICA` : 'MECANICA'}</title>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
);
