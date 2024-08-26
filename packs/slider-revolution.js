const icon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g id="NEW_SR_LOGO" data-name="NEW SR LOGO" transform="translate(8 7.493)"><rect id="Rechteck_16" data-name="Rechteck 16" width="36" height="36" rx="5" transform="translate(-8 -7.493)" fill="#5c24ff"/><path id="Pfad_1" data-name="Pfad 1" d="M46.311,18.755l2.807,2.81a.2.2,0,0,1-.14.337H40.089a.121.121,0,0,1-.137-.137l-.006-8.912a.188.188,0,0,1,.322-.134l2.938,2.933a.109.109,0,0,0,.185-.006A6.5,6.5,0,0,0,43.9,7.7a6.271,6.271,0,0,0-5.255-2.944q-.123.009-.123-.117l0-3.991a.121.121,0,0,1,.148-.137c5.283.394,9.36,3.746,10.293,8.929a10.885,10.885,0,0,1-2.231,8.781.516.516,0,0,1-.168.145l-.211.114Q46.146,18.589,46.311,18.755Z" transform="translate(-28.331 -0.8)" fill="#fff"/><path id="Pfad_2" data-name="Pfad 2" d="M0,1.745V1.46l8.975.014a.124.124,0,0,1,.14.14l0,8.627a.251.251,0,0,1-.431.177L5.974,7.688a.133.133,0,0,0-.225.009C2.037,12.144,5,18.126,10.521,18.714a.168.168,0,0,1,.148.168v3.766a.123.123,0,0,1-.145.14A10.328,10.328,0,0,1,3.94,20.36Q-1.717,15.456.79,7.893A9.566,9.566,0,0,1,2.844,4.8a.151.151,0,0,0-.006-.234Z" transform="translate(-0.8 -1.481)" fill="#fff"/></g></svg>`;

const UIStrings = {
  /** Additional description of a Lighthouse audit for a third-party plugin called 'Slider Revolution'. This is displayed after a user expands the section to see more. No character length limits. Slider Revolution is a name of the plugin */
  'largest-contentful-paint': `Dynamic animations created with the Slider Revolution engine, particularly those with extended durations, may be flagged as negatively impacting the LCP (Largest Contentful Paint) metric. This can occur even when these animations do not have a substantial effect on the actual rendered content, page load performance, or SEO. These detected content changes are intentional, designed to enhance the aesthetic and visual appeal of the page using Slider Revolution. Consequently, any negative scores attributed to such animations can be considered false positives and may be disregarded in the context of overall page performance. https://www.sliderrevolution.com/faq/lcp-largest-contentful-paint-and-slider-revolution/`,
};

module.exports = {
  id: 'slider-revolution',
  title: 'Slider Revolution',
  icon,
  UIStrings,
};