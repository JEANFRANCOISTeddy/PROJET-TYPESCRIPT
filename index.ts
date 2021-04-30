import {Pokemon} from './controllers';

const PokeA = new Pokemon({
    name: "Polaryu",
    hp: 85,
    level: 2,
    base_power: 1,
    offensive_stat: 75,
    defensive_stat: 90
})

const PokeB = new Pokemon({
    name: "Scorplack",
    hp: 65,
    level: 2,
    base_power: 1,
    offensive_stat: 100,
    defensive_stat: 50
})


console.log( PokeA.fight(PokeB) );