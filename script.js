function openImg(src){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src=src;
}

function closeImg(){
  document.getElementById("lightbox").style.display="none";
}

function sendWhatsApp(){
  let name=document.getElementById("name").value;
  let idea=document.getElementById("idea").value;
  let budget=document.getElementById("budget").value;

  let msg=`Name: ${name}%0AIdea: ${idea}%0ABudget: ${budget}`;
  window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`,'_blank');
}