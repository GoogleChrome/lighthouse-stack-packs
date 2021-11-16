# How to Contribute

We'd love to accept your contributions to this project to improve how we provide stack-specific guidance in Lighthouse. Please read through the following before contributing however.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Submitting a new stack pack

Want to submit a brand new stack pack? Awesome! In order for a stack pack to be considered however, the following must be met:

- There should be a simple way to detect the stack via JS/DOM properties
- At least 6 of the performance audits should have stack-specific recommendations
- A significant number of websites (~ in the 10's of thousands) should be using the stack. Consider using [HTTP Archive](https://discuss.httparchive.org/t/javascript-library-detection/955/2) to detect the number sites used by the particular tool.
- There must be a minimum of two maintainers for each stack from the community who can help review and provide suggestions. We (Google) should not be the ones to decide what the audit recommendations should be.

If all of these are met, submit a PR for review! Copy the `general.js` file into the `packs/` directory and change each audit string to a specific recommendation regarding your stack. If you can't provide a recommendation for a particular audit, change it to an empty string. However, you will need to provide at least 6 audit strings as mentioned earlier.

## Submitting changes to audit strings

Do you notice a specific audit string for a particular pack that is wrong or could be a little better? Please submit a PR!

## Process for making the pack's icon SVG

1. Acquire the logo in SVG
1. Open in https://jakearchibald.github.io/svgomg/ apply default optimizations, tweak precision, and enable "Prefer viewBox to width/height". Copy out resulting markup.
1. Paste into https://yoksel.github.io/url-encoder/. Copy out the _Encoded_ result.
1. Inline icon markup in stackpack file as `data:image/svg+xml,` + _<encoded, optimized svg markup>_

## FAQ

### Stack Pack Release Cycle

To ensure that all audit suggestions for stack packs are properly localized in time, there will be a cut-off at least twice a year (in Q2 and Q4) where all changes to audit descriptions for any stack will be sent to the Google translation teams. This means that there will be at least 2 stack pack releases every year.

### When will more than just performance audits be supported?

Stack pack suggestions for audits will need to stay in-line with [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). Performance audits are the only types of audits surfaced there which means they will be the only audits supported by stack packs in the near future.

### Handling different versions of stacks

For most stacks, audit advice will be provided for the latest stable version. If developers are using an older version where they cannot include a particular suggestion that we provide, they will have to upgrade. We do **not** currently support providing different types of suggestions for multiple versions of the same tool in a single stack pack, but we may include this functionality in the future.

**For example:** We tell developers to use React’s [Suspense](https://reactjs.org/docs/code-splitting.html#reactlazy) feature in the React stack pack to code-split their bundles. This feature is only supported in version 16.6 but the developer is using an older version of React. By providing links to all relevant documentation, they should understand that they would have to upgrade their version.

#### What if two versions of a tool are completely different where suggestions for one might not work for another?

These two different versions will be treated as two separate stacks entirely for the meantime, each with their own feature detection (for example: Stack v2 and stack v3)
