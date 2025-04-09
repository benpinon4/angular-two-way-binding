import { Component } from "@angular/core";


@Component ({
    selector: "two-way",
    templateUrl: "two.component.html",
    styleUrl: "two.component.css"
})

export class twoWay {   
    name: string = "bob diamond"
    age: number = 55
    messageString!: string;
    
    constructor(){
        this.messageString = `${this.name} is ${this.age} years old`
    }


}