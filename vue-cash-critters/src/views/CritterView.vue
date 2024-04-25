<template>
    <div>
        <div>
            <h1>Your Critters</h1>
            <CritterComponent class="critter-container" v-for="(critter, i) in $store.state.activeCritters" :key="i" :critter="critter" :i="i" isActive="true"/>
        </div>
        <div>
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
    }
}
</script>

<style>
    .critter-container {
        display: inline-block;
        padding: 20px;
        border: 1px solid;
        border-radius: 10px;
    }
</style>