// # SNACK 1
// 1. Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
//  La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico,
// 2.  per cui dobbiamo fare in modo che ogni ospite sia un oggetto    javascript che ha come attributi:
//     nome del tavolo, (tableName)
//     nome dell'ospite,  (guestName)
//     posto occupato. (place)
// 5. Generiamo e stampiamo in console la lista per i segnaposto.


    // SNACK 1
const vipList = [
    {
        guestName:'Brad Pitt',
        tableName:'TavoloVip',
        place:'1'
    },
    {
        guestName:'Jhonny Depp',
        tableName:'TavoloVip',
        place:'2'
    },
    {
        guestName:'Lady Gaga',
        tableName:'TavoloVip',
        place:'3'
    },
    {
        guestName:'Cristiano Ronaldo',
        tableName:'TavoloVip',
        place:'4'
    },
    {
        guestName:'Georgina Rodriguez',
        tableName:'TavoloVip',
        place:'5'
    },
    {
        guestName:'Chiara Ferragni',
        tableName:'TavoloVip',
        place:'6'
    },
    {
        guestName:'Fedez',
        tableName:'TavoloVip',
        place:'7'
    },
    {
        guestName:'George Clooney',
        tableName:'TavoloVip',
        place:'8'
    },
    {
        guestName:'Amal Clooney',
        tableName:'TavoloVip',
        place:'9'
    },
    {
        guestName:'Maneskin',
        tableName:'TavoloVip',
        place:'10'
    },
];
vipList.forEach(element => {
    // console.log(element);
});

    // SNACK 2
const studentList = [
    {
        id:'213',
        name:'Marco della Rovere',
        grades:'78',
    },
    {
        id:'110',
        name:'Paola Cortellessa',
        grades:'96',
    },
    {
        id:'250',
        name:'Andrea Mantegna',
        grades:'48',
    },
    {
        id:'145',
        name:'Gaia Borromini',
        grades:'74',
    },
    {
        id:'196',
        name:'Luigi Grimaldello',
        grades:'68',
    },
    {
        id:'102',
        name:'Piero della Francesca',
        grades:'50',
    },
    {
        id:'120',
        name:'Francesca de Polenta',
        grades:'84',
    },
];

studentList.filter(el => {
    if(el.grades > 70 && el.id > 120){
        // console.log(el);
        console.log("Studenti con voto superiore di 70:")
        console.log(el.name,el.grades);
        console.log("id > 120" + " = " + el.id)
    }
    return el;
});