<template>
  <div>
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">
            <router-link to="/">Hello World</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to=/loop>Loop</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to=/naruto>Naruto</router-link>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.example>.teste {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
