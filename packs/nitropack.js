const icon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="142" height="54"><g fill="none" fill-rule="evenodd"><g fill="#1B004E"><path d="M19.486 53.24h-3.891L4.682 39.247v13.936H0V32.946h5.444l9.475 12.398V32.946h4.567zM21.346 32.94h4.647v3.57h-4.647v-3.57Zm0 5.477h4.647V53.18h-4.647V38.417ZM40.569 53.183H36c-3.408 0-4.991-1.625-4.991-4.697v-6.22h-3.777V38.42h3.777v-5.474h4.598v5.474h4.958v3.846h-4.958v4.588c0 1.597.477 2.252 2.197 2.252h2.764v4.077ZM46.688 53.183h-4.57V38.42h4.57v2.308c.31-.686 1.351-2.336 4.425-2.336h3.13v4.56h-4.004c-2.593 0-3.55.967-3.55 3.019v7.212ZM70.612 45.802c0 4.56-3.409 7.75-8.01 7.75s-8.006-3.19-8.006-7.75c0-4.56 3.408-7.755 8.006-7.755 4.598 0 8.01 3.195 8.01 7.755Zm-4.599 0c0-2.14-1.35-3.733-3.408-3.733-2.057 0-3.44 1.594-3.44 3.733 0 2.139 1.41 3.733 3.44 3.733 2.03 0 3.408-1.598 3.408-3.733ZM72.47 32.946h11.7c4.543 0 7.192 2.28 7.192 6.526 0 4.247-2.649 6.577-7.191 6.577h-6.935v7.125h-4.765V32.946Zm4.766 4.218v4.676h6.485c1.832 0 2.736-.883 2.736-2.34 0-1.565-.904-2.336-2.736-2.336h-6.485ZM102.662 51.016c-.254.485-1.636 2.48-4.71 2.48-3.665 0-6.627-2.906-6.627-7.694 0-4.789 2.962-7.667 6.656-7.667 2.962 0 4.372 1.851 4.626 2.336v-2.05h4.567v14.762h-4.512v-2.167Zm-3.327-8.932c-2.03 0-3.384 1.594-3.384 3.733 0 2.14 1.354 3.733 3.384 3.733s3.327-1.597 3.327-3.733-1.298-3.733-3.327-3.733ZM119.184 43.578a2.98 2.98 0 0 0-2.749-1.494c-1.918 0-3.13 1.594-3.13 3.733 0 2.14 1.24 3.758 3.158 3.758 1.807 0 2.625-1.168 2.764-1.51h4.4c-.143 2.052-2.116 5.5-7.275 5.5-4.286 0-7.641-3.078-7.641-7.75 0-4.673 3.328-7.755 7.585-7.755 5.159 0 7.105 3.392 7.33 5.53l-4.442-.012ZM129.712 46.6v6.577h-4.567V32.194h4.567v11.998l5.838-5.784h5.751l-6.994 6.811 7.362 7.952h-5.921z"/></g><g fill="#25F5CE"><path d="M49.159 4.65c12.832 0 23.235 10.41 23.235 23.251h4.648C77.042 12.491 64.558 0 49.159 0c-15.4 0-27.883 12.492-27.883 27.901h4.647c0-12.841 10.403-23.25 23.236-23.25Z"/><path d="M44.852 25.793a3.632 3.632 0 0 1 2.6-5.097L63.8 16.951 50.426 27.09a3.626 3.626 0 0 1-5.574-1.296Z"/></g></g></svg>`;

const UIStrings = {
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Reduce Unused CSS` is the name of a feature and becomes link text to additional documentation.*/
  'unused-css-rules': 'Enable [Reduce Unused CSS](https://support.nitropack.io/hc/en-us/articles/360020418457-Reduce-Unused-CSS) to remove CSS rules that are not applicable to this page. This directly affects how fast the browser builds your page.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Image Optimization` is the name of a feature and becomes link text to additional documentation. `WebP` is the name of a standardized image format for the web.*/
  'modern-image-formats': 'Use [Image Optimization](https://support.nitropack.io/hc/en-us/articles/16547237162513) to automatically convert your images to WebP and improve your loading times.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Automatic Image Lazy Loading` is the name of a feature and becomes link text to additional documentation.*/
  'offscreen-images': 'Defer offscreen images by enabling [Automatic Image Lazy Loading](https://support.nitropack.io/hc/en-us/articles/12457493524369-NitroPack-Lazy-Loading-Feature-for-Images). This will load images only when they need to be displayed on user’s screen, resulting in quicker page load times.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Image Optimization`, `Minify HTML`, `Font Subsetting`, `Reduce Unused CSS` are names of features and become links to additional documentation.*/
  'total-byte-weight': 'To reduce network payloads, enable the following NitroPack settings that help with the compression and lazy loading of your resources, including — [Image Optimization](https://support.nitropack.io/hc/en-us/articles/16547237162513); [Minify HTML](https://support.nitropack.io/hc/en-us/articles/360061059394-Minify-Resources); [Font Subsetting](https://support.nitropack.io/hc/en-us/articles/10172273306769); [Reduce Unused CSS](https://support.nitropack.io/hc/en-us/articles/360020418457-Reduce-Unused-CSS); [Font Compression Upgrade](https://support.nitropack.io/hc/en-us/articles/16547272270865).',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Remove render-blocking resources`, `Delayed Scripts`, `Font Subsetting`, `Optimized CSS Delivery` and `Reduce Unused CSS` are names of features and become links to additional documentation.*/
  'render-blocking-resources': 'Enable [Remove render-blocking resources](https://support.nitropack.io/hc/en-us/articles/13820893500049-How-to-Deal-with-Render-Blocking-Resources-in-NitroPack) and [Delayed Scripts](https://support.nitropack.io/hc/en-us/articles/1500002600942-Delayed-Scripts) in NitroPack for faster initial load times. For even better results, activate [Font Subsetting](https://support.nitropack.io/hc/en-us/articles/10172273306769), [Optimize CSS Delivery](https://support.nitropack.io/hc/en-us/articles/16547344670353) and [Reduce Unused CSS](https://support.nitropack.io/hc/en-us/articles/360020418457-Reduce-Unused-CSS) – these features will optimize your CSS and font files so that they don’t block the rendering of your page.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Minify resources` is the name of a feature and becomes link text to additional documentation.*/
  'unminified-css': 'Enable [Minify resources](https://support.nitropack.io/hc/en-us/articles/360061059394-Minify-Resources) in your Caching settings to reduce the size of your CSS, HTML, and JavaScript files for faster load times. This will remove any spaces or comments from your files without changing it\'s functionality.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Minify resources` is the name of a feature and becomes link text to additional documentation.*/
  'unminified-javascript': 'Enable [Minify resources](https://support.nitropack.io/hc/en-us/articles/360061059394-Minify-Resources) in your Caching settings to reduce the size of your JS, HTML, and CSS files for faster load times. This will remove any spaces or comments from your files without changing it\'s functionality.',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. `Delayed Scripts` and `Automatic Image Lazy Loading` are names of features and become links to additional documentation.*/
  'unused-javascript': 'Not all JavaScript code is needed at all times. Configure [Delayed Scripts](https://support.nitropack.io/hc/en-us/articles/1500002600942-Delayed-Scripts) in NitroPack to delay loading of such scripts until they are needed and fix this warning. Furthermore, activate [Automatic Image Lazy Loading](https://support.nitropack.io/hc/en-us/articles/12457493524369-NitroPack-Lazy-Loading-Feature-for-Images) which will automatically detect iframes and video embeds, and load their JavaScript only when needed.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Improve Server Response Time` is the name of a feature and becomes link text to additional documentation.*/
  'uses-long-cache-ttl': 'Go to the [Improve Server Response Time](https://support.nitropack.io/hc/en-us/articles/1500002321821-Improve-Server-Response-Time) feature in the Caching menu and adjust your page cache expiration time to improve loading times and user experience.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Image Optimization` is the name of a feature and becomes link text to additional documentation.*/
  'uses-optimized-images': 'Automatically compress, optimize, and convert your images into WebP by enabling the [Image Optimization](https://support.nitropack.io/hc/en-us/articles/14177271695121-How-to-serve-images-in-next-gen-formats-using-NitroPack) setting.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Gzip compression` is the name of a feature and becomes link text to additional documentation.*/
  'uses-text-compression': 'Use [Gzip compression](https://support.nitropack.io/hc/en-us/articles/13229297479313-Enabling-GZIP-compression) in NitroPack to reduce the size of the files that are sent to the browser. This includes text files such as HTML, CSS, and JavaScript. The smaller file size allows for quicker transmission of data from the server to the client, resulting in faster page load times.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Adaptive Image Sizing` is the name of a feature and becomes link text to additional documentation.*/
  'uses-responsive-images': 'Enable [Adaptive Image Sizing](https://support.nitropack.io/hc/en-us/articles/10123833029905-How-to-Enable-Adaptive-Image-Sizing-For-Your-Site) to preemptively optimize your images and make them match the dimensions of the containers they’re displayed in across all devices. This will also help reduce the amount of unnecessary bytes downloaded.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Instant Load` is the name of a feature and becomes link text to additional documentation.*/
  'server-response-time': 'Improve server response time and optimize perceived performance by activating [Instant Load](https://support.nitropack.io/hc/en-us/articles/16547340617361). This powerful feature prefetches your website\'s frequently accessed pages, ensuring an instant loading experience for your valued users.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `HTML Lazy Load` is the name of a feature.*/
  'dom-size': 'Contact your account manager to enable HTML Lazy Load. Configuring it will prioritize and optimize your page rendering performance.',
  /** Additional description of a Lighthouse audit for a third-party framework called `NitroPack`. This is displayed after a user expands the section to see more. No character length limits. `Override Font Rendering Behavior` is the name of a feature and becomes link text to additional documentation.*/
  'font-display': 'Use the [Override Font Rendering Behavior](https://support.nitropack.io/hc/en-us/articles/16547358865041) option in NitroPack to set a desired value for the CSS font-display rule. Set the font-display value to swap to avoid flash of invisible text (FOIT).',
}

module.exports = {
  id: 'nitropack',
  title: 'NitroPack',
  icon,
  UIStrings,
};
