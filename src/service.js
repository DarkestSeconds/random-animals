import { getRedditImages } from "./lib/reddit-image.js"

export const AppService = {
    async getRandomAnimals () {

        const posts = await getRedditImages()

        return posts

    }
}