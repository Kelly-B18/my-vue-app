<!-- src/components/Navbar.vue -->
<script setup>
import imgSrc from '@/assets/cpu-1.jpg';
import user from '@/assets/circle-user-regular-1.png';
import search from '@/assets/magnifying-glass-solid-1.png';
</script>

<template>
<div class="top">
<img :src="imgSrc" alt="CPU Logo">
<div class="top-title">
<h2 class="card-title">Broke Institute of Technology</h2>
<h5>BIT</h5>
</div>
<div class="nav-links">
<RouterLink to="/" class="nav-item" id="btn-home">Home</RouterLink>
<RouterLink to="/about" class="nav-item" id="btn-about">About</RouterLink>
<RouterLink to="/admissions" class="nav-item" id="btn-admissions">Admissions</RouterLink>
<RouterLink to="/academics" class="nav-item" id="btn-academics">Academics</RouterLink>
<RouterLink to="/campuslife" class="nav-item" id="btn-campuslife">Campus Life</RouterLink>
</div>
<img :src="search" alt="Search Icon" class="search-icon">
<RouterLink to="/sample-data">Sample Data</RouterLink>
<button class="portal">
<img :src="user" alt="User Icon">
<span>Portal Login</span>
</button>
</div>
</template>

<style scoped>
.top {
margin-left: 50px;
display: flex;
align-items: center;
gap: 15px;
border-bottom: 2px;
border-top: 0;
border-left: 0;
border-right: 0;
border-style: inset;
}
.top img {
width: 50px;
}
.top-title h2 {
color: rgb(52, 5, 97);
margin-bottom: -20px;
font-size: 25px;
}
.top-title h5 {
color: rgb(133, 102, 24);
font-family: verdana;
letter-spacing: 2px;
}
.nav-links {
display: flex;
gap: 40px;
}
.nav-item {
position: relative;
text-decoration: none;
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding-bottom: 6px;
color: grey;
font-weight: normal;
transition: color 0.2s ease;
}
.nav-item:hover {
color: rgb(52, 5, 97);
}
.nav-item.router-link-active {
color: rgb(52, 5, 97);
font-weight: bold;
}
.nav-item.router-link-active::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 3px;
background-color: rgb(52, 5, 97);
border-radius: 2px;
}
.portal {
display: flex;
gap: 10px;
background-color: rgb(52, 5, 97);
color: white;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: bold;
padding: 10px 25px;
border-radius: 5px;
cursor: pointer;
border: none;
}
.portal img {
width: 25px;
}
.portal span {
margin-top: 5px;
}
.top img.search-icon {
margin-top: -6px;
margin-right: 15px;
margin-left: 15px;
width: 25px;
height: 25px;
cursor: pointer;
object-fit: contain;
}
</style>
