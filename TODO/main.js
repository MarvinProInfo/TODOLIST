const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('form input');
let allTache = [];

form.addEventListener('submit', event =>{
    event.preventDefault();
    const text = input.value.trim();
    if(text !== ""){
        rajouteUneTache(text);
        input.value='';
    }
})

function rajouteUneTache(text) {
    const todo={
        text,
        id:Date.now()
    }
    afficherListe(todo);
}

function afficherListe(todo) {
    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);

    const input = document.createElement('input');
    input.setAttribute('type','checkbox')
    input.addEventListener('click', tacheFaite);
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText  = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', supprimerTache)
    const img = document.createElement('img');
    img.setAttribute('src', 'Img/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    liste.appendChild(item);
    allTache.push(item);
}

function tacheFaite(e) {
    e.target.parentNode.classList.toggle('finDeTache')
}

function supprimerTache(e){
    allTache.forEach(el =>{
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove();
            allTache = allTache.filter(li => li.dataset.key !== el.dataset.key)
        }
    })
}