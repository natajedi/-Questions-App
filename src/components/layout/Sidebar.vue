<script>
export default {
  props: {
    openSidebar: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      links: [
        {name: 'HTML', href: '/quiz_html'},
        {name: 'CSS', href: '/quiz_css'},
        {name: 'JS', href: '/quiz_js'}
      ]
    }
  }
};

</script>

<template>
    <div :class="['sidebar', {sidebar_isopen: openSidebar}]">
    <router-link
     class="sidebar__link"
     v-for="link in links"
     :key="link.name"
     :to="link.href">{{link.name}}</router-link>
</div>
</template>

<style lang="scss" scoped>
.sidebar {
    left: 0;
    top: 62px;
    height: 100%;
    background: #ecf5f3;
    position: absolute;
    width: 250px;
    padding: 66px;
    border-radius: 12px;
    transition: 0.2s;
    box-shadow: 0 0 20px rgba($color: #4bebeb, $alpha: 1.0);
    transform: translateX(-250px);
    &_isopen {
        transform: translateX(0px);   
    }
    &__link {
        display: block;
        border-radius: 12px;
        padding: 20px;
        border: 1px solid #fff;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
            border-color: var(--primary-color);
        }
    }
}
</style>