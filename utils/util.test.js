//Mocha goes through the project
const utils = require('./utils');
it('should add two numbers',()=>{
  var res = utils.add(2,33);
  if(res !== 35){
      console.log(res);
      throw new Error(`Expected 35 but got ${res}`);
  }
});

it('should square the  number 6',()=>{
   var result = utils.square(6);
   if(result !== 36){
       throw  new Error(`Exected 36 got ${result}`);
   }
});

