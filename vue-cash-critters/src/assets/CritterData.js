class Critter {
    constructor(name, displayName, id, full, hungry, starving, irate, becomeHungry, becomeStarving, becomeIrate) {

        this.name = name;
        this.displayName = displayName;
        this.id = id;
        this.full = full;
        this.hungry = hungry;
        this.starving = starving;
        this.irate = irate;
        this.becomeHungry = becomeHungry;
        this.becomeStarving = becomeStarving;
        this.becomeIrate = becomeIrate;

        this.hunger = 0;
        this.happiness = 100;
        this.avatar = this.full;

    }
    tick() {
        this.hunger += 2;
        if (this.hunger >= this.becomeHungry) {
            if (this.hunger >= this.becomeStarving) {
                if (this.hunger >= this.becomeIrate) {
                    this.avatar = this.irate;
                } else {
                    this.avatar = this.starving;
                }
            } else {
                this.avatar = this.hungry;
            }
        } 
    }
  }



export default {
    CritterList: [
        new Critter(
            "HungryHarry", "Hungry Harry", 0, "src/img/critters/HUNGRY_HARRY.png", "src/img/critters/HUNGRY_HARRY_HUNGRY.png", 
            "src/img/critters/HUNGRY_HARRY_STARVING.png", "src/img/critters/HUNGRY_HARRY_IRATE.png",
            6, 60, 100),
        new Critter("MunchyMo", "Munchy Mo", 1, "src/img/critters/MUNCHY_MO_FULL.png", "src/img/critters/MUNCHY_MO_HUNGRY.png", 
            "src/img/critters/MUNCHY_MO_STARVING.png", "src/img/critters/MUNCHY_MO_IRATE.png", 
            30, 70, 100),
        new Critter("Insatiable Ivan"),
        new Critter("Frank Famished"),
        new Critter("Ravenous Rachel"),
        new Critter("Sarah, from Accounts Receivable"),
        new Critter("Tummy Timmy"),
        new Critter("Money Mike"),
        ],
    Feed(critter) {
        critter.avatar = critter.full;
        critter.hunger = 0;
    }
}