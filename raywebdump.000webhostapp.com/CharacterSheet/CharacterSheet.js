const input_nomepersonaggio = document.getElementById("nome_personaggio");
//Caratteristiche
const input_for = document.getElementById('for');
const output_bonusfor = document.getElementById('bonus_forza');
let bonusfor = 0;
let bonusdes = 0;
let bonuscos = 0;
let bonusint = 0;
let bonussag = 0;
let bonuscar = 0;
//Abilita
const input_puntiacrobazia = document.getElementById("punti_acrobazia");
const input_variacrobazia = document.getElementById("vari_acrobazia");
const input_classeacrobazia = document.getElementById("classe_acrobazia");
const output_totacrobazia = document.getElementById("tot_acrobazia");
//Carico trasportabile
const output_caricoleggero = document.getElementById("carico_leggero");
const output_caricomedio = document.getElementById("carico_medio");
const output_caricopesante = document.getElementById("carico_pesante");
const output_caricosollevare = document.getElementById("carico_sollevare");
const output_caricotrascinare = document.getElementById("carico_trascinare");
//Classe armatura
const output_catot = document.getElementById("ca_tot");
const output_cacontatto = document.getElementById("ca_contatto");
const output_caimpreparato = document.getElementById("ca_impreparato");
const output_cades = document.getElementById("ca_des");
const input_caarmatura = document.getElementById("ca_armatura");
const input_cascudo = document.getElementById("ca_scudo");
const input_cataglia = document.getElementById("ca_taglia");
const input_cavari = document.getElementById("ca_vari");
//Attacchi

//Lotta

//Iniziativa
const output_iniziativatot = document.getElementById("iniziativa_tot");
const input_iniziativavari = document.getElementById("iniziativa_vari");
//Tiri salvezza
	//tempra
const output_tempratot = document.getElementById("tempra_tot");
const input_tempraclasse = document.getElementById("tempra_classe");
const output_tempracaratteristica = document.getElementById("tempra_caratteristica");
const input_tempravari = document.getElementById("tempra_vari");
	//riflessi
const output_riflessitot = document.getElementById("riflessi_tot");
const input_riflessiclasse = document.getElementById("riflessi_classe");
const output_riflessicaratteristica = document.getElementById("riflessi_caratteristica");
const input_riflessivari = document.getElementById("riflessi_vari");
	//volonta
const output_volontatot = document.getElementById("volonta_tot");
const input_volontaclasse = document.getElementById("volonta_classe");
const output_volontacaratteristica = document.getElementById("volonta_caratteristica");
const input_volontavari = document.getElementById("volonta_vari");
//Velocita
const output_velocitaq = document.getElementById("velocitaq");
const input_velocita = document.getElementById("velocita");
//Bottoni
const button_update = document.getElementById("updatebutton");


//Event listeners
button_update.addEventListener('click', update);

