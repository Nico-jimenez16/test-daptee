<template>
    <div class="w-full mt-8 flex flex-row flex-wrap justify-center">
        <div v-for="(product , i) of products.products" :key="i" class="flex w-full md:w-1/2 lg:w-1/3 shadow-lg border-2 rounded-xl m-4">
          <div class="flex flex-col w-full p-4">
            <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
            <img class="h-70 thumb" :src="[product.thumbnail]" alt="">
            <div class="flex h-24 mb-2 justify-center items-center">
              <p class="text-md mt-4">{{ product.description }}</p>
            </div>
            <div class="h-12 mb-2">
              <h3 class="text-xl font-bold">$ {{product.price }}</h3>
            </div>
            <div class="flex items-end">
              <button class="w-full bg-teal-400 p-2 text-white rounded-xl">Comprar</button>
            </div>
          </div>
        </div>
    </div>
</template>



<script>
export default {
  name: 'ProductComponent',
  data() {
      return {
        
      }
  },
  props:{
    products:{
        type: Array
    }
  }
  
}
</script>


<style>
.thumb{
  height: 17.5rem;
}
</style>