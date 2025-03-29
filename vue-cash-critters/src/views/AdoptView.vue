<template>
    <div>
        <div class="top-area">
            <h3>Adopt a critter</h3>
        </div>
        <div class="container" v-show="isAdopt">
            <div class="adopt-spacer"></div>
            <div class="critter-display">
                <button @click="prevCritter" class="nav-arrow">←</button>
                <AdoptCritter class="critter-container" :critter="currentCritter" :i="currentIndex" :isFree="!$store.state.activeCritters.length > 0"/>
                <button @click="nextCritter" class="nav-arrow">→</button>
            </div>
            <div class="adopt-spacer"></div>
            <p>How to play</p>
        </div>

    </div>
</template>

<script>
import AdoptCritter from '../components/AdoptCritter.vue';

export default {
    components: {AdoptCritter},
    data() {
        return {
            currentIndex: 0
        };
    },
    computed: {
        isAdopt() {
            return this.$store.state.inactiveCritters.length > 0;
        },
        currentCritter() {
            return this.$store.state.inactiveCritters[this.currentIndex];
        }
    },
    methods: {
        nextCritter() {
            if (this.currentIndex < this.$store.state.inactiveCritters.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; // Loop back to the first critter
            }
        },
        prevCritter() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.$store.state.inactiveCritters.length - 1; // Loop back to the last critter
            }
        }
    }
}
</script>

<style scoped>
    .top-area {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        margin-top: 50px;
    }
    .critter-display {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .adopt-spacer {
        height: 10vw;
    }
    .nav-arrow {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
        margin: 0 10px;
    }
    .nav-arrow:hover {
        background-color: #e0e0e0;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>