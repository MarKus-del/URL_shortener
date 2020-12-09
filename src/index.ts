import express, {Request, Response} from 'express';
import bodyparser  from 'body-parser'
import { MongoConnections } from './database/MongoConnection';
import { URLController } from './controller/URLController';

const api = express();
const urlcontroller = new URLController();

api.use(bodyparser.json())
api.use(bodyparser.urlencoded({extended: true}))

const database = new MongoConnections();
database.connect()

api.post('/shorten', urlcontroller.shorten)
api.get('/:hash', urlcontroller.redirect)

api.get('/', (req: Request, res: Response) => {
    res.json({success: true})
})

api.listen(5000, () => console.log("API rodando na porta 5000"));