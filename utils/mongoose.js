import mongoose from 'mongoose';
const host = 'mongo-stack_overflow';
const port = 27017;
const database = 'stack-overflow';
const MONGODB_URI = `mongodb://${host}:${port}/${database}`;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log ('conexion satisfactoria a MongoDB'))
    .catch((error)=> console.error('Error al conectarse a MongoDB: ', error));

    export default mongoose;
