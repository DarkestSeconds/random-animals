import reddit from 'reddit-image-fetcher';

/**
 * Representa um post de um subreddit.
 * @typedef {Object} RedditPost
 * @property {string} id - O ID único do post.
 * @property {string} type - O tipo de post (por exemplo, "custom").
 * @property {string} title - O título do post.
 * @property {string} postLink - O link para o post.
 * @property {string} image - O link para a imagem associada ao post.
 * @property {string} thumbnail - O link para a miniatura da imagem.
 * @property {string} subreddit - O nome do subreddit em que o post foi feito.
 * @property {boolean} NSFW - Indica se o post é NSFW (conteúdo impróprio).
 * @property {boolean} spoiler - Indica se o post contém spoilers.
 * @property {number} createdUtc - O timestamp UTC de criação do post.
 * @property {number} upvotes - O número de votos positivos recebidos pelo post.
 * @property {number} upvoteRatio - A proporção de votos positivos em relação ao total de votos.
 */


export async function getRedditImages () {

    /**
     * @type RedditPost[] | undefined
     */
   const result = await reddit.fetch({
        type: 'custom',
        total: 2,
        allowNSFW: false,
        subreddit: ['AnimalsBeingDerps', 'AnimalsBeingJerks', 'Catswithjobs', 'CatsAreAssholes', 'WhatsWrongWithYourDog', 'AnimalsBeingStrange']
    })

    const nowMs = Date.now();

    const okPosts = []

    for (const post of result) {

        // if (post.createdUtc >= nowMs - (60 * 60 * 24 * 7)) {
            okPosts.push(post)
        // }
    }

    return okPosts;
}