import { Component, signal, computed } from "@angular/core";


@Component ({
    selector: "two-way",
    templateUrl: "two.component.html",
    styleUrl: "two.component.css"
})

export class twoWay {
    
    dynamicVariable = signal("This is a Variable")
    count = signal(0)
    count2 = signal(0)
    name: string = "bob diamond"
    age: number = 55
    messageString!: string;
    dynamicVariable2 = computed(()=> this.count2() + this.age)
    
    constructor(){
        this.messageString = `${this.name} is ${this.age} years old`
    }

    changeVariable(){
        console.log("clicked")
        this.count.set(this.count()+1)
        this.dynamicVariable.set(this.dynamicVariable() + this.count())
        console.log(this.dynamicVariable())
    }

   consoleLogging() {
    console.log(this.messageString)
   }

   addOne () {
    this.count2.set(this.count2() + 1)
    console.log(this.dynamicVariable2())
   }
    
   

}