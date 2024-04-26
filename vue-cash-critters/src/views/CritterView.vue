<template>
    <div>
        <div class="container" v-show="isYourCritters">
            <h1>Your Critters</h1>
            <CritterComponent class="critter-container" v-for="(critter, i) in $store.state.activeCritters" :key="i" :critter="critter" :i="i" isActive="true"/>
        </div>
        <div class="container" v-show="isAdopt">
            <h1>Adopt</h1>
            <CritterComponent class="critter-container" v-for="(critter, i) in $store.state.inactiveCritters" :key="i" :critter="critter" :i="i" isAdopt="false"/>
        </div>
    </div>
</template>

<script>
import CritterComponent from '../components/CritterComponent.vue';

export default {
    components: {CritterComponent},
    created() {
        if (!this.$store.state.isBegin) {
            this.$router.push({name: "home"})
        }
    },
    computed: {
        isYourCritters() {
            if (this.$store.state.activeCritters.length > 0) {
                return true;
            }
            else return false;
        },
        isAdopt() {
            if (this.$store.state.inactiveCritters.length > 0) {
                return true;
            }
            else return false;
        },
    }
}
</script>

<style scoped>
    .critter-container {
        display: inline-block;
        padding: 20px;
        border: 1px solid;
        border-radius: 10px;
    }
    .container {
        border: 1px solid;
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 10px;;
    }
    .container h1 {
        text-align: center;
        margin-bottom: 5px;
    }
</style>