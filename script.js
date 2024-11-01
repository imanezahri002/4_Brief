let tach = {};
let taches = [];

function ajouter() {
    let id = 0;
    tach = {
        id: id + 1,
        titre: document.getElementById("title").value,
        desc: document.getElementById("descri").value,
        eta: document.getElementById("status").value,
        date: document.getElementById("date").value,
    };
    if(tach.titre && tach.desc && tach.eta && tach.date){
    taches.push(tach);
    afficherTache();
    document.getElementById("formulaire").reset();
    }else alert("ila faut remplir les informations ");
}

function afficherTache() {
    const tbody = document.getElementById("contenu");
    tbody.innerHTML = "";//pour vider l'object

    for (let i = 0; i < taches.length; i++) {
        const lignet = document.createElement("tr");
        tbody.appendChild(lignet);

        //creation de element td
        const tname = document.createElement("td");
        //remplir td
        tname.textContent = `${taches[i].titre}`;
        lignet.appendChild(tname);

        const description = document.createElement("td");
        description.textContent = `${taches[i].desc}`;
        lignet.appendChild(description);

        const etat = document.createElement("td");

        etat.textContent = `${taches[i].eta}`;
        lignet.appendChild(etat);

        const date_l = document.createElement("td");

        date_l.textContent = `${taches[i].date}`;
        lignet.appendChild(date_l);

        const update = document.createElement("td");
        const edit_but = document.createElement("button");
        edit_but.setAttribute("onclick",`modifier(${i})`);
        edit_but.innerHTML = `<i class="fa fa-pen-to-square";"></i>`;
        update.appendChild(edit_but);
        lignet.appendChild(update);
        const effacer = document.createElement("td");
        const delete_but=document.createElement("button");
        delete_but.setAttribute("onclick",`suprimer(${i})`);
        delete_but.innerHTML="<i class='fa-solid fa-trash' style='color: #b8dbd9;'></i>";
        effacer.appendChild(delete_but);
        lignet.appendChild(effacer);
        
    };
}

function modifier(i){
        let tr=document.getElementsByTagName("tr")[i+1];
        let tacheName=tr.getElementsByTagName("td")[0];
        let titre_tache=document.getElementById("title");
        titre_tache.value=tacheName.textContent;

        let description_tache=tr.getElementsByTagName("td")[1];
        let desc_tache=document.getElementById("descri");
        desc_tache.value=description_tache.textContent;

        let eta_tache=tr.getElementsByTagName("td")[2];
        let status_tache=document.getElementById("status");
        status_tache.value=eta_tache.textContent;

        let date_limite=tr.getElementsByTagName("td")[3];
        let date_lim=document.getElementById("date");
        date_lim.value=date_limite.textContent;
        
        let butt=document.getElementById("btn");
        butt.innerText="modifier";
        butt.setAttribute("onclick",`maj(${i})`);
        
    }

    
    function maj(i){
        let tr=document.getElementsByTagName("tr")[i+1];

        let tacheName=tr.getElementsByTagName("td")[0];
        let titre_tache=document.getElementById("title");
        tacheName.textContent = titre_tache.value;

        let description_tache=tr.getElementsByTagName("td")[1];
        let desc_tache=document.getElementById("descri");
        desc_tache.value=description_tache.textContent;

        let eta_tache=tr.getElementsByTagName("td")[2];
        let status_tache=document.getElementById("status");
        eta_tache.textContent=status_tache.value;

        let date_limite=tr.getElementsByTagName("td")[3];
        let date_lim=document.getElementById("date");
        date_limite.textContent=date_lim.value;

        let butt=document.getElementById("btn");
        butt.innerText="Ajouter";
        butt.setAttribute("onclick",`ajouter()`);

        document.getElementById("formulaire").reset();
    }
function suprimer(i){
    let tr=document.getElementsByTagName("tr")[i+1];
    taches.splice(i , 1);
    afficherTache();   
}
