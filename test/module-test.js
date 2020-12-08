
const assert = require('assert');
const thisModulesPacks = require('../');



assert.ok(Array.isArray(thisModulesPacks));
assert.ok(thisModulesPacks.length)

for (const pack of thisModulesPacks) {
  assert.ok(typeof pack.id === 'string' && pack.id.length);

  // LH needs the pack id to match the path for createMessageInstanceIdFn
  assert.equal(pack.id, require(`../packs/${pack.id}`).id);

  assert.ok(typeof pack.title === 'string' && pack.title.length);
  assert.ok(typeof pack.icon === 'string' && pack.icon.length);
  assert.ok(pack.icon.startsWith('data:image/svg+xml,'));

  assert.ok(Object.entries(pack.UIStrings).length);
}