var traficSignals = prompt("Enter the Color of trafic signals");

        if (traficSignals.toLowerCase()==="red"){
            document.write(traficSignals.toLocaleUpperCase + ": Must stop");
        }      
        else if (traficSignals.toLowerCase() ==="yellow"){
            document.write("Ready to move");
        }
        else if (traficSignals.toUpperCase() ==="GREEN") {
            document.write("Move now");
        }
        else{
            document.write("Trafic signals color are only Red , Yellow and Green");
        }

        