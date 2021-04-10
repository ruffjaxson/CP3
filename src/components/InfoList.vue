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
        <!-- <p>This is where the photo should go:</p> -->
        <div class="image">
          <img :src="'/images/items/'+item.image">
        </div>
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
