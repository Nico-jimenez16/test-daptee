<template>
    <div>
        <div class="w-full top-0 p-2">
            <div class="block md:flex">
                <div class="flex w-full md:w-1/2">
                    <img class="w-8 mx-2" src="https://cdn-icons-png.flaticon.com/512/16/16492.png" alt="">
                    <input class="w-full border-2 rounded-xl p-2" type="text">
                </div>
                <div class="flex w-full md:w-1/2 justify-end">
                    <button class="right-0 font-bold mt-4 lg:mt-0">Cerrar Sesion</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'EncabezadoComponent',
  data() {
      return {
        
      }
  },
  
}
</script>


<style>
.encabezado{
    height: 80px;
    padding-left: 300px;
}

</style>