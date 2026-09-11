<script>
export default {
  data() {
    return {
      name: "",
      age: null,
      course: ""
    }
  }
}
</script>

<template>
  <div class="form-container" style="padding: 20px;">
    <h2>Activity 2: Live Profile Form</h2>
    
    <!-- Form Input Fields -->
    <input type="text" v-model="name" placeholder="Enter Name"><br><br>
    <input type="number" v-model="age" placeholder="Enter Age"><br><br>
    <input type="text" v-model="course" placeholder="Enter Course"><br><br>

    <hr>

    <!-- Live Display Updating Instantly -->
    <h3>Live Preview:</h3>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Course: {{ course }}</p>
  </div>
</template>
