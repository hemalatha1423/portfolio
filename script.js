const links=document.querySelectorAll(".nav-link");
const pages=document.querySelectorAll(".page");

function showPage(id){
  pages.forEach(p=>p.classList.toggle("active",p.id===id));
  links.forEach(l=>l.classList.toggle("active",l.dataset.page===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
links.forEach(link=>link.addEventListener("click",()=>showPage(link.dataset.page)));
