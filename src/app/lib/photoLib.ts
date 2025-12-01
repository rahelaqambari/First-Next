export type WonderImage = {
    id:string;
    name:string;
    src:string;
    photographer:string;
    location:string;
};

const wondersImages: WonderImage [] = [
   {
     id: "1",
    name: "Great Wall of China",
    src: "/img/1.jpg",
    photographer: "photo by max van den",
    location: "China",
   },
   {
     id: "2",
    name: "petra",
    src: "/img/2.jpg",
    photographer: "photo by Reiseuhu on Unsplash",
    location: "Jordan",
   },
   {
     id: "3",
    name: "Christ the Remander",
    src: "/img/3.jpg",
    photographer: "photo by Andra Leopardi on Unsplash",
    location: "Brazil",
   },
   {
     id: "4",
    name: "Machu Picchu",
    src: "/img/4.jpg",
    photographer: "photo by Jared Schwitzke on Unsplash",
    location: "Peru",
   },
   {
     id: "5",
    name: "Chichen Itza",
    src: "/img/5.jpg",
    photographer: "photo by E Mens on Unsplash",
    location: "Mexico",
   },
   {
     id: "6",
    name: "Roman Colosseum",
    src: "/img/6.jpg",
    photographer: "photo by Andera Cipriano on Unsplash",
    location: "Italy",
   },
   {
     id: "7",
    name: "Taj Mahal",
    src: "/img/7.jpg",
    photographer: "photo by Su San Lee on unsplash",
    location: "India",
   },
    {
     id: "8",
    name: "Effle Tower",
    src: "/img/8.png",
    photographer: "photo by Ra Hee on unsplash",
    location: "France",
   },

];
export default wondersImages;