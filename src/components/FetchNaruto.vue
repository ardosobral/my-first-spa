<template>
    <div class="container">
        <div class="row">
            <!-- Exibe uma mensagem de carregamento enquanto os dados estão sendo obtidos -->
            <div v-if="loading" class="col-12 text-center">
                <p>Loading...</p>
            </div>

            <!-- Exibe uma mensagem de erro caso a requisição falhe -->
            <div v-if="error" class="col-12 text-center">
                <p>Error loading data.</p>
            </div>

            <!-- Exibe os personagens em uma grade -->
            <div v-else class="col-md-4" v-for="character in characters" :key="character.id">
                <div class="card mb-4">
                    <img :src="character.images[0]" class="card-img-top" alt="Character Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ character.name }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            characters: [], 
            loading: true,  
            error: false    
        };
    },
    methods: {
        // Método para buscar os dados da API
        fetchCharacters() {
            fetch('https://dattebayo-api.onrender.com/characters')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.characters);
                    
                    this.characters = data.characters;  
                    this.loading = false;    
                })
                .catch(() => {
                    this.error = true;       
                    this.loading = false;    
                });
        }
    },
    mounted() {
        this.fetchCharacters();
    }
};
</script>

<style scoped>
.card {
    text-align: center;
}

.card-img-top {
    max-height: 200px;
    object-fit: cover;
}
</style>