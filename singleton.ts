class Singleton {
  static #instance: Singleton

  private constructor() {}

  public static get instance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }

    return Singleton.#instance;
  }
}

function clientFunction() {
  const s1 = Singleton.instance;
  const s2 = Singleton.instance;

  if (s1 === s2) {
    console.log('It is singleton!');
    return;
  }

  console.log('It is not singleton');
}

clientFunction();
