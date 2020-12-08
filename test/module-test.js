const {test} = require('uvu');
const assert = require('uvu/assert');
const fs = require('fs');

const thisModulesPacks = require('../');

test('all authored packs are refernced in module', () => {
  const allFilenames = fs.readdirSync(__dirname + '/../packs');
  const allPackModules = allFilenames.map(filename => require(`${__dirname}/../packs/${filename}`));
  const allPackModuleIds = allPackModules.map(pack => pack.id);

  const referencedPackIds = thisModulesPacks.map(pack => pack.id);
  assert.equal(allPackModuleIds.sort(), referencedPackIds.sort());
});

test('packs are well-structured', () => {
  assert.ok(Array.isArray(thisModulesPacks));
  assert.ok(thisModulesPacks.length);

  for (const pack of thisModulesPacks) {
    assert.ok(typeof pack.id === 'string' && pack.id.length);

    assert.ok(typeof pack.title === 'string' && pack.title.length);
    assert.ok(typeof pack.icon === 'string' && pack.icon.length);

    // TODO: Also, need to validate that the SVG is a valid data uri and load successfully (valid XML?). https://github.com/GoogleChrome/lighthouse-stack-packs/pull/60
    assert.ok(pack.icon.startsWith('data:image/svg+xml,'));

    assert.ok(Object.entries(pack.UIStrings).length);
  }
});

test.run();
