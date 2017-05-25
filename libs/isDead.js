const isDead = (fighter) => {
    if (fighter.isFighterDead()) {
        console.log(`${fighter.name} is dead.`);
        return true;
    }
    
    return false;
};

export default isDead;