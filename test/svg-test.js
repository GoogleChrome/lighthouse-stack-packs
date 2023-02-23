const { test } = require('uvu');
const { expect } = require('expect');
const svgo = require('svgo');

const packs = require('..');

/**
 * @param {string} svgDataUrl
 */
function optimize(svgDataUrl) {
  const prefix = 'data:image/svg+xml,';
  if (!svgDataUrl.startsWith(prefix)) {
    return `expected prefix ${prefix}`;
  }

  const svg = svgDataUrl.substring(prefix.length)
    .replace(/%3C/g, '<')
    .replace(/%3E/g, '>')
    .replace(/#/g, '%23');
  return svgo.optimize(svg, {
    multipass: true,
    datauri: 'unenc',
    floatPrecision: 3,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // viewBox is required to resize SVGs with CSS.
            // @see https://github.com/svg/svgo/issues/1128
            removeViewBox: false,
          },
        },
      },
      'removeDimensions',
      {name: 'sortAttrs'},
    ],
  }).data;
}

for (const pack of packs) {
  test(`testing icon for ${pack.id}`, () => {
    const optimized = optimize(pack.icon);
    // expect(pack.icon).toBe(optimized);
    if (pack.icon !== optimized) {
      throw new Error(`icon is not optimized as expected. Try this instead:\n\n${optimized}`);
    }
  });
}

test.run();
