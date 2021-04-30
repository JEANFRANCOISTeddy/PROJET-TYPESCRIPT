export class Pokemon {
    name: string;
    speed: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }

    public fight(adversary: Pokemon) {
        if (this.speed > adversary.speed || this.speed === adversary.speed){
            return this;
        }
        return adversary;
    }

}

