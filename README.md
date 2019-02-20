# Lighthouse Stack Packs

[Lighthouse](https://github.com/GoogleChrome/lighthouse) provides developers with guidance to improve their site by auditing for performance, accessibility and other best practices.

Many developers today use different technologies (backend/CMS/JavaScript frameworks) to build their web pages. Instead of only surfacing general recommendations, what if Lighthouse could also provide more relevant and actionable advice depending on the tools used?

<p align="center">
  <img alt="Prototype" title="Prototype" src="https://raw.githubusercontent.com/GoogleChrome/lighthouse-stack-packs/master/assets/platform-pack-example.png">
</p>

## Prototypes

* [WordPress](https://houssein.me/lighthouse/viewer-wordpress/?gist=9efc3fc22dc500620c884db995e3fb6c)
* [React](https://react-pack-demo-25wm86cuv.now.sh/)
* [AMP](https://amp-pack-demo-5v0c7chul.now.sh/)

## Contributing

This is still under early development, but we would like to hear any suggestions from community members in the meantime. **[WordPress](https://wordpress.org/) is the first ecosystem we are prioritizing for** but we'll always be open to suggestions for other stacks that we can support directly after.

* Feel free to open PRs and provide suggestions for different audit messages in [`wordpress/audits.json`](./wordpress/audits.json).
  * For each audit, the `secondaryDescription` attribute can be used to include (or modify) the WordPress specific messages.
* If you have any feedback or suggestions for any other stacks besides WordPress, please open an issue!

Before contributing in any way, make sure to also read [CONTRIBUTING.md](./CONTRIBUTING.md).

## Testing changes locally

If you would like to test your changes with Lighthouse Viewer using this prototype, you can do the following:

* In Lighthouse, create a branch off of the [one](https://github.com/housseindjirdeh/lighthouse/tree/wp-advice-pack) used to set up this rough prototype.
* For any audit that you would like to update, open its respective file (the file name always matches the audit `id`)
* Add a [`secondaryDescription`](https://github.com/housseindjirdeh/lighthouse/blob/wp-advice-pack/lighthouse-core/audits/byte-efficiency/offscreen-images.js#L52) to the `meta` static method
* Run `yarn update:sample-json` to update the i18n strings
* Build and run [Lighthouse CLI](https://github.com/GoogleChrome/lighthouse#run) to view the report
