const icon = `data:image/svg+xml,%3Csvg width='310' height='310' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid meet'%3E%3Cg%3E%3Ctitle%3Eoctober%3C/title%3E%3Crect fill='none' id='canvas_background' height='602' width='802' y='-1' x='-1'/%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg id='svg_1' fill='white' transform='translate(0,310) scale(0.10000000149011612,-0.10000000149011612) '%3E%3Cpath fill='%23de6c26' id='svg_2' d='m1350,3031c-142,-44 -349,-218 -499,-420c-293,-396 -455,-869 -437,-1281c8,-202 49,-355 144,-545c136,-274 408,-551 655,-669c141,-67 134,-69 141,28c3,44 10,324 16,621c27,1373 44,1760 82,1913c6,23 14,42 19,42c12,0 36,-91 49,-183c5,-43 10,-177 10,-298c0,-120 3,-219 7,-219c3,0 57,50 119,110c69,68 120,110 133,110c18,0 19,-3 10,-27c-12,-31 -79,-132 -191,-285l-78,-108l1,-312c1,-172 4,-374 8,-449l6,-137l110,126c140,160 351,371 395,396l33,19l-6,-32c-20,-98 -95,-207 -374,-543l-163,-196l0,-311c0,-183 4,-311 9,-311c28,0 193,64 268,105c138,73 238,150 383,295c157,157 244,274 334,452c205,400 210,803 16,1190c-178,356 -546,721 -878,869c-117,53 -246,73 -322,50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

const UIStrings = {
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused CSS, in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unused-css-rules': "Consider reviewing the [plugins](https://octobercms.com/plugins) loading unused CSS on the website. To identify plugins that add unnecessary CSS, run [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. Identify the theme/plugin responsible from the stylesheet URL. Look for plugins with many stylesheets with lots of red in code coverage. A plugin should only add a stylesheet if it is actually used on the web page.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve image loading by using webp in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-webp-images': "Consider using a [plugin](https://octobercms.com/plugins?search=image) or service that will automatically convert the uploaded images to the optimal formats. [WebP lossless images](https://developers.google.com/speed/webp) are 26% smaller in size compared to PNGs and 25-34% smaller than comparable JPEG images at the equivalent SSIM quality index. Another next-gen image format to consider is [AVIF](https://jakearchibald.com/2020/avif-has-landed/).",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by lazy loading images that are initially offscreen in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'offscreen-images': "Consider installing an [image lazy-loading plugin](https://octobercms.com/plugins/) that provides the ability to defer any offscreen images, or switch to a theme that provides that functionality. Also consider using [the AMP plugin](https://octobercms.com/plugins?search=Accelerated+Mobile+Pages).",
  /** Additional description of a Lighthouse audit that tells the user how they can improve site loading performance by reducing the total bytes delivered by their page in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'total-byte-weight': "Consider showing excerpts in the post lists (e.g. using a `show more` button), reducing the number of posts shown on a given web page, breaking long posts into multiple web pages, or using a plugin to lazy-load comments.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by reducing the amount of render blocking resources present on their page, in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'render-blocking-resources': "There are many plugins that help [inline critical assets](https://octobercms.com/plugins?search=css). Beware that optimizations provided by these plugins may break features of the theme or other plugins, test for any needed code changes.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their CSS files in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unminified-css': "There are many [plugins](https://octobercms.com/plugins?search=css) that can speed up a website by concatenating, minifying and compressing the styles. Using a build process to do this minification up-front can speed up development.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their Javascript files in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unminified-javascript': "There are many [plugins](https://octobercms.com/plugins?search=javascript) that can speed up a website by concatenating, minifying and compressing the scripts. Using a build process to do this minification up-front can speed up development.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by encoding animated images as video, in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'efficient-animated-content': "[Replace animated GIFs with video](https://web.dev/replace-gifs-with-videos/) for faster web page loads and consider using modern file formats such as [WebM](https://web.dev/replace-gifs-with-videos/#create-webm-videos) or [AV1](https://developers.google.com/web/updates/2018/09/chrome-70-media-updates#av1-decoder) that improves compression efficiency by greater than 30% over the current state-of-the-art video codec, VP9.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused Javascript files in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'unused-javascript': "Consider reviewing the [plugins](https://octobercms.com/plugins?search=javascript) that load unused JavaScript in the web page. To identify plugins that add unnecessary JavaScript, run [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. Identify the theme/plugin responsible from the URL of the script. Look for plugins with many scripts with lots of red in code coverage. A plugin should only add a script if it is actually used on the web page.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve their site by enabling long caching in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-long-cache-ttl': "Read about [preventing unnecessary network requests with the HTTP Cache](https://web.dev/http-cache/#caching-checklist). There are many [plugins](https://octobercms.com/plugins?search=Caching) that can be used to speed up the caching.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve site performance by optimizing images, in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-optimized-images': "Consider using an [image optimization plugin](https://octobercms.com/plugins?search=image) that compresses the images while retaining the quality.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance via enabling text compression in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-text-compression': "Enable text compression in the web server configuration.",
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by using responsive images in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'uses-responsive-images': "Upload images directly through the [media manager](https://octobercms.com/docs/cms/mediamanager) to ensure that the required image sizes are available and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using `Full Size` images unless the dimensions are adequate for their usage. [Web Fundamentals Images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images).",
  /** Additional description of a Lighthouse audit that tells the user how they can improve the time to first byte speed metric, in the context of the October CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  'time-to-first-byte': "Themes, plugins and server specifications all contribute to the server response time. Consider finding a more optimized theme, carefully selecting an optimization plugin and/or upgrade the server. October CMS also allows developers to use [Queues](https://octobercms.com/docs/services/queues) that allow the ability to defer the processing of a time consuming task, such as sending an e-mail, until a later time, thus drastically speeding up the web requests to the application.",
};

module.exports = {
  id: 'octobercms',
  title: 'October CMS',
  icon,
  UIStrings,
}
