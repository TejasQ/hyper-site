const {
  juancampa,
  tyriar,
  jerch,
  stanzilla,
  chabou,
  tejaskumar
} = require('../../../data/contributors.js')

module.exports = {
  date: '2019-01-29T21:15:32.730Z',
  contributors: [juancampa, tyriar, jerch, stanzilla, chabou, tejaskumar],
  title: 'Announcing Hyper 3',
  permalink: (process.env.BASE_URL || '') + '/blog/announcing-hyper-3',
  lede: `Hyper 3 is finally out! and the main theme for this release is
  performance. In short, Hyper 3 is much faster for CLI programs that 
  repaint a lot, large amounts of output, and very large screens. 
  Read on to learn how we accomplished this.`
}
