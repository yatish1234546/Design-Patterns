function Fedex() {
  this.calculate = package => {
    return 2.5;
  };
}

function UPS() {
  this.calculate = package => {
    return 2.25;
  };
}

function Maersk() {
  this.calculate = package => {
    return 3;
  };
}

function Shipping() {
  this.company = null;

  this.setStrategy = company => (this.company = company);

  this.calculate = package => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const maersk = new Maersk();
const package = { from: "Miami", to: "Chicago", weight: 150 };
const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log(shipping.calculate(package));
shipping.setStrategy(ups);
console.log(shipping.calculate(package));
shipping.setStrategy(maersk);
console.log(shipping.calculate(package));
