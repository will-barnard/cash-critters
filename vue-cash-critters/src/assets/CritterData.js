class Critter {
    constructor(name, full, hungry, starving, irate, becomeHungry, becomeStarving, becomeIrate) {

        this.name = name;
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
    HungryHarry: new Critter(
        "Hungry Harry", "src/img/HUNGRY_HARRY.png", "src/img/HUNGRY_HARRY_HUNGRY.png", 
        "src/img/HUNGRY_HARRY_STARVING.png", "src/img/HUNGRY_HARRY_IRATE.png",
        6, 60, 100),
    MunchyMo: new Critter("Munchy Mo", "src/img/MUNCHY_MO_FULL.png", "src/img/MUNCHY_MO_HUNGRY.png", 
    "src/img/MUNCHY_MO_STARVING.png", "src/img/MUNCHY_MO_IRATE.png", 
    30, 70, 100),
    InsatiableIvan: new Critter("Insatiable Ivan"),
    FrankFamished: new Critter("Frank Famished"),
    RavenousRachel: new Critter("Ravenous Rachel"),
    SarahFromAccountsReceivable: new Critter("Sarah, from Accounts Receivable"),
    TummyTimmy: new Critter("Tummy Timmy"),
    MoneyMike: new Critter("Money Mike"),
    Feed(critter) {
        critter.avatar = critter.full;
        critter.hunger = 0;
    }
}