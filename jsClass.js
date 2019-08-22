class Player{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`)
    }
}


class Wizard extends Player {
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`yohooo! I'm a ${this.type} `)
    }
}


const wizard1 = new Wizard("Dave", "Healer");