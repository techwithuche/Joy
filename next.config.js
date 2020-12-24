const withCss = require('@zeit/next-sass');
const withSass = require('@zeit/next-css');
const withOffline = require('next-offline');


const Css = withSass({
   
   cssLoaderOptions: {
       url: false
   },
    
});

const  nextConfig = {
    env: {
        REACT_APP_API_URL: 'http://localhost:5000/api',
       
    },
   withCss,
   Css,
}

module.exports = withOffline(nextConfig)