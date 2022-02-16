let entrada = prompt(" Mucho gusto, bienvenida(o) a PIZZARICA ¿cuál es tu nombre? ");
let presentacion = prompt( " tomaré tu pedido " + entrada + "," + " te ofrezco presentación personal; mediano o familar, ¿cuál te gustaria? ");
let porciones = prompt(" Perfecto, te ofrezco: pollo con champiñones; hawaiana; carnes; mexicana; criolla; vegetariana o carne y pollo.  ¿Cuál deseas llevar? :) ");  

// let ingredientes = ("general");
let ingrediente1 = ( "con queso" );
let ingrediente2 = ( "borde con bocadillo" );
let ingrediente3 = ( "con piña" );
let ingrediente4 = ( "con jamon" );
let ingrediente5 = ( "con salami" );
let ingrediente6 = ( "con cabano" );
let ingrediente7 = ( "con nachos" );
let ingrediente8 = ( "con maiz" );
let ingrediente9 = ( "con extra carne molida" );
let ingrediente10 = ( "con adicion de salchichas" );
let ingrediente11 = ( "con adicion de champiñones" );
let ingrediente12 = ( "con salsa" );
let ingrediente13 = ( "con extra guacamole" )


switch(porciones){
    case "pollo con champiñones":
        let ingrediente1 = prompt(" ¿desea con queso o sin queso? ");
        if (ingrediente1 == " con queso ") { 
            alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente1 + ", para servirte " + entrada);
        }
        else {
            let ingrediente12 = prompt(" la deseas con salsa o borde con bocadillo ");
            switch (ingrediente12) {
                case "con salsa":
                    alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente1  + ingrediente12 + ", para servirte " + entrada);
                    break;
                       case "borde con bocadillo":
                       alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente1 + " y " + ingrediente2 + ", para servirte " + entrada );
                        break;
                        case "no":
                            alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente1 + ", para servirte " + entrada);
                            break;}
        }
    }

    switch(porciones){
        case "hawaiana":
            let ingrediente3 = prompt(" ¿desea con piña o sin piña? ");
            if (ingrediente3 == " con piña ") { 
                alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente3 + ", para servirte " + entrada);
            }
            else {
                let ingrediente4 = prompt(" la deseas con jamon o con salami ");
                switch (ingrediente4) {
                    case "con jamon":
                        alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente3 +  ingrediente4 + ", para servirte " + entrada);
                        break;
                           case "con salami":
                           alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente3 + " y " + ingrediente5 + ", para servirte " + entrada );
                            break;
                            case "no":
                                alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente3 + ", para servirte " + entrada);
                                break;}
            }
        }
    

        switch(porciones){
            case "carnes":
                let ingrediente5 = prompt(" ¿desea con salamio o sin salami? ");
                if (ingrediente5 == " con salami ") { 
                    alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente5 + ", para servirte " + entrada);
                }
                else {
                    let ingrediente6 = prompt(" la deseas con cabano o con queso ");
                    switch (ingrediente6) {
                        case "con cabano":
                            alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente5 +  ingrediente6 + ", para servirte " + entrada);
                            break;
                               case "con queso":
                               alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente5 + " y " + ingrediente1 + ", para servirte " + entrada );
                                break;
                                case " no ":
                                    alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente5 + ", para servirte " + entrada);
                                    break;}
                }
            }


            switch(porciones){
                case "mexicana":
                    let ingrediente5 = prompt(" ¿desea con nachos o sin nachos? ");
                    if (ingrediente5 == " con nachos ") { 
                        alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente7 + ", para servirte " + entrada);
                    }
                    else {
                        let ingrediente13 = prompt(" la deseas con extra guacamole o sin extra guacamole ");
                        switch (ingrediente13) {
                            case "con extra guacamole":
                                alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente7 +  ingrediente13 + ", para servirte " + entrada);
                                break;
                                   case "sin extra guacamole":
                                   alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente7  +  ", para servirte " + entrada );
                                    break;
                                    case " no ":
                                        alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente7 + ", para servirte " + entrada);
                                        break;}
                    }
                }


                
            switch(porciones){
                case "criolla":
                    let ingrediente5 = prompt(" ¿desea con maiz o sin maiz? ");
                    if (ingrediente5 == " con maiz ") { 
                        alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente8 + ", para servirte " + entrada);
                    }
                    else {
                        let ingrediente9 = prompt(" la deseas con extra carne molida o con queso ");
                        switch (ingrediente9) {
                            case "con extra carne molida":
                                alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente8 +  ingrediente9 + ", para servirte " + entrada);
                                break;
                                   case "con queso":
                                   alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente8 + " y " + ingrediente1 + ", para servirte " + entrada );
                                    break;
                                    case " no ":
                                        alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente8 + ", para servirte " + entrada);
                                        break;}
                    }
                }

                switch(porciones){
                    case "vegetariana":
                        let ingrediente1 = prompt(" ¿desea con queso o sin queso? ");
                        if (ingrediente1 == " con queso ") { 
                            alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente1 + ", para servirte " + entrada);
                        }
                        else {
                           
                            switch (ingrediente1) {
                                case "sin queso":
                                    alert("  tu pedido es una pizza " + presentacion + " de " + porciones   + ", para servirte " + entrada);
                                    break;
                                   
                                        case " no ":
                                            alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ", para servirte " + entrada);
                                            break;}
                        }
                    }

                    switch(porciones){
                        case "carne y pollo":
                            let ingrediente10 = prompt(" ¿desea con adicion de salchichas o adicion de champiñones? ");
                            if (ingrediente1 == " con adicion de salchichas ") { 
                                alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente10 + ", para servirte " + entrada);
                            }
                            else {
                               
                                switch (ingrediente11) {
                                    case "con adicion de champiñones":
                                        alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente11  + ", para servirte " + entrada);
                                        break;
                                       
                                            case " no ":
                                                alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ", para servirte " + entrada);
                                                break;}
                            }
                        }
