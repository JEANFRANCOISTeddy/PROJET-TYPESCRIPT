import {Pokemon} from './controllers';

const PokeA = new Pokemon("Scorplack", 65, 2, 1, 100, 50);
const PokeB = new Pokemon("Polaryu", 85, 2, 1, 75, 90);

console.log( PokeA.fight(PokeB) );