// When making a stack pack, copy this file and fill out the comments marked <FILL>
// The comments above each UIString entry are presented to our translators for context.
// Use it to describe framework-specific terms.
// If a word or phrase should not be translated, put it in backticks.

// Minify with https://jakearchibald.github.io/svgomg/
const icon = `data:image/svg+xml,<svg>FILL</svg>`;

const UIStrings = {
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'unused-css-rules': 'Remove unused rules from stylesheets to reduce unnecessary bytes consumed by network activity. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/unused-css).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'modern-image-formats': 'Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/webp).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'offscreen-images': 'Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/offscreen-images).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'total-byte-weight': 'Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'render-blocking-resources': 'Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'unminified-css': 'Minifying CSS files can reduce network payload sizes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/minify-css).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'unminified-javascript': 'Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'efficient-animated-content': 'Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'unused-javascript': 'Remove unused JavaScript to reduce bytes consumed by network activity.',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'uses-long-cache-ttl': 'A long cache lifetime can speed up repeat visits to your page. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/cache-policy).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'uses-optimized-images': 'Optimized images load faster and consume less cellular data. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/optimize-images).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'uses-text-compression': 'Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/text-compression).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'uses-responsive-images': 'Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/oversized-images).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'prioritize-lcp-image': 'If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more](https://developer.chrome.com/docs/lighthouse/performance/prioritize-lcp-image).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'server-response-time': 'Time To First Byte identifies the time at which your server sends a response. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/ttfb).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'redirects': 'Redirects introduce additional delays before the page can be loaded. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/redirects).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'user-timings': 'Consider instrumenting your app with the User Timing API to measure your app\'s real-world performance during key user experiences. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/user-timing).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'uses-rel-preconnect': 'Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. [Learn more](https://developers.google.com/web/fundamentals/performance/resource-prioritization#preconnect).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'uses-rel-preload': 'Consider using <link rel=preload> to prioritize fetching resources that are currently requested later in page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/preload).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'critical-request-chains': 'The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'dom-size': 'Browser engineers recommend pages contain fewer than ~1,500 DOM nodes. The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/docs/insights/browser-reflow). [Learn more](https://developers.google.com/web/tools/lighthouse/audits/dom-size).',
  /** Additional description of a Lighthouse audit for a third-party framework called `<FILL>`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. <FILL FRAMEWORK SPECIFIC TERMS HERE> */
  'font-display': 'Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://developers.google.com/web/updates/2016/02/font-display).',
}

module.exports = {
  id: '<FILL>',
  title: '<FILL>',
  icon,
  UIStrings,
};
