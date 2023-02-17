# How to Contribute

We'd love to accept your contributions to this project to improve how we provide stack-specific guidance in Lighthouse. Please read through the following before contributing however.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.


## Submitting a new stack pack

Want to submit a brand new stack pack? Awesome! In order for a stack pack to be considered however, the following must be met:

- There should be a simple way to detect the stack via JS/DOM properties. It must be implemented in [js-library-detector](https://github.com/johnmichel/Library-Detector-for-Chrome).
- A significant number of websites (10k+) should be using the stack. Consider using [HTTP Archive](https://discuss.httparchive.org/t/javascript-library-detection/955/2) to detect the number sites used by the particular tool.
- There must be a minimum of two maintainers for each stack from the community who can help review and provide suggestions. We (Google) should not be the ones to decide what the audit recommendations should be.

If all of these are met, go ahead and create the pack's definition:

- Copy the `general.js` template, clone it into a file in the `packs/` directory. 
- Delete whatever rows are irrelevant, add the ones that are, and set the strings to your user-facing recommendation regarding your stack. 
- We want these strings to be **clear and actionable**; look at Lighthouse's existing descriptions and other stack packs for inspiration. 
- Add a link to further documentation or resources if appropriate. Please only 1 link per item.  
- We expect you to provide strings for at least 3 audits. (It's not worth it for us if you're just adorning one or two audits. But get in touch if you have a special case.)
- Submit the PR for review.

## Submitting changes to audit strings

Do you notice a specific audit string for a particular pack that is wrong or could be a little better? Please submit a PR!

## Process for making the pack's icon SVG

1. Acquire the logo in SVG
1. Inline icon markup in stackpack file as `data:image/svg+xml,` + _<svg markup>_
1. Run `npm run test svg` and copy over the optimized svg.

## FAQ

### Handling different versions of stacks

For most stacks, audit advice will be provided for the latest stable version. If developers are using an older version where they cannot include a particular suggestion that we provide, they will have to upgrade. We do **not** currently support providing different types of suggestions for multiple versions of the same tool in a single stack pack, but we may include this functionality in the future.

**For example:** We tell developers to use React’s [Suspense](https://reactjs.org/docs/code-splitting.html#reactlazy) feature in the React stack pack to code-split their bundles. This feature is only supported in version 16.6 but the developer is using an older version of React. By providing links to all relevant documentation, they should understand that they would have to upgrade their version.

#### What if two versions of a tool are completely different where suggestions for one might not work for another?

These two different versions will be treated as two separate stacks entirely for the meantime, each with their own feature detection (for example: Stack v2 and stack v3)
