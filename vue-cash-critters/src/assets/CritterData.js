class Critter {
    constructor(
        name,
        displayName,
        nameConst,
        id,
        becomeHungry,
        becomeStarving,
        becomeIrate,
        defaultRoom,
        altRoom
    ) {

        // id
        this.name = name;
        this.displayName = displayName;
        this.id = id;

        // avatar
        const avatarSrc = "/img/critters/" + nameConst;
        this.full = avatarSrc + "_FULL.png";
        this.hungry = avatarSrc + "_HUNGRY.png";
        this.starving = avatarSrc + "_STARVING.png";
        this.irate = avatarSrc + "_IRATE.png";
        this.avatar = this.full;

        // modifiers
        this.becomeHungry = becomeHungry;
        this.becomeStarving = becomeStarving;
        this.becomeIrate = becomeIrate;

        // stats
        this.hunger = 0;
        this.happiness = 100;

        // rooms
        this.defaultRoom = defaultRoom;
        this.altRoom = altRoom;
        this.currentRoom = defaultRoom;
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
            "HungryHarry",
            "Hungry Harry",
            "HUNGRY_HARRY",
            0, 6, 60, 100,
            "/img/rooms/HARRYS_PLAYROOM.png",
            "/img/rooms/HARRYS_PLAYROOM_BADASS.png"),
        new Critter("MunchyMo",
            "Munchy Mo",
            "MUNCHY_MO",
            1, 30, 70, 100),
        new Critter("Dunder",
            "Dunder",
            "DUNDER",
            2, 10 , 40, 100),    
        ],
    Feed(critter) {
        critter.avatar = critter.full;
        critter.hunger = 0;
    }
}