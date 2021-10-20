<template>
  <div class="tweet-form container" :class="{ 'open': showForm }">
      <form @submit.prevent="sendTweet">
          <input type="text" class="form-control" placeholder="Name" v-model="username">
          <textarea name="message" id="tweet-message" cols="30" rows="3" class="form-control" placeholder="Write your tweet..." v-model="tweet"></textarea>
          <button class="btn btn-primary" type="submit">
              Send
          </button>
      </form>
  </div>
</template>

<script>
import { ref } from "vue"
import { saveTweetApi } from "../api/tweet"

export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
    reloadTweets: Function,
  },

  setup(props) {
    let username = ref("")
    let tweet = ref("")

    const sendTweet = () => {
      if (!tweet.value || !username.value) return
      saveTweetApi(tweet.value, username.value)
      tweet.value = ""
      username.value = ""
      props.reloadTweets()
      props.openCloseForm()
    }

    return {
      sendTweet,
      username,
      tweet,
    }
  },
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
