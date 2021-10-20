<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />

  <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" :openCloseForm="openCloseForm" />

  <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import { ref } from "vue"
import Menu from "./components/Menu.vue"
import TweetForm from "./components/TweetForm.vue"
import TweetList from "./components/TweetList.vue"
import useFormTweet from "./hooks/useFormTweet"
import { getTweetsApi } from "./api/tweet"

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    const loadTweets = () => {
      return getTweetsApi().reverse()
    }

    let tweets = ref(loadTweets())

    const reloadTweets = () => {
      tweets.value = loadTweets()
    }

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    }
  },
}
</script>

<style lang="scss">
</style>
