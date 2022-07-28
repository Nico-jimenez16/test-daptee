<template>
    <div id="header">
        <div class="w-full">
            <div class="lg:h-32">
                <router-link :to="{name: 'home'}">
                    <img src="../assets/Logo-Daptee-Nuevo.svg" alt="">
                </router-link>
            </div>
            <div class="w-full">
                <router-link class="flex justify-center p-2 mb-2 border-y-2" :to="{name: 'usuarios'}">
                    <h2 class="text-xl font-bold">Usuarios</h2>
                </router-link>
                <router-link class="flex justify-center p-2 mb-2 border-y-2" :to="{name: 'productos'}">
                    <h2 class="text-xl font-bold">Productos</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'HeaderComponent',
  data() {
      return {
        
      }
  },
  
}
</script>