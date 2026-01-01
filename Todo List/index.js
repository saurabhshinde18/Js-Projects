var input = document.querySelector('input');
var task = document.querySelector('.task');
input.addEventListener('keyup',function(e){
     if(e.key == 'Enter'){
       inputset(this.value);
       input.value = "";
     }
})



function inputset(value){
   var li = document.createElement('li');
   li.innerHTML = `<div class="list">
        <h1>${value}<h1>
        <i class="fa-regular fa-circle-xmark"></i>
    </div>
   `
   li.addEventListener('click',function(){
     li.classList.toggle('abc');
   });

   icon = li.querySelector('i');
   icon.addEventListener('click',function(){
      li.remove();
   });
   task.appendChild(li)
}

