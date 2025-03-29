<template>
    <div :style="{ backgroundImage: `url(${critter.currentRoom})` }" class="main-area">
        <div class="critter-info">
            <h1>{{ critter.displayName }}</h1>
            <p class="centered-text"> Collect Love <font-awesome-icon @click="collectLove"
                    icon="heart" 
                    :class="isCollectLove ? 'clickable-icon love' : 'clickable-icon disabled'" 
                />
            </p>
            <p>Love: {{ critter.love }}</p>
        </div>
        <img :src="critter.avatar" alt="critter" class="critter" />
        <div class="controls">
            <p class="centered-text" v-if="!critter.showHunger">
                <font-awesome-icon @click="feedCritter"
                    icon="drumstick-bite" 
                    :class="isFeed ? 'clickable-icon food' : 'clickable-icon disabled'" 
                />
                Feed
            </p>
            <p class="centered-text" v-if="critter.showHunger">
                Hunger: {{ critter.hunger }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['critter'],
    mounted() {
        this.animateCritter();
    },
    methods: {
        animateCritter() {
            const critter = this.$el.querySelector('.critter');
            const randomize = () => {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const critterWidth = critter.offsetWidth;
                const critterHeight = critter.offsetHeight;

                let x = Math.random() * (viewportWidth - critterWidth) - (viewportWidth / 2 - critterWidth / 2);
                let y = Math.random() * (viewportHeight - critterHeight) - (viewportHeight / 2 - critterHeight / 2);

                const distance = Math.sqrt(x * x + y * y); // Calculate distance to travel
                const baseSpeed = 0.01; // Further reduced base speed factor to slow down movement
                const duration = distance * baseSpeed; // Duration proportional to distance
                const flip = Math.random() > 0.8 ? 'scaleX(-1)' : 'scaleX(1)'; // Occasional horizontal flip
                const hungerFactor = Math.max(0.1, 1 - Math.sqrt(this.critter.hunger) / 100); // Non-linear scaling based on hunger

                critter.style.transition = `transform ${duration}s ease, scaleX ${0.5 * hungerFactor}s ease`; // Adjust speeds
                critter.style.transform = `translate(${x}px, ${y}px) ${flip}`;
            };

            const hungerFactor = Math.max(0.1, 1 - this.critter.hunger / 100); // Scale frequency based on hunger
            const interval = 5000 * hungerFactor; // Adjust interval based on hunger
            setInterval(randomize, interval); // Change position at scaled frequency
        },
        feedCritter() {
            if (this.$store.state.currency.food > 0) {
                this.$store.commit('FEED_CRITTER', this.critter);
            } else {
                alert("You don't have enough food!");
            }
        },
        collectLove() {
            this.$store.commit('COLLECT_LOVE', this.critter);
        }
    },
    computed: {
        isCollectLove() {
            if (this.critter.love > 0) {
                return true;
            } else {
                return false;
            }
        },
        isFeed() {
            if (this.critter.hunger >= this.critter.becomeHungry && this.$store.state.currency.food > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>
<style scoped>
div {
    background-size: cover;
    background-position: center;
    position: absolute;
}
.main-area {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.critter {
    width: 150px; /* Slightly bigger size */
    height: auto;
    position: absolute; /* Position absolute */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for centering */
    /* Transition speed dynamically set in script */
}
.controls {
    position: fixed; /* Change to fixed to position relative to the viewport */
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background-color: var(--critter-background-mute);
    width: 80vw;
    padding: 10px;
    text-align: left;
}
.clickable-icon {
    cursor: pointer;
    padding: 5px;
    border: 2px solid white;
    border-radius: 50%;
    transition: background-color 0.3s, transform 0.2s;
}

.clickable-icon:hover {
    transform: scale(1.1);
}
.centered-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Add spacing between the icon and text */
}
.critter-info {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    font-size: .9em;
}
.food {
    background-color: green;
}
.love {
    background-color: red;
}
.disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>