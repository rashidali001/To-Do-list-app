//Declaring Variables
const body = document.querySelector("body");
let ul = document.querySelector(".ul");
let error = document.querySelector(".error");
let add_task = document.querySelector('#add_task');
let task = document.querySelector('#task');
let btn = document.querySelector('button');
let li;
let list_global;


add_task.addEventListener('click', ()=>
{
  if(task.value == "")
  {
    alert("Input Task First!");
    return (1);
  }
  let li = document.createElement("li");
  li.innerText = task.value;
  ul.append(li);
  task.value = "";
  list_global = document.getElementsByTagName("li");
  console.log(list_global);

});

btn.addEventListener('click', (e) =>{
  
   if (!ul.hasChildNodes())
   {
    alert("No Tasks available!!");
   }
   let list = document.getElementsByTagName("li");
   for (let i =0; i < list.length; i++)
   {
    list[i].style.display = "none";
   }

});

body.addEventListener('click', ()=>{
    if (ul.hasChildNodes())
    {
        //let list = document.getElementsByTagName("li");
        for (let i = 0; i < list_global.length; i++)
        {
            list_global[i].addEventListener('click', ()=>{
                if(list_global[i].style.textDecoration == "line-through")
                {
                    list_global[i].style.textDecoration = "";
                }
                else{
                    list_global[i].style.textDecoration = "line-through";
                }
                
                
            });
        }
        error.style.display="none";
    }
}, false);

if (!ul.hasChildNodes())
{
    error.style.display = "block";
}



 