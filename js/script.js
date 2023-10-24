// # SNACK 1
// 1. Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
//  La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico,
// 2.  per cui dobbiamo fare in modo che ogni ospite sia un oggetto    javascript che ha come attributi:
//     nome del tavolo, (tableName)
//     nome dell'ospite,  (guestName)
//     posto occupato. (place)
// 5. Generiamo e stampiamo in console la lista per i segnaposto.

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
    console.log(element);
});
