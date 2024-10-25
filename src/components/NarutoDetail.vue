<template>
    <div v-if="character" class="container">
      <div class="card text-center my-4">
          <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img :src="character.images[0]" class="img-thumbnail"  alt="Character Image">
                </div>
                <div class="col-9">
                    <h2 class="card-title">{{ character.name }}</h2>
                    <!-- Hmm falta algo aqui né? -->
                </div>
            </div>
        </div>
      </div>
    </div>
    <div v-else-if="loading" class="text-center mt-4">
      <p>Carregando...</p>
    </div>
    <div v-else-if="error" class="text-center mt-4">
      <p>Erro ao carregar personagem.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'], // Recebe o `id` como prop da rota
    data() {
      return {
        character: null, 
        loading: true,   
        error: false     
      };
    },
    methods: {
      fetchCharacter() {
        fetch(`https://dattebayo-api.onrender.com/characters/${this.id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.character = data; 
            this.loading = false;  
          })
          .catch(() => {
            this.error = true;     
            this.loading = false;  
          });
      }
    },
    mounted() {
      this.fetchCharacter(); // Chama o método ao montar o componente
    },
    watch: {
      id() {
        this.fetchCharacter();
      }
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
        max-height: 300px;
        object-fit: cover;
  }
  </style>
  