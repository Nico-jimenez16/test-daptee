<template>
  <div class="products mt-8">
    <h1 class="text-xl font-bold">Productos</h1>
    <Producto :products="products"></Producto>
  </div>
</template>

<script>
import Producto from '@/components/Productos.vue'
import servicios from '@/data/servicios'

export default {
  name: 'ProductosView',
  data() {
    return {
      products: []
    }
  },
  components: {
    Producto
  },
  async created(){
      this.products = await servicios.GetProducts()
  }
}
</script>