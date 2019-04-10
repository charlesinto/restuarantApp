class Helper {
    static isEmpty(obj){
        for(let key in obj) {
            if(this.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}

export default Helper;