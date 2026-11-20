<script setup lang="ts">
    import type { Usuario } from '@/shared/modelUser'
    import { inject, ref, type Ref} from 'vue'

    const superior = inject<Ref<number>>('superior', ref(0))
    const inferior = inject<Ref<number>>('inferior', ref(0))

   const props = defineProps<{
    usuario: Usuario
   }>()

   const emit = defineEmits(['editarUsuario'])
</script>

<template>
    <article>
        <div class="topo">
            <section class="nome">
                <img src="/icons/user.svg">
                {{ usuario.nome }}
            </section>
            <a class="lapis" @click="emit('editarUsuario', usuario)">
                <img src="/icons/pencil-simple.svg">
            </a>
        </div>

        <span class="email">{{ usuario.email}}</span>
        <a class="ver-tarefa">Ver tarefa</a>

        <section v-if="usuario.tarefas > superior" class="vermelho">
            Tasks: {{ usuario.tarefas }}
        </section>
        <section v-else-if="usuario.tarefas > inferior" class="amarelo">
            Tasks: {{ usuario.tarefas }}
        </section>
        <section v-else>
            Tasks: {{ usuario.tarefas }}
        </section>
    </article>
</template>

<style scoped>
  .vermelho{
    color: #F74B54;
  }
  .amarelo{
    color: #FCE83A;
  }
  article{
    margin: auto;
    margin-top: 10px;
    width: 455px;
    background-color: var(--cor-primaria);
    padding: 20px;
    display: grid;
    gap: 15px;
    grid-template-areas: "a a""b b""c d";
  }
  article>div{
    display: flex;
    justify-content: space-between;
    height: 60px;
    grid-area: a;
  }
  article>div>section>img{
    height: 90%;
    margin-right: 20px;
  }
  article>div>a>img{
    height: 60%;
  }
  article>div>section{
    align-items: center;
    display: flex;
    width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a{
        cursor: pointer;
  }
  article>span{
    grid-area: b;
    margin-left: 76px;
    margin-top: -15px;
    font-size: var(--texto-secundario);
    color: var(--cor-texto-secundaria);
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  article>a{
    margin-top: auto;
    grid-area: c;
    font-size: var(--texto-secundario);
    color: var(--cor-texto-secundaria);
  }
  article>section{
    grid-area: d;
    text-align: end;
  }
</style>