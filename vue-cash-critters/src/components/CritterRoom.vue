<template>
    <div :style="{ backgroundImage: `url(${critter.currentRoom})` }" class="main-area">
        
        <h1>{{ critter.name }}</h1>
        
    </div>
</template>
<script>
export default {
    props: ['critter']
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
</style>