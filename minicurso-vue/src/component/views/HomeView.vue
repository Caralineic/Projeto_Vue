<script setup lang="ts">
    import UserListComponent from '@/component/usuario/UserListComponent.vue'
    import { ref, provide } from 'vue'
    import StatusBar from '@/component/estatistica/StatusBar.vue'
   // import StatusContainer from '@/component/estatisca/StatusCOn'


    const limiteInferior = ref(5)
    const limiteSuperior = ref(10)

    provide('inferior', limiteInferior)
    provide('superior', limiteSuperior)

    function editarUsuario(usuario: Usuario){
        alert('socorro')
    }
</script>

<template>
    <main class="home">
        <div>
        <StatusBar/>
        <UserListComponent @editarUsuario="editarUsuario"/>
        </div>
    </main>
</template>

<style scoped>
    .home {
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 16px;
    } 
</style>