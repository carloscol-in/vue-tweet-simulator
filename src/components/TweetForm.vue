<template>
  <div class="tweet-form container" :class="{ 'open': showForm }">
      <form action="">
          <input type="text" class="form-control" placeholder="Name">
          <textarea name="message" id="tweet-message" cols="30" rows="3" class="form-control" placeholder="Write your tweet..."></textarea>
          <button class="btn btn-primary" type="button">
              Send
          </button>
      </form>
  </div>
</template>

<script>
export default {
    props: {
        showForm: Boolean,
    }
}
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>