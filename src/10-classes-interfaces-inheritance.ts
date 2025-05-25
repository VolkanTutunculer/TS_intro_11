interface Bluetooth {
  connectToBluetooth: () => boolean
}

interface GPS {
  navigate: () => boolean
}

interface CarPlay {
  hasCarPlay: () => boolean
}

interface Drivable {
  drive: () => string
}

interface Camera {
  takesPhoto: () => void
  recordVideo: () => void
}

class Vehicle implements Drivable {
  drive() {
    return 'This vehicle drives!';
  }
}

class TeslaX extends Vehicle implements GPS, Bluetooth {
  connectToBluetooth() {
    return true;
  }

  navigate() {
    return true;
  }
}

const t1 = new TeslaX();



class IPhone16 implements Bluetooth, GPS, Camera {
  connectToBluetooth() {
    return true;
  }

  navigate(){
    return true;
  }

  takesPhoto(){
    console.log('IPhone16 takes photo!');
  }

  recordVideo() {
    console.log('IPhone16 records video!');
  }
  
}