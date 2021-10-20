import { v4 as uuidv4 } from "uuid"
import { remove } from "lodash"
import { TWEETS } from "../utils/constants"

export function saveTweetApi(message, username) {
  const tweets = getTweetsApi()
  const tweet = {
    id: uuidv4(),
    message,
    username,
    createdAt: new Date(),
  }
  tweets.push(tweet)
  const tweets_txt = JSON.stringify(tweets)
  localStorage.setItem(TWEETS, tweets_txt)
}

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS)
  if (tweets) return JSON.parse(tweets)
  return []
}

export function deleteTweetApi(id) {
  const tweets = getTweetsApi()

  remove(tweets, function (tweet) {
    return tweet.id === id
  })

  localStorage.setItem(TWEETS, JSON.stringify(tweets))
}
