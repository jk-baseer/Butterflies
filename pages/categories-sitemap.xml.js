/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import tradly from 'tradly';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = process.env.SITE_URL;

  const { data } = await tradly.app.getCategory({
    bodyParam: { parent: 0, type: 'listings' },
  });
  const categories = data?.categories || [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 
      ${categories
        .map((category) => {
          return `
              <url>
                <loc>${baseUrl}/category/${category.name.replace(
            /\s/g,
            '-'
          )}?id=${category.id}</loc>
              
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
