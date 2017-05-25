import Fighter         from './classes/Fighter';
import ImprovedFighter from './classes/ImprovedFighter';
import fight           from './libs/fight';

const batMan   = new Fighter({
    name   : 'BatMan',
    power  : 3,
    health : 100
});
const superMan = new ImprovedFighter({
    name   : 'SuperMan',
    power  : 3,
    health : 110
});

fight(batMan, superMan, 10, 11, 12, 13, 14, 15);