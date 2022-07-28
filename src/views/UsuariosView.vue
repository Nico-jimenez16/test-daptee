<template>
  <div class="users mt-8">
    <h1 class="text-xl font-bold">Usuarios</h1>
    <Usuario :users="users"></Usuario>
  </div>
</template>

<script>
import Usuario from '@/components/Usuarios.vue'
import servicios from '@/data/servicios'

export default {
  name: 'UsuariosView',
  data() {
    return {
      users: []
    }
  },
  components: {
    Usuario
  },
  async created(){
      this.users = await servicios.GetUser()
      console.log(this.users)
  }
}
</script>