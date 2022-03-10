console.log("Adding javascript");
let item = document.getElementsByClassName('item');
Array.from(item).forEach(e=>{
    e.addEventListener('mouseover', ()=>{
            e.style.backgroundColor='brown';
            e.style.borderRadius='17px';
        });
    e.addEventListener('mouseout', ()=>{
        e.style.backgroundColor='';
        e.style.borderRadius='';
    });
    e.addEventListener('click', ()=>{
        e.href='#home';
    })
})
// let home = document.getElementById('home');
// let services = document.getElementById('services');
// let ourClients = document.getElementById('ourClients');
// let contactUs = document.getElementById('contactUs');
// home.addEventListener('mouseover', ()=>{
//     home.style.backgroundColor='brown';
//     home.style.borderRadius='17px';
// });
// home.addEventListener('mouseout', ()=>{
//     home.style.backgroundColor='';
//     home.style.borderRadius='';
// });