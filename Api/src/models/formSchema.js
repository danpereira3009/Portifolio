import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        assunto: {type: String, required: true},
        mensagem: {type: String, required: true},
    },
    {
        versionKey: false
    }
);

const mensagens = mongoose.model('mensagens', formSchema)

export default mensagens