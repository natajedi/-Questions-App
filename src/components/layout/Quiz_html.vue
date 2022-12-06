<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
    <h1 class="heading-1">HTML</h1>
    <p>Question text</p>
    <main class="app">
  <form>
    <input class="input" type="text" placeholder="choose the correct answer">
<input type="checkbox" v-model="toggle" />
    <input class="input" type="text" placeholder="choose the correct answer">
<input type="checkbox" v-model="toggle" />
    <input class="input" type="text" placeholder="choose the correct answer">
<input type="checkbox" v-model="toggle" />

    <button class="btn" @click="send">Send answer</button>
    <button class="btn" @click="previous">Previous question</button>
    <button class="btn" @click="next">Next question</button>
    <button class="btn" @click="complete">To complete</button>
  </form>
<div class="quiz-post" v-for="post in quizpost">
      <div>Quiz HTML {{ post.title }}</div>
      <div>HTML {{ post.body }}</div>
<input type="text">
<textarea name="question" id="1" cols="30" rows="30"></textarea>
 </div>
<div class="quiz-post">
</div>
   </main>

    <router-link to="/">Home</router-link>
</template>

<style lang="scss" scoped>

.heading {
  background: #fff;
  font-weight: bold;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba($color: #28dfc0, $alpha: 1.0);
  height: 64px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem;
  min-height: 100vh;
}

.quiz {
   background-color: #ac84e6;
   padding: 15px;
   width: 100%;
   max-width: 640px;
   border: 2px solid #b9f1dc;
}

button {
  appearance: none;
  outline: none;
  border: 2px;
  cursor: pointer;
  padding: 2px 3px;
  background-color: #eaedf3;
  color: #422177;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 5px;
}

 button:disabled {
 opacity: 0.5;
}

.input {
  margin-top: 15px;
  width: 100%;
  border: 2px solid #13e7a8;
  padding: 18px 14px;
  margin-top: 14px;
}

form {
  min-height: 100vh;
  display: flex;
  flex-direction :column;
}

.checkbox {
  margin-top: 15px;
  width: 100%;
  border: 2px solid #13e7a8;
  padding: 18px 14px;
  margin-top: 14px;
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
