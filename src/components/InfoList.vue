<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="info">
        <h2>{{item.name}}</h2>
        <p>Height: {{item.height}} cm</p>
        <p>Mass: {{item.mass}} kg</p>
        <p>Gender: {{item.gender}}</p>
        <!-- <p>This is where the photo should go:</p> -->
        <div class="image">
          <img :src="'/images/items/'+item.image" style="height:250px;" >
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

<style scoped>
.items {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.item{
  margin: 35px;
}

</style>
