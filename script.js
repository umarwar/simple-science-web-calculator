const simmode = document.querySelector('.btn1')
const  scmode = document.querySelector('.btn2')
const science = document.getElementById('sc')
const simple  = document.getElementById('sim')
let string = "";
let buttons = document.querySelectorAll('.button, .design, .red-des, .eq');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
   
    if(e.target.innerHTML == '='){
      console.log(string)
      const  tri = check(string)
      console.log(tri)
      if(tri === true){
        console.log('tri')
        string = calculate(string)
      }else{
        string = eval(string);
      }
      //string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
const check = function(string){

  if(string.includes("Sin")){
    
    return true
 }
 else if(string.includes("Cos")){
 
  return  true
 }
 else if(string.includes("Tan")){
 
  return  true
 }
 else{
  return false
 }
}
const calculate = function(string){
    if(string ==='Sin'){
      
       return Math.sin(string.substring(5))
    }
    else if(string === 'Cos'){
     
     return  Math.cos(string.substring(5))
    }
    else{
  
      return Math.cos(string.substring(5))
    }

}
scmode.addEventListener('click',(e)=>{
  console.log(e);
  //science.classList.add("display");
  science.style.display='block';
  simple.style.display='none';
})
simmode.addEventListener('click',(e)=>{
  console.log(e);
  //science.classList.add("display");
  science.style.display='none';
  simple.style.display='block';
})