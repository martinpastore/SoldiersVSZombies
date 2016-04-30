/*Desarrollar un videojuego por consola con 10 zombies y 10 soldados, cada uno con 40 Puntos de Ataque
y 20 Puntos de Defensa, desarrollar un metodo para atacar a los zombies y que devuelva como resultado
el ganador y la cantidad restante de soldados y zombies vivos.*/ 
var game = function(){
	this.zombie = [];
	this.soldier = [];



game.prototype.start = function(){
	var soldier = function(ap, dp){
		this.ap = ap;
		this.dp = dp;
	}
	var zombie = function(ap, dp){
		this.ap = ap;
		this.dp = dp;
	}

	var sol = [];
	for (var i = 0; i < 10; i++) {
		sol[i] = new soldier(Math.round(Math.random()*40), Math.round(Math.random()*20));
		this.soldier.push(sol[i]);
	};	

	var zom = [];
	for (var i = 0; i < 10; i++) {
		zom[i] = new zombie(Math.round(Math.random()*40), Math.round(Math.random()*20));
		this.zombie.push(zom[i]);
	 };	 
	 console.log(zom);
	 console.log(sol);
}

	game.prototype.attack = function(){
		for (var i = 0; i < this.soldier.length; i++) {
			if(this.soldier[i].ap > this.zombie[i].dp && this.soldier[i].dp > this.zombie[i].ap){
				this.zombie.splice(i, 1);
			}else if(this.soldier[i].ap < this.zombie[i].dp && this.soldier[i].dp < this.zombie[i].ap){
				this.soldier.splice(i, 1);
			}else{
				this.soldier.splice(i, 1);
				this.zombie.splice(i, 1);
			}
		};
		console.log(this.zombie, this.soldier);
	}

	game.prototype.winner = function(){
		if(this.soldier.length === 0){
			return "Zombies win";
		}else if(this.zombie.length === 0){
			return "Soldiers win";
		}else{
			return "There are people alive in the both teams";
		}
	}
}
	


var g = new game();
