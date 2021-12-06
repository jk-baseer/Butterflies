## USE CASES
- terms condition
- custom url
- embedded pages
- support 
- any other things. 

## Install packages

npm install @next/mdx @mdx-js/loader
 
Update the next config package like this. 
Note: The Images and env section is already in tradly next config. 

The additional things you are adding is “WithMDX” section with “PageExtensions” and “cons with MDX”


const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
  });
  module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx'],
	images: {
	  domains: [
		'storage.googleapis.com',
		'tradly-paas-sandbox.s3.amazonaws.com',
		'tradly-paas.s3.amazonaws.com',
	  ],
	},
	env: {
	  ENVIRONMENT: process.env.ENVIRONMENT,
	  BASE_URL: process.env.BASE_URL,
	  API_KEY: process.env.API_KEY,
	  SITE_URL: process.env.SITE_URL,
	},
  });
 

 

 

Test adding new mdx files or other files 

 

You can put this code in the new mdx file. 


# H1 heading

## H2 heading

This is a list in markdown:

- One
- Two
- Three
 

Stop the compiling and restart again for it to work. 
