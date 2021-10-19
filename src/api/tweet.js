import { v4 as uuidv4 } from "uuid"
import { TWEETS } from "../utils/constants"

export function saveTweetApi(tweet_message, username) {
  const tweet = {
    id: uuidv4(),
    tweet_message,
    username,
    createdAt: new Date(),
  }
  const tweet_txt = JSON.stringify(tweet)
  localStorage.setItem(TWEETS, tweet_txt)
}
