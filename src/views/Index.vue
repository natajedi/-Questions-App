<script>
  export default {
    mounted() {
      fetch('http://localhost:3000/data').then(
          (response) => response.json()
      ).then((data) => this.myJson = data)
    },
    data() {
      return {
        myJson: null
      }
    }
  }
</script>

<template>
  <h1 class="heading-1">The Quiz</h1>

  <pre>{{myJson}}</pre>
</template>
