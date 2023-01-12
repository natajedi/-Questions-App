<script>
export default {
  props: {
    openRegistration: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      links: [
        {name: 'Registration', href: '/registration_form'},
      ]
    }
  }
};

</script>

<template>
  <header class="header">
    <router-link to="/">QUESTION OF COLLECTION</router-link>
  </header>
  <header class="registration_form">
    <router-link to="/"></router-link>
    <div :class="['registration', {registration_isopen: openRegistration}]">
     <router-link
     class="registration__link"
     v-for="link in links"
     :key="link.name"
     :to="link.href">{{link.name}}</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
    background: rgb(228, 247, 237);
    font-weight: bold;
    padding: 26px;
    box-shadow: 0px 0px 20px rgba($color: #4bebeb, $alpha: 1.0);
    height: 64px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    border-radius: 12px;
}
.registration_form {
    background: rgb(228, 247, 237);
    font-weight: bold;
    padding: 13px;
    box-shadow: 0px 0px 20px rgba($color: #4bebeb, $alpha: 1.0);
    height: 32px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    border-radius: 6px;
}
</style>