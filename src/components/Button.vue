<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
    <button :class="['btn', 'btn_${color}']">{{label}}</button>
</template>

<style lang="scss" scoped>
.button {
    appearance: none;
    outline: none;
    border: 2px;
    cursor: pointer;
    padding: 10px 3px;
    background-color: #67dbc2;
    color: #9565e2;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    border-radius: 5px;
  }
  
   button:disabled {
   opacity: 0.5;
  }

  .btn {
    margin-right: 15px;
    margin-left: 25px;
    margin-bottom: 15px;
    padding: 0 24px;
    height: 40px;
    color: #2e075a;
    background-color: #67dbc2;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: .2s;
  }
  .line {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
  
  </style>