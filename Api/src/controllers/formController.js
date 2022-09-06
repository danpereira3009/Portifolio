import mensagens from "../models/formSchema.js";

class formController {

    static cadastrarMensagem = async (req, res) => {
        let mensagem = new mensagens(req.body)
        mensagem.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o animal`})
            } else {
                res.status(201).send(mensagem.toJSON())
            }
        })
    }

    static deletarMensagem = (req, res) => {
        const id = req.params.id
 
        mensagens.findByIdAndDelete(id, (err, mensagemDeletada) => {
            if(err) {
                res.status(500).send({message: 'Usuario não removido'})
            } else if (!mensagemDeletada){
                res.status(404).send({message: 'Usuario não encontrado'})
            } else {
                res.status(200).send({message: `Usuario ${id} removido com sucesso`})
            }
        })
    }
}

export default formController