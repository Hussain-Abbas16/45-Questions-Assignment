import chalk from "chalk";
let myFavoriteTransportaion = [];
myFavoriteTransportaion = ['Aprilia RSV4', 'Ducati Panigale V4 R',
    'Suzuki Hayabusa', 'Suzuki GSX-R1000', 'BMW S 1000 RR',
    'Yamaha MT-07', 'Kawasaki Ninja 1000', 'Kawasaki Ninja H2',
    'Aprilia RSV4', 'Kawasaki Ninja ZX-10R', 'Ducati', 'Ducati SuperSport'];
myFavoriteTransportaion.push('Suzuki Katana');
for (let superBike of myFavoriteTransportaion) {
    console.log(`i would like to own a ${chalk.bold.green(superBike)}`);
}
