/* Задание 1.

Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/

const person = {
    name:'Ivan',
    surname: 'Ivanov',
    city: 'Piter',
}

const student = Object.create(person);
student.age = 25;
student.city = 'Omsk';


function objKeys (obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(`${key}:'${obj[key]}'`);
        }
    }
}

objKeys (student)

/*-------------------------------------------------------------------------------------------------------------------------------------*/


/* Задание 2.

Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function isInObj (str, obj) {
   return obj.hasOwnProperty(str) ? true: false;
}

console.log(isInObj ('city', student))

/*-------------------------------------------------------------------------------------------------------------------------------------*/

/* Задание 3.

Напишите функцию, которая создает пустой объект, но без прототипа.*/


function ojNoProto () {
    const emptyObject = Object.create(null);
    return emptyObject;
}

console.log(ojNoProto())

/*---------------------------------------------------------------------------------------------------------------------------------------*/

//Задание 4. 

// Implementation on prototypes

// Родительская функция с методами, которая включают/выключают прибор из розетки.
      function DeviceOnOff (name, color) {
    this.name = name;
    this.color = color;
    this.type = 'ElectroDevice';
}

DeviceOnOff.prototype.deviceOn = function(totalTime){ // total usage time
    (totalTime * this.power) < 1000 ? console.log(`${this.name} is On, Power consumption ${totalTime * this.power} W/h`): console.log(`${this.name} is On, Power consumption ${totalTime * this.power/ 1000} kW/h`);
    this.start = true;
}

DeviceOnOff.prototype.deviceOff = function() {
    console.log(`${this.name} is Off, Power consumption 0 kW/h`);
}


// Делегирующая связь Prototype
FlatIron.prototype = new DeviceOnOff ();

// Функция прибор FlatIron
function FlatIron (name, color, power){
    this.name = name;
    this.color = color;
    this.power = power;
    this.voltage = 'Power Supply Voltage 240V AC';
}

// Собственныей метод
FlatIron.prototype.powerSwitch = function (toggle){
    if(toggle === 1) {
        this.power = (this.power / 3).toFixed(2);
    } 
    else if (toggle === 2) {
        this.power = (this.power / 2).toFixed(2); 
    }
}
 
// Делегирующая связь Prototype
    Laptop.prototype = new FlatIron ();

// Функция прибор Laptop
    function Laptop (name, color, power, cpu){
    this.name = name;
    this.color = color;
    this.power = power;
    this.start = false;
    this.cpu = `${cpu} MHz`;
}

// Собственныей метод
    Laptop.prototype.laptopStart = function () {
    if(this.start) {
        console.log ('Laptop started')
    }
}

// Экземпляры приборов.
const flatIron = new FlatIron('Flat-Iron', 'Blue', 3000);
const laptop = new Laptop ('Laptop', 'Green', 90, 2500)
const lampe = new FlatIron('Lampe', 'Yellow', 60);


flatIron.powerSwitch(1);
flatIron.deviceOn(1);
console.log(flatIron.voltage);

console.log('----');

laptop.deviceOn(1);
laptop.laptopStart(); // laptop to Start
console.log(laptop.voltage);

console.log('----');

lampe.powerSwitch(1);
lampe.deviceOn(1);
console.log(lampe.voltage);
 


/*----------------------------------------------------------------------------------------*/

//Задание 5. 

// Implementation on Classes

/* class DeviceOnOff {
    constructor (name, color) {
        this.name =  name
        this.color = color
    }

    deviceOn (totalTime){ // total usage time
        return (totalTime * this.power) < 1000 ? `${this.name} is On, Power consumption ${totalTime * this.power} W/h`: `${this.name} is On, Power consumption ${totalTime * this.power/ 1000} kW/h`;
        }
    
    deviceOff () {
            return `${this.name} is Off, Power consumption 0 W/h`;
        }
}

class Device extends DeviceOnOff {
    constructor(name, color, powerMax){
        super(name, color)
        this.power = powerMax 
    }

    powerSwitch (toggle){
        if(toggle === 1) {
            this.power = (this.power / 3).toFixed(2); // W
        } 
        else if (toggle === 2) {
            this.power = (this.power / 2).toFixed(2); // W
        }
    }

}

class Computer extends Device {
    constructor (name, color, powerMax, cpu){
        super(name, color, powerMax)
        this.cpu = `${cpu} MHz`
    }
}

const iron = new Device ('Iron', 'green', 3000);
iron.powerSwitch(1);
console.log(iron.deviceOff());

const lampe = new Device('Lampe', 'Yellow', 60);
lampe.powerSwitch(2);
console.log(lampe.deviceOn(1));

const pc = new Computer  ('Dell', 'silber', 90, 2500);
console.log(pc.deviceOn(5), pc.cpu) */

