// import PartyPopper from 'party-popper'
// import confetti1 from './assets/confettis/party.svg'

const PartyPopper = require('party-popper');
const confetti1 = require('./assets/confettis/party.svg')
 
document.addEventListener('DOMContentLoaded', () => {
  const opts = {
    // Use either an already-configured array of confettis...
    confettis: [
      { model: confetti1, x: -50, y:-10, width: 40, height: 40, originX: 0 },
      { model: confetti1, x: -20, y:-10, width: 15, height: 20 },
    ],
    // ... Or set some seeds and bias for random generation
    originX: 20,
    originY: 20,
    spreadDistance: { min: 20, max: 140 },
    spreadAngles: [[-30,30], [50,80]],
    confettiModels: [...svg1, svg2],
    confettiCount: 10
  }
 
  // Create your instance
  const pp = new PartyPopper(document.querySelector('.popper'), opts)
 
  // Set your confettis visible 
  pp.render()
 
  // use PartyPopper.fire() to animate !
  // Here, wait 1s between render and fire
  window.setTimeout(() => { pp.fire() }, 1000)
})