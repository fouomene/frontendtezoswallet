export class ReponseApi {
   
    status: number;
    message: string;

    //parametre avec ? pour dire pas obligatoire et donc dans notre car 
    //comme tout les champs ne sont pas obligatoire
    //nous pouvons creer un objet eleveDto 
    //via le constructeur par defaut new EleveDTO() 
    constructor(status?:number, message?:string){
        this.status= status;
        this.message = message;
    }

}

