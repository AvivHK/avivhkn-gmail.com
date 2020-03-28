import {observable, action} from 'mobx'

export class InputHandler{
    @observable clientName = ""
    @observable owner = ""
    @observable country = ""
    @observable newClient = ""
    @observable email = ""
    @observable eamilType = ""


    @action handleInput = (name,value) =>{
        this[name] = value;
    }
}