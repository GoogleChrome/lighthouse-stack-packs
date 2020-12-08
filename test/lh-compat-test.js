const {test} = require('uvu');
const assert = require('uvu/assert');

const {stackPacksToInclude: lhStackPackRefs} = require('lighthouse/lighthouse-core/lib/stack-packs.js');

const packs = require('../');

// LH needs the pack id to match the filepath (for now, at least)
// https://github.com/GoogleChrome/lighthouse/blob/2cbbd289be33a586462ed248179df7d7b692ca53/lighthouse-core/lib/stack-packs.js#L84-L86
test('pack Ids match paths', () => {
  for (const pack of packs) {
    const requiredPack = require(`../packs/${pack.id}`);
    assert.equal(pack.id, requiredPack.id);
  }
});

test('all LH referenced packs exist here', () => {
  for (const lhStackPack of lhStackPackRefs) {
    const matchedPack = packs.find(pack => pack.id === lhStackPack.packId);
    assert.ok(matchedPack, `pack for ${lhStackPack.packId} not found here`);
    assert.equal(matchedPack.id, lhStackPack.packId);
  }
});

test('all packs here are included there', () => {
  for (const pack of packs) {
    const matchedObj = lhStackPackRefs.find(lhStackPackRef => lhStackPackRef.packId === pack.id);
    if (!matchedObj) {
      // New packs will land here first, so it's not fair to call these errors...
      // But after rolling (and js-library-detector support) we expect all packs to be supported in LH
      console.warn(`Pack (${pack.id}) is not yet referenced in lighthouse's lib/stack-packs.`);
    }
  }
});

test.run();
