<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>

<div class="login">
  <h2 class="active"> sign in </h2>

  <h2 class="nonactive"> sign up </h2>
  <form> 
   <input type="text" class="text" name="username">
     <span>username</span>
    <br>
    
    <br>
    <input type="password" class="text" name="password">
    <span>password</span>
    <br>

    <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />
    <label for="checkbox-1-1">Keep me Signed in</label>
    
    <button class="signin">
      Sign In
    </button>
    <hr>
    <a href="#">Forgot Password?</a>
  </form>

</div>
</template>


<style scoped>
body,
.signin {
  background-color: #d94d4d;
  font-family: 'Montserrat', sans-serif;
  color: rgb(88, 39, 39);
  font-size: 14px;
  letter-spacing: 1px;
}

.login {
  position: relative;
  height: 560px;
  width: 405px;
  margin: auto;
  padding: 60px 60px;
  background: no-repeat center center rgb(23, 188, 158);
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgb(234, 238, 236);
  background-size: cover;
}

form {
  padding-top: 80px;
}
.active {
  border-bottom: 2px solid #26786d;
}
.nonactive {
  color: rgba(255, 255, 255, 0.2);
}

h2 {
  padding-left: 12px;
  font-size: 22px;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 100;
}

h2:first-child {
  padding-left: 0px;
}

span {
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.4; 
  display: inline-block;
  position: relative;
  top: -65px;
  transition: all 0.5s ease-in-out;
}
.text {
  border: none;
  width: 89%;
  padding: 10px 20px;
  display: block;
  height: 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  margin-top: 15px;
  transition: all 0.5s ease-in-out;
}
.text:focus {
  outline: 0;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
}
.text:focus + span {
  opacity: 0.6;
}

input[type="text"],
input[type="password"] {
  font-family: 'Montserrat', sans-serif;
  color: rgb(5, 62, 25);
}

input {
  display: inline-block;
  padding-top: 20px;
  font-size: 14px;
}

h2,
span,
.custom-checkbox {
  margin-left: 20px;
}
.custom-checkbox {
  -webkit-appearance: none;
  appearance: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  top: 6px;
}
.custom-checkbox:checked {
  background-color: rgb(9, 79, 59);
}
.custom-checkbox:checked:after {
  content: '\2714';
  font-size: 10px;
  position: absolute;
  top: 1px;
  left: 4px;
  color: rgb(234, 238, 236);
}
.custom-checkbox:focus {
  outline: none;
}

label {
  display: inline-block;
  padding-top: 10px;
  padding-left: 5px;
}
.signin {
  background-color: rgb(9, 79, 59);
  color: #FFF;
  width: 100%;
  padding: 10px 20px;
  display: block;
  height: 39px;
  border-radius: 20px;
  margin-top: 30px;
  transition: all 0.5s ease-in-out;
  border: none;
  text-transform: uppercase;
}
.signin:hover {
  background: rgb (9, 79, 59);
  box-shadow: 0px 4px 35px -5px #25917f;
  cursor: pointer;
}
.signin:focus {
  outline: none;
}

hr {
  border: 1px solid rgba(255, 255, 255, 0.1);
  top: 85px;
  position: relative;
}

a {
  text-align: center;
  display: block;
  top: 120px;
  position: relative;
  text-decoration: none;
  color: rgba(51, 14, 14, 0.2);
}

</style>