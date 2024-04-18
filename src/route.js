import { AppService } from "./service.js"

import EventEmitter from 'events'

const eventEmitterAnimals = new EventEmitter()

const urls = new Set()

const interval = setInterval(async () => {
    const animals = await AppService.getRandomAnimals()

    for (const animal of animals) {
        if (urls.has(animal.image)) {
            continue
        }
        urls.add(animal.image)
        eventEmitterAnimals.emit('newAnimal', animal)
    }

}, 4000)

export const AppController = {
    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} reply
     */
    async getAnimals(req, reply) {

        reply.setHeader('Content-Type', 'text/event-stream')
        reply.setHeader('Cache-Control', 'no-cache')
        reply.setHeader('Connection', 'keep-alive')

        eventEmitterAnimals.on('newAnimal', (animal) => {
            reply.write(`data: ${animal.image}\n\n`)
        })

}
}