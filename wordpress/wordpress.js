/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/* eslint-disable max-len */

'use strict';

const wordpressIcon = `data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2321759b'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E`;

module.exports = {
  id: 'wordpress',
  iconDataURL: wordpressIcon,
  title: 'WordPress',
  descriptions: {
    'unused-css-rules':
      'Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused CSS in your page. To identify plugins that are adding extraneous CSS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page.',
    'uses-webp-images':
      'Consider using a plugin/service that will automatically convert your uploaded images to the optimal formats.',
    'offscreen-images':
      'Install a WordPress plugin that provides the ability to defer (lazy-load) any offscreen images, or switch to a theme that provides that functionality. Also consider using AMP.',
    'total-byte-weight':
      'Consider showing excerpts in your post lists (e.g. via the more tag), reducing the number of posts shown on a given page, breaking your long posts into multiple pages, or using a plugin to lazy-load comments.',
    'render-blocking-resources':
      'There are a number of WordPress plugins that can help you inline critical assets or defer less important resources. Beware that optimizations provided by these plugins may break features of your theme or plugins, so you will likely need to make code changes.',
    'unminified-css':
      'A number of WordPress plugins can speed up your site by concatenating, minifying, and compressing your styles. You may also want to use a build process to do this minification up-front if possible.',
    'unminified-javascript':
      'A number of WordPress plugins can speed up your site by concatenating, minifying, and compressing your scripts. You may also want to use a build process to do this minification up-front if possible',
    'efficient-animated-content':
      'Consider uploading your GIF to a service which will then make it available to embed an HTML5 video. Alternatively find a plugin that will automatically convert GIF images into videos upon upload.',
    'unused-javascript':
      'Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused JavaScript in your page. To identify plugins that are adding extraneous JS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the script. Look out for plugins that have many scripts in the list which have a lot of red in code coverage. A plugin should only enqueue a script if it is actually used on the page.',
    'uses-long-cache-ttl':
      'Read more about [Browser Caching in WordPress](https://codex.wordpress.org/WordPress_Optimization#Browser_Caching).',
    'uses-optimized-images':
      'Consider using a WordPress plugin that optimizes your images, automatically serves the required sizes, and serves them from a CDN.',
    'uses-text-compression': 'You can enable this in your web server configuration.',
    'uses-responsive-images':
      'Upload images directly through the media library to ensure that the required image sizes are available, and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using `Full Size` images unless the dimensions are adequate for their usage. [Learn More](https://codex.wordpress.org/Inserting_Images_into_Posts_and_Pages#Image_Size)',
    'time-to-first-byte':
      'Themes, plugins, and server specifications all contribute to server response time. Consider finding a more optimized theme, carefully selecting an optimization plugin, and/or upgrading your server.',
  },
};
