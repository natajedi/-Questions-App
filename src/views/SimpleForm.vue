<script>
export default {
    data () {
    return{
        categories: [
            'registration',
            'avtorization',
            'subscribe'
        ],
    event: {
        category: '',
        title: '',
        description: '',
        pets: '1',
        extras: {
            catering: false,
            music: false
        }
      }
     }
    }
}
</script>

<template>
    <div>
        <h1>REGISTRATION event</h1>
        <form>

     <label>Select</label>
     <select v-model="event.category">   
        <option
         v-for="option in categories"
         :value="option" 
         :key="option"
         :selected="option === event.category"
         >{{ option }}</option>
    </select>

    <h3>Name & describe</h3>
    
    <BaseInput
    v-model="event.title"
    label="Name"
    type="text"
    />

    <BaseInput
    v-model="event.description"
    label="Description"
    type="text"
    />

    <label>Description</label>
     <input 
     v-model="event.description"   
     type="text"
     plaseholder="Description"
     class="field"
    />
    
    <div>
        <input
        type="radio"
        v-model="event.pets"
        :value="0"
        name="pets"
        />
        <label>No</label>
    </div>

<button class="button -fill-gradient" type="submit">Submit</button>
</form>
</div>
</template>

