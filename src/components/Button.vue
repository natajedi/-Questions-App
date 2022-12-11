<template>
    <div class="button">
    </div>
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
    margin-top: 15px;
    align-self: flex-end;
    background: none;
    color: #180735;
    border: 2px solid #13e7a8;
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