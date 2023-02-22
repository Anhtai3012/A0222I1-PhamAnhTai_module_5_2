import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1:number=0;
  number2:number=0;
  operator:string="";
  result:number=0;
   fristNumber(number):void{
      this.number1=number;
     console.log(this.number1)
   }
   secoundNumber(number):void{
      this.number2=number;
     console.log(this.number2)
   }

   onOperator(value):void{
       this.operator=value;
   }

   resultNumber():void{
     console.log(this.operator);
     switch (this.operator) {
       case "+": this.result= this.number1 + this.number2;
         console.log(this.result)
         break;
       case "-": this.result=this.number1 - this.number2;
         console.log(this.result);
         break;
       case "*": this.result=this.number1 * this.number2;
         break;
       case "/": this.result=this.number1 / this.number2;
        break;
       default:
         break;
     }

   }


constructor(){ }

  ngOnInit(): void {
  }

}
