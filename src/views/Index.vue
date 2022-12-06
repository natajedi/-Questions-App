<script>
      import json from './server/db.json'
      export default{
          data(){
              return{
                  myJson: json
              }
          }
      }
</script>

<template>
  <h1 class="heading-1">The Quiz</h1>
</template>
