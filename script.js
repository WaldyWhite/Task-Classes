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
    constructor (name, color) {
        this.name =  name
        this.color = color
    }

    deviceOn (totalTime){ // total usage time
        return `${this.name} is On, Power consumption ${totalTime * this.power} W/h`;
        }
    
    deviceOff () {
            return `${this.name} is Off, Power consumption 0 W/h`;
        }
}

class Device extends DeviceOnOff{
    constructor(name, color, powerMax, cpu){
        super(name, color)
        this.power = powerMax // W
        this.cpu = cpu
    }
    powerSwitch (toggle){
        if(toggle === 1) {
            this.power = `${(this.power / 3).toFixed(2)} W/h`;// W
        } 
        else if (toggle === 2) {
            this.power = (this.power / 2).toFixed(2);// W
        }
    }

}


const iron = new Device ('Iron', 'green', 3000);
iron.powerSwitch(1);
console.log(iron.deviceOn(10));

const lampe = new Device('Lampe', 'Yellow', 60);
lampe.powerSwitch();
console.log(lampe.deviceOff());

const pc = new Device ('Dell', 'silber', 90, 2500);
console.log(pc.cpu)

