class Critter {
    constructor(
        name,
        displayName,
        nameConst,
        id,
        becomeHungry,
        becomeStarving,
        becomeIrate,
        escape,
        defaultRoom,
        altRoom,
        baseLoveMulti
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
        this.escape = escape;

        // stats
        this.hunger = 0;
        this.happiness = 0;

        // rooms
        this.defaultRoom = defaultRoom;
        this.altRoom = altRoom;
        this.currentRoom = defaultRoom;

        // love
        this.loveMulti = baseLoveMulti;
        this.love = 0;

        // toys
        this.toys = [];

        // furniture
        this.furniture = [];

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
            0,
            6, 60, 100, null,
            "/img/rooms/HARRYS_PLAYROOM.png",
            "/img/rooms/HARRYS_PLAYROOM_BADASS.png",
            1
        ),
        new Critter("MunchyMo",
            "Munchy Mo",
            "MUNCHY_MO",
            1,
            30, 70, 100, 140,
            "/img/rooms/MOS_PLAYROOM.png",
            "/img/rooms/MOS_PLAYROOM_BADASS.png",
            2
        ),
        new Critter("Dunder",
            "Dunder",
            "DUNDER",
            2,
            10 , 40, 100, 140,
            "/img/rooms/DUNDERS_PLAYROOM.png",
            "/img/rooms/DUNDERS_PLAYROOM_BADASS.png",
            3
        ),
        new Critter("PeterEater", 
            "Peter Eater",
            "FLOWER",
            3,
            10, 40, 100, 110,
            "/img/rooms/PETERS_PLAYROOM.png",
            "/img/rooms/PETERS_PLAYROOM_BADASS.png",
            3
        ),
        new Critter("BillyBites",
            "Billy Bites",
            "BILLY_BITES",
            4,
            60, 90, 130, 200,
            "/img/rooms/BILLYS_PLAYROOM.png",
            "/img/rooms/BILLYS_PLAYROOM_BADASS.png",
            3
        ),
        new Critter("Shrimpleton", 
            "Shrimpleton",
            "SHRIMPLETON",
            5,
            10, 90, 150, 200,
            "/img/rooms/SHRIMPLETONS_PLAYROOM.png",
            "/img/rooms/SHRIMPLETONS_PLAYROOM_BADASS.png",
            2
        ),
        new Critter("MoneyMike",
            "Money Mike",
            "MONEY_MIKE",
            6,
            100, 120, 160, 160,
            "/img/rooms/MONEYS_PLAYROOM.png",
            "/img/rooms/MONEYS_PLAYROOM_BADASS.png",
            5
        )
        ],
    Feed(critter) {
        critter.avatar = critter.full;
        critter.hunger = 0;
    }
}