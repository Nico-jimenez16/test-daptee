<template>
    <div class="mt-8">
        <div class="w-full flex flex-col p-8">
          <table class="w-full table-auto text-xl">
              <thead class="h-full border-b-2 text-black p-8">
                  <tr>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>email</th>
                      <th>image</th>
                      <th>update</th>
                  </tr>
              </thead>

                    <!-- Tabla de Productos -->

              <tbody class="flex-inline text-2xl">
                  <tr v-for="(user) of users.users" :key="user.id">
                      <td>{{user.firstName}}</td>
                      <td>{{user.lastName}}</td>
                      <td>{{user.email}}</td>
                      <img class="w-16 ml-12" :src="[user.image]" alt="">
                      <td>
                        <img @click="Update(user.id)" class="w-8 ml-12 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/512/512142.png" alt="">
                        <div v-if="update == (user.id - 1)">
                          <p>Editar</p>
                          <p>Eliminar</p>
                        </div>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
</template>


<script>
export default {
  name: 'UsuarioComponent',
  data() {
      return {
        update: null
      }
  },
  props:{
    users:{
        type: Array
    }
  },
  methods:{
    Update(id){
      const user = this.users.users.findIndex(user => user.id == id)
      console.log(user)
      if(user == this.update){
        this.update = null
      }else{
        this.update = user
      }
    }
  }
  
}
</script>


<style>
tr{
  height: 0.8rem;
}
td{
  font-size: 1.2rem;
}
</style>