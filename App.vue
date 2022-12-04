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
    <div class="sidebar-toggle" @click="toggleMenu"><button>GO</button></div>
    <Header/>
    <Sidebar :openSidebar="isOpenMenu"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

.wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

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

.heading {
    &-1 {
        font-size: 34px;
        margin: 20px 0px;
        font-weight: 300;
        color: #ffffff;
    }
    &-2 {
        font-size: 22px;
        margin: 20px 0px;
        font-weight: 300;
        color: #ffffff;
    }
    &-3 {
        font-size: 17px;
        margin: 20px 0px;
        font-weight: 300;
        color: #b4e6cf;
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
  color: rgb(187, 31, 135);
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


