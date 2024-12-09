// ---------------- Product A ---------------------------------
interface AbstractProductA { 
  usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'Called usefulFunctionA of product A1';
  }
}

class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'Called usefulFunctionA of Product A2';
  }
}

// ---------------- Product B ---------------------------------
interface AbstractProductB {
  usefulFunctionB(): string;

  collaborateWithA(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'Called usefulFunctionB of Product B1';
  }

  collaborateWithA(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `B1 has collaborated with A:${result}`;
  }
}

class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'Called usefulFunctionB of Product B2';
  }

  collaborateWithA(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `B2 has collaborated with A: ${result}`;
  }
}


// ------------------ Factory ---------------------------------
interface AbstractFactory { 
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}


// Client Code
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.usefulFunctionA());
  console.log(productB.usefulFunctionB());
  console.log(productB.collaborateWithA(productA));
}


console.log('Client - Testing Factory 1');
clientCode(new ConcreteFactory1());

console.log('client - Testing Factory 2');
clientCode(new ConcreteFactory2());
