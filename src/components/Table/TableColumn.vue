<template>
    <div class="table-column">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.table-column {
  padding: 16px 0;
  position: relative;
  &-image {
    max-width: 100%;
    @media screen and (max-width: 767px) {
    max-width: 200px;
    }
  }
  &__title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 767px) {
    display: inline-block;
    }
  }
}
</style>