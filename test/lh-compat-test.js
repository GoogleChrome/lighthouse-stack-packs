const {test} = require('uvu');
const assert = require('uvu/assert');

const {stackPacksToInclude: lhStackPackRefs} = require('lighthouse/lighthouse-core/lib/stack-packs.js');

const packs = require('../');

test('all LH referenced packs exist here', () => {
  for (const lhStackPack of lhStackPackRefs) {
    const matchedPack = packs.find(pack => pack.id === lhStackPack.packId);
    assert.ok(matchedPack, `pack for ${lhStackPack.packId} found here`);
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
