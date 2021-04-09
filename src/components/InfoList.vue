<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="info">
        <h1>{{item.name}}</h1>
        <p>{{item.height}}</p>
        <p>{{item.mass}}</p>
        <p>{{item.gender}}</p>
        <p>{{item.image}}</p>
      </div>
      <div class="image">
        <!-- <img v-bind:src="'/images/items/'+item.image">
        <img :src="'/images/items/'+item.image"> -->

      </div>
      <div class="price">
        <!-- <h2>{{product.price}}</h2> -->
        <!-- <button class="auto" @click="addToCart(product)" >Add to Cart</button> -->
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'InfoList',
  props: {
    items: Array
  },

}
</script>
