<template>
    <h1 class="heading-1">Tip</h1>
    <h2 class="heading-1">Heading 1</h2>
    <h2 class="heading-2">Heading 2</h2>
    <h2 class="heading-3">Heading 3</h2>
    <router-link to="/">Tip</router-link>
</template>

<style lang="scss">
.heading {
    &-1 {
        font-size: 34px;
        margin: 20px 0px;
        font-weight: 300;
    }
    &-2 {
        font-size: 22px;
        margin: 20px 0px;
        font-weight: 300;
    }
    &-3 {
        font-size: 17px;
        margin: 20px 0px;
        font-weight: 300;
    }


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