var Desicion = prompt("Piedra, papel o tijera?");
        if (! Desicion) {
            document.write("<p>Intentalo de nuevo ewe</p>");
        } else {
            document.write("<p>Jugador:" + " " + Desicion + "</p>");
        }
        var DecisionPC = Math.random();
        if (DecisionPC < 0.34) {
            DecisionPC = "piedra";
        } else if(DecisionPC <= 0.67) {
            DecisionPC = "papel";
        } else {
            DecisionPC = "tijera";
        }
        document.write("<p>Computadora:" + " " + DecisionPC + "</p>");
        var compare = function(Decision1,Decision2) {
            if (Decision1 === Decision2) {
                return "Empate :/";
            }
            if (Decision1 === "piedra") {
                if (Decision2 === "tijera") {
                    // Si piedra gana
                    return "Ganaste :D";
                } else {
                    // Si papel gana
                    return "Perdiste :c";
                }
            }
            if (Decision1 === "papel") {
                if (Decision2 === "piedra") {
                    // Si papel gana
                    return "Ganaste :D";
                } else {
                    // Si tijera gana
                    return "Perdiste :c";
                }
            }
            if (Decision1 === "tijera") {
                if (Decision2 === "piedra") {
                    // Si piedra gana
                    return "Perdiste :c";
                } else {
                    // Si tijera gana
                    return "Ganaste :D";
                }
            }
        };
        var resultado = compare(Desicion,DecisionPC);

        document.write("<br><hr><br>" + resultado);