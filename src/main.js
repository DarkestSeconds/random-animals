import Express from 'express'
import { AppController } from "./route.js";
import path from "path";

const App = Express();

const PORT = process.env.PORT || 10000;

const dirname = path.resolve();

const publicPath = path.join(dirname, 'src/public')

App.use('/public',Express.static(publicPath))

App.get('/get-animals', AppController.getAnimals)

App.get('/', (req, reply) => {

    reply.sendFile(publicPath + '/pages/main.html')

})

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})