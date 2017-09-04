// 1
console.log(1997);
console.log(20);
console.log(10, 11, 12, 13, 14, 15);
console.log(20);
console.log('Leila');
console.log(true);
console.log(1, 200, 'Genial', false, true);

// 2
var cantidadDeVentanasEnMiCasa = 9;
console.log(cantidadDeVentanasEnMiCasa);

var soyHumano = true;
console.log(soyHumano);

var miGustoDePizzaPreferido = 'capresse';
console.log(miGustoDePizzaPreferido);

// 3
soyHumano = false;
console.log(soyHumano);

soyHumano = 'Hola';
console.log(soyHumano);

soyHumano = 0;
console.log(soyHumano);

soyHumano = 'Minions';
console.log(soyHumano);

// 4
//A
var noValgoNi5 = 4;
console.log(noValgoNi5);

//B
var miAnoDeNacimiento = 1997;
var meGustariaTener80Anos = 80;
var voyATener80ElAno = miAnoDeNacimiento + meGustariaTener80Anos;
console.log(voyATener80ElAno);

//C
var costoDeUnaTele = 10000;
var ahorros = 9000;
var dineroQueMeFalta = costoDeUnaTele - ahorros;
console.log(dineroQueMeFalta);

//D
var diasPorAno = 365;
var cantidadDeAnosEnUnaDecada = 10;
var cantidadDeDiasEnUnaDecada = diasPorAno * cantidadDeAnosEnUnaDecada;
console.log(cantidadDeDiasEnUnaDecada);

//E
var porcionesPorPizza = 8;
var porcionesQueTengo = 24;
var cuantasPizzasTengo = porcionesQueTengo / porcionesPorPizza;
console.log(cuantasPizzasTengo);

//F
var miAnimalFavorito = 'oso panda';
console.log(miAnimalFavorito == 'perro');

//G
console.log('flan' != 'flan con dulce de leche');

//H
var soyMayorDeEdad = 20;
console.log(soyMayorDeEdad > 18);

//I
var soyMenorDe25 = soyMayorDeEdad < 25;
console.log(soyMenorDe25);

//J
var estamosEnEnero = 'septiembre' === 'enero';
console.log(estamosEnEnero);

//K
var noEstamosEnEnero = 'septiembre' !== 'enero';
console.log(noEstamosEnEnero);
				
//L
var miNotaEnElParcial = 8;
var notaMinimaParaAprobar = 6;
var estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;
console.log(estoyAprobado);	

//M
var esHoraDeAlmorzar = 10 <= 12;
console.log(esHoraDeAlmorzar);

// 5
//A
var ganeLaCarrera = false;

if(ganeLaCarrera == true){
	console.log('Ganaste!');
}else{
	console.log('Perdiste!');
}

//B
var posicionEnLaCarrera = 6;

if(posicionEnLaCarrera == 1){
	console.log('Felicitaciones, saliste primero!');
}else if(posicionEnLaCarrera == 2){
	console.log('Te falto poquito para ganar');
}else if(posicionEnLaCarrera == 3){
	console.log('Sos un orgullo para tu familia');
}else if(posicionEnLaCarrera > 3){
	console.log('Volve a tu casa');
}else{
	console.log('No tires fruta');
}

//PARCIAL

//A
var notaJuan = 7;
var notaPedro = 7;

if(notaJuan > notaPedro){
	console.log(notaJuan);
}else if(notaPedro > notaJuan){
	console.log(notaPedro);
}else if(notaJuan == notaJuan){
	console.log('Ambos tuvieron la misma nota');
}	

//B
var montoCompra = 200;

if(montoCompra > 100){
	var descuento = (montoCompra * 15) / 100;
	var montoFinal = montoCompra - descuento;
	console.log(montoFinal);
}else{
	console.log(montoCompra);
}

//6

//A
var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

var mesDeMiCumpleanos = meses[6];

console.log(mesDeMiCumpleanos);

//B
var planetas = [
    'Mercurio',
    'Venus',
    'Tierra',
    'Marte',
    'Saturno',
    'Jupiter',
    'Urano',
    'Neptuno',
    'Plutón'
];
 console.log(meses.length);
 console.log(planetas.length);

console.log(meses.length - 1);
console.log(planetas.length -1);

console.log(planetas[3]);

//C
var nombres = ['Sofía', 'Abril'];
var apellidos = ['Rodriguez', 'López'];

console.log(nombres[0]);
console.log(apellidos[0]);

var nombreCompleto = nombres[1] + ' ' + apellidos[0];
console.log(nombreCompleto);

//D
var corredores = [
    'Margarita',
    'Juan',
    'Raquel',
    'Ezequiel',
    'Gonzalo',
    'Martina',
    'Julian'
];

console.log(corredores[0]);
console.log(corredores[1]);
console.log(corredores[2]);

losUltimos = [corredores[corredores.length - 1], corredores[corredores.length - 2]];

console.log(losUltimos);
