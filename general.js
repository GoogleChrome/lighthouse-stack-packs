
const icon = `data:image/svg+xml,svg icon`;

const UIStrings = {
  'unused-css-rules': 'Remove unused rules from stylesheets to reduce unnecessary bytes consumed by network activity. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/unused-css).',
  'next-gen-image-formats': 'Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/webp).',
  'offscreen-images': 'Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/offscreen-images).',
  'total-byte-weight': 'Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).',
  'render-blocking-resources': 'Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources).',
  'unminified-css': 'Minifying CSS files can reduce network payload sizes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/minify-css).',
  'unminified-javascript': 'Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).',
  'efficient-animated-content': 'Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)',
  'unused-javascript': 'Remove unused JavaScript to reduce bytes consumed by network activity.',
  'uses-long-cache-ttl': 'A long cache lifetime can speed up repeat visits to your page. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/cache-policy).',
  'uses-optimized-images': 'Optimized images load faster and consume less cellular data. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/optimize-images).',
  'uses-text-compression': 'Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/text-compression).',
  'uses-responsive-images': 'Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/oversized-images).',
  'server-response-time': 'Time To First Byte identifies the time at which your server sends a response. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/ttfb).',
  'redirects': 'Redirects introduce additional delays before the page can be loaded. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/redirects).',
  'user-timings': 'Consider instrumenting your app with the User Timing API to measure your app\'s real-world performance during key user experiences. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/user-timing).',
  'uses-rel-preconnect': 'Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. [Learn more](https://developers.google.com/web/fundamentals/performance/resource-prioritization#preconnect).',
  'uses-rel-preload': 'Consider using <link rel=preload> to prioritize fetching resources that are currently requested later in page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/preload).',
  'critical-request-chains': 'The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains).',
  'dom-size': 'Browser engineers recommend pages contain fewer than ~1,500 DOM nodes. The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/docs/insights/browser-reflow). [Learn more](https://developers.google.com/web/tools/lighthouse/audits/dom-size).',
  'font-display': 'Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://developers.google.com/web/updates/2016/02/font-display).',
}

module.exports = {
  icon,
  UIStrings,
}