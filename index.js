for(let i=0;i<5;i++){
    document.getElementsByClassName('facts-content'+`${i+1}`)[0].classList.add('hide');
}


function handleClick(event){
   let event1 = (Number(event.id));
   console.log(event1);
   
    document.getElementsByClassName('facts-content'+`${event1}`)[0].classList.toggle('show');
}
