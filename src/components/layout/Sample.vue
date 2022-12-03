<template>
    <h1 class="heading-1">/</h1>

   <main class="app">
<h1>THE QUIZ</h1>
<div class="quiz">
  <h3>Quiz HTML</h3>
  <form>
    <input class="input" type="text" placeholder="Text question">
    <input class="input" type="text" placeholder="Text question">
    <input class="input" type="text" placeholder="Text question">
    <button class="btn" @click="previous">Previous question</button>
    <button class="btn" @click="next">Next question</button>
    <button class="btn" @click="complete">To complete</button>
  </form>
<div class="quiz-post" v-for="post in quizpost">
      <div>Quiz HTML {{ post.title }}</div>
      <div>HTML {{ post.body }}</div>
<input type="text">
<textarea name="" id="" cols="30" rows="30"></textarea>
 </div>
<div class="quiz-post">
</div>
</div>
   </main>

    <router-link to="/">Home</router-link>
</template>