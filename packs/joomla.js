/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/* eslint-disable max-len */

'use strict';

const icon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 256 258'%3E%3Cpath d='M255.7 35.6a33.7 33.7 0 00-67-4.8l-.4-.2c-27.6-12.4-50.8 9.6-50.8 9.6l-61.4 61.7 24.3 23.4 49.4-48.6c23-23 35.6-7.4 35.6-7.4 17.4 14.6.6 32 .6 32l24.9 24c20.3-22 21.5-41.1 15.3-56.3a33.7 33.7 0 0029.5-33.4' fill='%23F9AE41'/%3E%3Cpath d='M226.5 190.5l.2-.3c12.4-27.6-9.6-50.8-9.6-50.8L155.4 78l-23.3 24.3 48.5 49.4c23 23 7.5 35.6 7.5 35.6-14.7 17.4-32 .6-32 .6l-24 24.9c21.9 20.3 41 21.5 56.2 15.3a33.7 33.7 0 1038.2-37.6' fill='%23EE4035'/%3E%3Cpath d='M156 133l-49.5 48.6c-23 23-35.6 7.4-35.6 7.4-17.4-14.6-.6-32-.6-32l-24.9-24c-20.3 22-21.4 41.1-15.3 56.3a33.7 33.7 0 1037.6 38.2l.3.2c27.6 12.4 50.8-9.6 50.8-9.6l61.4-61.7-24.3-23.4' fill='%234F91CD'/%3E%3Cpath d='M75.7 106.6c-23-23-7.4-35.6-7.4-35.6 14.6-17.4 32-.6 32-.6l24-24.9c-22-20.3-41-21.5-56.3-15.3a33.7 33.7 0 10-38.2 37.6l-.2.3C17.2 95.7 39.2 119 39.2 119l61.7 61.4 23.4-24.3-48.6-49.4' fill='%237AC043'/%3E%3C/svg%3E`;

const UIStrings = {
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused CSS, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unused-css-rules': 'Consider reducing, or switching, the number of [Joomla extensions](https://extensions.joomla.org/) loading unused CSS in your page. To identify extensions that are adding extraneous CSS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve image loading by using webp in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-webp-images': 'Consider using a [plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=webp) or service that will automatically convert your uploaded images to the optimal formats.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by lazy loading images that are initially offscreen in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'offscreen-images': 'Install a [lazy-load Joomla plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=lazy%20loading) that provides the ability to defer any offscreen images, or switch to a template that provides that functionality. Starting with Joomla 4.0, all new images will [automatically](https://github.com/joomla/joomla-cms/pull/30748) get the `loading` attribute from the core.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve site loading performance by reducing the total bytes delivered by their page in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'total-byte-weight': 'Consider showing excerpts in your article categories (e.g. via the read more link), reducing the number of articles shown on a given page, breaking your long posts into multiple pages, or using a plugin to lazy-load comments.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by reducing the amount of render blocking resources present on their page, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'render-blocking-resources': 'There are a number of Joomla plugins that can help you [inline critical assets](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) or [defer less important resources](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance). Beware that optimizations provided by these plugins may break features of your templates or plugins, so you will need to test these thoroughly.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their CSS files in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unminified-css': 'A number of [Joomla extensions](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) can speed up your site by concatenating, minifying, and compressing your css styles. There are also templates that provide this functionality.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their Javascript files in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unminified-javascript': 'A number of [Joomla extensions](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) can speed up your site by concatenating, minifying, and compressing your scripts. There are also templates that provide this functionality.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by encoding animated images as video, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'efficient-animated-content': 'Consider uploading your GIF to a service which will make it available to embed as an HTML5 video.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused Javascript files in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unused-javascript': 'Consider reducing, or switching, the number of [Joomla extensions](https://extensions.joomla.org/) loading unused JavaScript in your page. To identify plugins that are adding extraneous JS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the extension responsible from the URL of the script. Look out for extensions that have many scripts in the list which have a lot of red in code coverage. An extension should only enqueue a script if it is actually used on the page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve their site by enabling long caching in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-long-cache-ttl': 'Read about [Browser Caching in Joomla](https://docs.joomla.org/Cache).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve site performance by optimizing images, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-optimized-images': 'Consider using an [image optimization plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) that compresses your images while retaining quality.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance via enabling text compression in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-text-compression': 'You can enable text compression by enabling Gzip Page Compression in Joomla (System > Global configuration > Server).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by using responsive images in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-responsive-images': 'Consider using a [responsive images plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=responsive%20images) to use responsive images in your content.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve the server-response-time speed metric, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'server-response-time': 'Templates, extensions, and server specifications all contribute to server response time. Consider finding a more optimized template, carefully selecting an optimization extension, and/or upgrading your server.',
};

module.exports = {
  id: 'joomla',
  title: 'Joomla',
  icon,
  UIStrings,
};
