// Implementation on prototypes

/* function ElectroDevice () {
    this.type = 'elektro'
}

ElectroDevice.prototype.deviceOn = function(totalTime){ // total usage time
    console.log(`${this.name} is On, Power consumption ${totalTime *this.power} kW/h`)
}

ElectroDevice.prototype.deviceOff = function() {
    console.log(`${this.name} is Off, Power consumption 0 kW/h`)
}

function FlatIron (){
    this.name = 'Flatiron - Super Steamer'
    this.color = 'blue',
    this.power = 3 // kW
}

function Lampe (){
    this.name = 'Lampe - Yellow Light'
    this.light = 'yellow',
    this.power = 0.06 // kW
}

FlatIron.prototype = new ElectroDevice();
Lampe.prototype = new ElectroDevice();

const flatIron = new FlatIron();
flatIron.deviceOn(0.5);

const lampe = new Lampe();
lampe.deviceOff(); */

/*----------------------------------------------------------------------------------------*/

// Implementation on Classes



class Device {
    constructor () {
        this.name = 'Device'
        this.type = 'Elektro';
        }

    deviceOn (totalTime){ // total usage time
        return `${this.name} is On, Power consumption ${totalTime * this.power} W/h`;
        }
    
    deviceOff () {
            return `${this.name} is Off, Power consumption 0 W/h`;
        }
}

class Iron extends Device{
    constructor(name){
        super(name)
        this.name = 'Iron - Super Steamer'
        this.color = 'blue',
        this.power = 3000 // W
    }
}

class Lampe extends Device{
    constructor(name){
        super(name)
        this.name = 'Lampe - Yellow Ligh',
        this.light = 'yellow',
        this.power = 60 // W
    }
}


const iron = new Iron ()
console.log(iron.deviceOn(0.5))

const lampe = new Lampe();
console.log(lampe.deviceOff())

