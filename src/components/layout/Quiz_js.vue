<template>
    <h1 class="heading-1">JS</h1>
    <div class="content">
          
    <div class="questions">
            <span>Выберите правильный вариант ответа</span>
        </div>
    </div>
    <div class="round">
<input type="checkbox">
<input type="checkbox" data-v-3b970231="">
<label for="checkbox"></label>
</div>
<span>правильный вариант</span>
<div>
    <router-link to="/">Home</router-link>
</div>
</template>

<style>

.checkbox {
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0%;
  width: 28px;
}

.round {
  position: relative;
  margin-right: 20px;
}

.round label {
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0%;
  width: 28px;
}

.round label:after {
  border: 2px solid #ffffff;
  border-top: none;
  border-right: none;
  cursor: pointer;
  transform: rotate(-45dbg);
  width: 12px;
}

.round input[type="checkbox"] {
visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
    background-color: blue;
    border-color: aqua;
}

.round input[type="checkbox"]:checked + label:after {
   opacity: 1;
}

.round label {
  border-color: blue;
}

.questions>span {
  display: flex;
  margin: 10px auto;
  width: 90%;
  background-color: blueviolet;
  border-radius: 30px;
  padding: 15px;
}
</style>