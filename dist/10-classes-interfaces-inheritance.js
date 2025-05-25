"use strict";
class Vehicle {
    drive() {
        return 'This vehicle drives!';
    }
}
class TeslaX extends Vehicle {
    connectToBluetooth() {
        return true;
    }
    navigate() {
        return true;
    }
}
const t1 = new TeslaX();
class IPhone16 {
    connectToBluetooth() {
        return true;
    }
    navigate() {
        return true;
    }
    takesPhoto() {
        console.log('IPhone16 takes photo!');
    }
    recordVideo() {
        console.log('IPhone16 records video!');
    }
}
