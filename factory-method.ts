// Product interface
interface Product {
  operation(): string,
}

// creator class
abstract class Creator {

  // may have default implementation...
  public abstract factoryMethod(): Product

  //may contain core business logic using classes returned by factory method
  public someOperation(): string {
    const product = this.factoryMethod();

    // use product
    return `someOperation method on creator was called: ${product.operation()}`
  }
}

// --------------- Product 1 -------------------

class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'operation() called on Product 1';
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

// -------------- Product 2 -------------------

class ConcreteProduct2 implements Product {
  public operation(): string {
    return 'operation() called on Product 2';
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

// -------------- Client Code -----------------
function clientFunction(product: Creator) {
  console.log(product.someOperation());
}

console.log('App: launched with Creator1');
clientFunction(new ConcreteCreator1());

console.log('App: launched with Creator2');
clientFunction(new ConcreteCreator2());
