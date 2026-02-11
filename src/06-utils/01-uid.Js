// outils de gestion d'id

const idGestionnary = {
    idInit : 0,
    idTabInit:  [],

    createId: function() {
        this.idInit++
        this.idTabInit.push(this.idInit);
        return this.idInit;
    },

    idExist: function(id){
        return this.idTabInit.includes(id);
    }
}

const id1 = idGestionnary.createId()
const id2 = idGestionnary.createId()
console.log(id1, id2);
console.log(idGestionnary.idTabInit);
console.log(idGestionnary.idExist(id1));  
console.log(idGestionnary.idExist(99));