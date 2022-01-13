//////////////////////////
function fun() {
  var a;
  a = 1;
  console.log(a); // 1
}
fun();
/////////////////////////////
function fun() {
  var a = 1;
  var a = 2;
  console.log(a); // 2
}
fun();
////////////////////////////
function fun() {
  let a;
  a = 1;
  console.log(a); // 1
}
fun();
////////////////////////////
function fun() {
  let a = 1;
  a = 2;
  console.log(a); // 2
}
fun();
/////////////////////////////
function fun() {
  let a = 1;
  let a = 2;
  console.log(a);
}
fun(); //SyntaxError: Identifier 'a' has already been declared
//////////////////////////////
function fun() {
  const a = 1;
  console.log(a); // 1
}
fun();
/////////////////////////////
function fun() {
  const a;
  console.log(a)
}
fun() //SyntaxError: Missing initializer in const declaration
//////////////////////////
function fun() {

  const a =1;
  a = 2
  console.log(a)

}
fun()//type error: assignment to constant variable. 
///////////////////////////
function fun() {

 var a = 1;

 function newFun() {
    a = 2
   console.log(a) // 2
 }
  newFun()

}
fun()
///////////////////////////
function fun() {

 var a = 1;

 function newFun() {
   var a = 2
   console.log(a) // 2
 }
  newFun()

}
fun()
//////////////////////////
function fun() {

 var a = 1;

 function newFun() {
   var a = 2
 }
  newFun()

  console.log(a) // 1

}
fun()
////////////////////////////
function fun() {

 var a = 1;

 {
   var a = 3;
   console.log(a) //3
 }

 function newFun(){
   var a = 2
 }
  newFun()

}
fun()
/////////////////////////
function fun() {

  function newFun() {
    var a = 2
  }
  newFun()

  console.log(a)
}
fun()// reference error: a is not defined
/////////////////////////////
function fun() {

var a = 1;

  function newFun() {
    let a = 2
    console.log(a) // 2
  }
  newFun()

  console.log(a) // 1
}
fun()
///////////////////////////
function fun() {

var a = 1;

  function newFun() {
    const a = 2
    console.log(a) // 2
  }
  newFun()

  console.log(a) // 1
}
fun()
//////////////////////////
function fun() {

var a = 1;

  {
    let a = 2
    console.log(a) // 2
  }

  console.log(a) // 1
}
fun()
///////////////////////////
function fun() {

var a = 1;

  {
    const a = 2
    console.log(a) // 2
  }

  console.log(a) // 1
}
fun()
//////////////////////////////
function fun() {

  {
    var a = 1;
    let b = 2;
    const c = 3;
  }

  console.log(a) // 1
  console.log(b) // ReferenceError: b is not defined
  console.log(c) // ReferenceError: c is not defined

}
fun()
///////////////////////////////
function fun() {
  console.log(a); // ReferenceError: cannot access 'a' before initialization

  const a = 1;
}
fun();
/////////////////////////////
function fun() {
  console.log(a); // ReferenceError: cannot access 'a' before initialization

  let a = 1;
}
fun();
////////////////////////
function fun() {
  console.log(a); // undefined

  var a = 1;
}
fun();
/////////////////////////
function fun() {
  let a = 1;
  console.log(a) // 1

  {
      let a =2;
      console.log(a) // 1
  }
}
fun();
/////////////////////////////
function fun() {
  const  a = 1;
  console.log(a); // 1

  {
    const a = 2;
    console.log(a); // 2
  }
}
fun();
////////////////////////
function fun() {
  const a = 1;
  console.log(a); // 1

  function newFun() {
    const a = 2;
    console.log(a); // 2
  }
  newFun();
  
}
fun();
//////////////////////
function fun() {
  let a = 1;
  console.log(a); // 1

  function newFun() {
    let a = 2;
    console.log(a); // 2
  }
  newFun();
}
fun();
///////////////////////
function fun() {
  var a = 1;
  console.log(a); // 1

  function newFun() {
    var a = 2;
    console.log(a); // 2
  }
  newFun();
}
fun();
/////////////////////
function fun() {
  const a = 1;

  function newFun() {
    var a = 2;
    console.log(a); // 2
  }
  newFun()
}
fun();
//////////////////////
function fun() {
  const a = 1;

  function newFun() {
    let a = 2;
    console.log(a); // 2
  }
  newFun();
}
fun();
///////////////////////////
function fun() {
  let a = 1;

  function newFun() {
    var a = 2;
    console.log(a);
  }
  newFun();
}
fun();
/////////////////////////////