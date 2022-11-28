<script>
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  components: {Sidebar, Header},
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">menu</div>
    <Header/>
    <Sidebar :openSidebar="isOpenMenu"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  height: 6em;
  padding: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

.content {
  min-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: .2s;

  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary-color);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}

</style>


