<template>
    <div class="critter-room-container">
        <CritterRoom :critter="critter" />
    </div>
</template>

<script>
import CritterRoom from '@/components/CritterRoom.vue';

export default {
    components: {CritterRoom},
    data() {
        return {
            critter: null
        };
    },
    created() {
        this.critter = this.$store.state.activeCritters.find((critter) => critter.name === this.$route.params.crittername);
    }
}
</script>

<style>
.critter-room-container {
    height: 85vh;
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>