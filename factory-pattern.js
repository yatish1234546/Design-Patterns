function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

const empFactory = new EmployeeFactory();

const E1 = empFactory.create("Yatish", 1);
const E2 = empFactory.create("Rajesh", 2);
console.log(E2);
