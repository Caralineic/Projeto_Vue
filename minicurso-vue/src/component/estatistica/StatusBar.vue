<script setup lang="ts">
    import { computed, inject, type Reactive } from 'vue'
    import type { Usuario } from '@/shared/modelUser'

    const usuarios = inject<Reactive<Usuario[]>>('usuarios', [])

    const totalUsuarios = computed(() => usuarios.length)

    const totalTarefas = computed(() => usuarios.reduce((total, u) => total + u.tarefas, 0))

    const mediaTarefas = computed(() => totalTarefas.value / totalUsuarios.value)
</script>

<template>
    <header>
        <p>Total de usuarios: {{ totalUsuarios }}</p>
        <p>Total de tickets: {{ totalTarefas }}</p>
        <p>Media de tickets: {{ mediaTarefas }}</p>
    </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  max-width: 1010px;
  background-color: var(--cor-primaria);
  padding: 20px 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  gap: 20px;
}

p {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
  white-space: nowrap;
}

@media (max-width: 1500px) {
  header {
    max-width: 455px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
}
</style>