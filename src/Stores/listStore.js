import { observable } from "mobx";

class ListStore {
    @observable list = []

    addItem(item){
        this.list.push(item)
    }

    removeItem(index){
        // will do later
    }
}

const listStore = new ListStore();
export default listStore