//Functions
function update (){//Set the name of the character as title of the page
	if (input_nomepersonaggio.value){
		document.title = input_nomepersonaggio.value;
	}else{
		document.title = 'D&D character sheet';
	}
	
	update_caratteristiche();
	update_abilita();
	//update_carico();
	update_ca();
	update_iniziativa();
	update_velocita();
	update_salvezza();
}
function update_caratteristiche(){
	bonusfor = Math.floor( (input_for.value / 2) - 5);
	output_bonusfor.value = bonusfor;
	(bonusfor > 0)? output_bonusfor.value = "+" + bonusfor : output_bonusfor.value = bonusfor; //display the + if it is a bonus, a - if it's a malus
}
function update_abilita(){
	let temp1 = 0;
	//acrobazia
	if (!input_puntiacrobazia.value){input_puntiacrobazia.value=0;}
	if (!input_variacrobazia.value){input_variacrobazia.value=0;}
	if (input_classeacrobazia.checked){ //if the ability is class-based
		temp1 = bonusfor + parseInt(input_puntiacrobazia.value) + parseInt(input_variacrobazia.value);  
		(temp1 > 0)? output_totacrobazia.value = '+' + temp1 : output_totacrobazia.value = temp1; //display the + if it is a bonus, a - if it's a malus
	} else { //otherwise, if it's not class-based, only take half points
		temp1 = Math.floor ( bonusfor + ( parseInt(input_puntiacrobazia.value) /2 ) + parseInt(input_variacrobazia.value));  
		(temp1 > 0)? output_totacrobazia.value = '+' + temp1 : output_totacrobazia.value = temp1; 
	}
}
function update_ca(){
	let catot = 10, cacontatto = 10, caimpreparato = 10;
	let caarmatura, cascudo, cataglia, cavari;
	
	(input_caarmatura.value)? caarmatura=input_caarmatura.value : caarmatura = 0;
	(input_cascudo.value)? cascudo = input_cascudo.value : cascudo = 0;
	(input_cataglia.value)? cataglia = input_cataglia.value : cataglia = 0;
	(input_cavari.value)? cavari = input_cavari.value : cavari = 0;

	output_catot.value = 10 + +caarmatura + +bonusdes + +cascudo + +cataglia + +cavari;
	output_cacontatto.value = 10 + +bonusdes + +cataglia + +cavari;
	output_caimpreparato.value = 10 + +caarmatura + +cascudo + +cataglia + +cavari;
}
function update_iniziativa(){
	(iniziativa_vari.value)? output_iniziativatot.value = +iniziativa_vari.value + +bonusdes : output_iniziativatot.value = +bonusdes;
}
function update_velocita(){
	let velocita = 9;
	if (input_velocita.value) velocita = input_velocita.value;
	if ( (velocita % 1.5) != 0){
		velocita = 9;
		input_velocita.value = 9;
	}
	output_velocitaq.value = ' = ' + (velocita / 1.5) + ' quadretti' ;	
}
function update_salvezza(){
	//tempra
	if (!input_tempraclasse.value){input_tempraclasse.value = 0}
	if (!input_tempravari.value){input_tempravari.value = 0}
	output_tempratot.value = +input_tempraclasse.value + bonuscos + +input_tempravari.value;
	output_tempracaratteristica.value = bonuscos;
	//riflessi
	if (!input_riflessiclasse.value){input_riflessiclasse.value = 0}
	if (!input_riflessivari.value){input_riflessivari.value = 0}
	output_riflessitot.value = +input_riflessiclasse.value + bonusdes + +input_riflessivari.value;
	output_riflessicaratteristica.value = bonusdes;
	//volonta
	if (!input_volontaclasse.value){input_volontaclasse.value = 0}
	if (!input_volontavari.value){input_volontavari.value = 0}
	output_volontatot.value = +input_volontaclasse.value + bonussag + +input_volontavari.value;
	output_volontacaratteristica.value = bonussag;
}
function update_carico(){
	let temp1 = 0;
	
	switch (input_for.value){
		case 1:
			temp1 = 1.5; 
/*		case 2:
			temp1 = ;
		case 3:
			temp1 = ;
		case 4:
			temp1 = ;
		case 5:
			temp1 = ;
		case 6:
			temp1 = ;
		case 7:
			temp1 = ;
		case 8:
			temp1 = ;
		case 9:
			temp1 = ;
		case 10:
			temp1 = ;
		case 11:
			temp1 = ;
		case 12:
			temp1 = ;
		case 13:
			temp1 = ;
		case 14:
			temp1 = ;
		case 15:
			temp1 = ;
		case 16:
			temp1 = ;
		case 17:
			temp1 = ;
		case 18:
			temp1 = ;
		case 19:
			temp1 = ;
		case 20:
			temp1 = ;
		case 21:
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
		case :
			temp1 = ;
			*/
		
		default:
			temp1 = 999;
	}
	output_caricoleggero.value = temp1;
	output_caricomedio.value = temp1 * 2;
	output_caricopesante.value = temp1 * 3;
	output_caricosollevare.value = temp1 * 3;
	output_caricotrascinare.value = temp1 * 5;
}