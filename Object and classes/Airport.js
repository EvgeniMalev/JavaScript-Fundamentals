/** Note: An object airline with the name of the plane and other components */ 

function objecttwo(planename, terminal, company, destination, passengers) {
    let airline = {
        planename: planename,
        terminal: terminal,
        company: company,
        destination: destination,
        passengers: passengers,
        calc1: function() {
            return 'Return to the main runway';
        },
        calc2: function() {
            return 'Call to the air traffic controller';
        }
    };


    console.log("Plane:", airline.planename);
    console.log("Terminal:", airline.terminal);
    console.log("Destination:", airline.destination);
}

objecttwo('TU 144', 'Terminal 2', 'Delta Airlines', 'Moscow', 350);
objecttwo('Boeing 747', 'Terminal 1', 'Delta Airlines', 'New York', 250);
objecttwo('Airbus A320', 'Terminal 4', 'Bulgaria Airlines', 'Paris', 350);
