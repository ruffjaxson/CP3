<template>
<div>
  <div class='main-container'>
    <h1>Sequels vs Prequels?</h1>
    <h2>Enter your argument here</h2>

    <h3>Add a Comment</h3>
        <form v-on:submit.prevent="addComment">
          <input v-model="addedName" placeholder="Name">
          <br/>
          <textarea v-model="addedComment"></textarea>
          <br />
          <button type="submit">Comment</button>
        </form>

  </div>

  <div class='footer'>
    <div class='footer-content'>
      <p>Pair Programmed by Jaxson Ruff and Riley Ross</p>
      <a class='footer-link' href='https://github.com/ruffjaxson/CP2'>GitHub Repository</a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Testimony',
  components: {

  },
  data() {
    return {
    }
  },
  methods: {
    addComment() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment,
        today: new Date().toLocaleString()
      });
      this.addedName = '';
      this.addedComment = '';
    }
  },
}

</script>
