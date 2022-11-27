<template>
    <header class="header">
    <router-link to="/">Header</router-link>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: #fff;
    font-weight: bold;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 1.0);
    height: 64px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
}
</style>