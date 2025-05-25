abstract class Phone {
  abstract call(): void
  abstract text(): void
}


abstract class Samsung extends Phone {
  getOS(): string {
    return 'Android';
  }
}


class SamsungGalaxyS27 extends Samsung{
  call(): void {
    console.log('Call');
  }

  text(): void {
    console.log('Text');
  }
}

const samsungGalaxyS27Obj: SamsungGalaxyS27 = new SamsungGalaxyS27();