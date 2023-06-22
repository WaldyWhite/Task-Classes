// Implementation on prototypes

/* function ElectroDevice () {
    this.type = 'elektro';
}

ElectroDevice.prototype.deviceOn = function(totalTime){ // total usage time
    console.log(`${this.name} is On, Power consumption ${totalTime *this.power} kW/h`);
}

ElectroDevice.prototype.deviceOff = function() {
    console.log(`${this.name} is Off, Power consumption 0 kW/h`);
}

function FlatIron (){
    this.name = 'Flatiron - Super Steamer';
    this.color = 'blue';
    this.power = 3; // kW
}

function Lampe (){
    this.name = 'Lampe - Yellow Light';
    this.light = 'yellow';
    this.power = 0.06; // kW
}

FlatIron.prototype = new ElectroDevice();
Lampe.prototype = new ElectroDevice();

const flatIron = new FlatIron();
flatIron.deviceOn(2.5);

const lampe = new Lampe();
lampe.deviceOff(); */

/*----------------------------------------------------------------------------------------*/

// Implementation on Classes

class DeviceOnOff {
    constructor () {
        }

    deviceOn (totalTime){ // total usage time
        return `${this.name} is On, Power consumption ${totalTime * this.power} W/h`;
        }
    
    deviceOff () {
            return `${this.name} is Off, Power consumption 0 W/h`;
        }
}

class Iron extends DeviceOnOff{
    constructor(){
        super(),
        this.name = 'Iron - Super Steamer',
        this.color = 'blue',
        this.power = 3000 // W
    }
    powerSwitch (toggle){
        if(toggle === 1) {
            this.power = 1000;// W
        } 
        else if (toggle === 2) {
            this.power = 2000;// W
        }
    }

}

class Lampe extends DeviceOnOff{
    constructor(){
        super(),
        this.name = 'Lampe - Yellow Ligh',
        this.light = 'yellow',
        this.power = 60 // W
    }
    powerSwitch (toggle){
        if(toggle === 1) {
            this.power = 20;
        } 
        else if (toggle === 2) {
            this.power = 40;
        }
    }
}


const iron = new Iron ();
iron.powerSwitch();
console.log(iron.deviceOn(0.5));

const lampe = new Lampe();
lampe.powerSwitch();
console.log(lampe.deviceOff());

