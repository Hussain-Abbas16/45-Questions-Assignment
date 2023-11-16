// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const garland = {
    name: "Daphne cneorum",
    price:  499,
    discription: "The garland flower (D. cneorum) is a hardy evergreen trailing shrub, or ground cover, with pink, sweet-scented flowers."
}

let garlands: Array<typeof garland> = [];

// pushing multiple object

garlands.push(garland);

garlands.push({
 name: "summer bliss",
 price: 299,
 discription: "beautiful arrangements of flower"
});

let garland3 = {
    name: "red rose",
    price:  199,
    discription: "Their stems are usually prickly and their glossy, green leaves have toothed edges."
}
garlands.push(garland3);

//console.log(garlands);
garlands.push({
    name: "Lilly",
    price:  250,
    discription: "Lilies typically feature -tepaled flowers in a variety of shapes (trumpet, funnel, cup, bell, bowl or flat), sometimes nodding, sometimes with reflexed petals, atop stiff, unbranched stems (1-8' tall) clothed with linear to elliptic leaves. Flowers are often fragrant and come in a broad range of colors except blue.."

});

function displayGarlands(garlands:Array<typeof garland>){
    for(let i of garlands){
        console.log(`title: ${i.name}
        discription: ${i.discription}
        price: ${i.price}
        _______________\n`);
     
    }}
displayGarlands(garlands);
