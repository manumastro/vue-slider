const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

/*
Descrizione:
Partendo dal markup consegnate rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente
Bonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

//1. Quando clicco sulla freccia next o prev deve essere mostrata l'immagine e la descrizione corrispondente all'elemento selezionato


const app = new Vue({
    el: '#app',

    
    data: {
        counterIndex: 0,
        thumbClicked: false,
        items: slides,
    },
    
    methods:{
        prevPhoto(){
            this.counterIndex--;
            if(this.counterIndex < 0){
                this.counterIndex = this.items.length - 1;
            }
            console.log(this.counterIndex);
        },
        nextPhoto(){
            this.counterIndex++;
            if(this.counterIndex > 4){
                this.counterIndex = 0;
            }
            console.log(this.counterIndex);
        },
      
    },

    mounted(){
        console.log(this.counterIndex);
    }
})
