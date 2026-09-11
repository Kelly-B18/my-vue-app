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
  <div class="form-container">
    <!-- Form Inputs with v-model -->
    <input type="text" v-model="name" placeholder="Enter Name"><br><br>
    <input type="number" v-model="age" placeholder="Enter Age"><br><br>
    <input type="text" v-model="course" placeholder="Enter Course"><br><br>

    <hr>

    <!-- Live Display updating instantly -->
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Course: {{ course }}</p>
  </div>
</template>
