const listaDesejoRepository = require('../repositories/listaDesejoRepository');

module.exports = {
    async create (request, response){      
        try {
            let lista =  await listaDesejoRepository.create(request.body);
            console.log(lista);
            return response.json({
                "mensagem" : "Lista criada com sucesso!",
                "status" : 200,
                "lista" : lista            
            }); 
        }       
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "lista" : null
            });
        }
    },

    async delete (request, response){
        let { id }  = request.params;
        const lista = await listaDesejoRepository.delete(id);
        return response.json({
            "mensagem" : "Lista removida com sucesso!",
            "status" : 200
        }); 
    },

    async getById (request, response){
        let { id }  = request.params;
        let lista =  await listaDesejoRepository.getById(id);
        
        if (lista === null) {
            response.status(404);           
            return  response.json({
                "mensagem" : "Lista não encontrada!",
                "status" : 404,
                "lista" : lista            
            });         
        }
        return response.json({
            "mensagem" : "Lista encontrada com sucesso!",
            "status" : 200,
            "lista" : lista            
        }); 
    },

    async addItem (request, response){      
        try {        
            await listaDesejoRepository.addItem(request.body);         
            return response.json({
                "mensagem" : "Item adicionado com sucesso!",
                "status" : 200           
            }); 
        }       
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "lista" : null
            });
        }
    },

    async getListaByParticipante (request, response){
        let { idParticipante }  = request.params;
        console.log(idParticipante);
        let listas =  await listaDesejoRepository.getListaByIdParticipante(idParticipante);
        
        if (listas === null) {
            response.status(404);           
            return  response.json({
                "mensagem" : "Lista não encontrada!",
                "status" : 404,
                "listas" : listas           
            });         
        }
        return response.json({
            "mensagem" : "Lista encontrada com sucesso!",
            "status" : 200,
            "listas" : listas            
        }); 

    },

    async delItem (request, response){
        let { id , idItem }  = request.params;
        const lista = await listaDesejoRepository.delItem(id, idItem);
        return response.json({
            "mensagem" : "Item removido com sucesso!",
            "status" : 200
        }); 
    },
}
