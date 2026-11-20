<script setup lang="ts">
import UserComponent from '@/component/usuario/UserCardComponent.vue'
import type { Usuario } from '@/shared/modelUser'
import {inject, type Reactive} from 'vue'

const usuarios = inject<Reactive<Usuario[]>>('usuarios', [])

const emit = defineEmits(['editarUsuario'])

</script>

<template>
    <section>
        <UserComponent v-for="usuario in usuarios" :key="usuario.email" :usuario="usuario" @editarUsuario="emit('editarUsuario', $event)" />
    </section>
    
</template>

<style scoped>

section{
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 450px);
}

@media (min-width: 1500px) {
  section{
    margin: auto;
    grid-template-columns: repeat(2, minmax(auto, 500px));
    justify-content: center;
  }
}
</style>