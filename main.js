/*
 ! Завдання: Реалізація Функції з Каруванням для Послідовного Додавання Трьох Чисел
*/

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Приклад використання
// const addFirst = curriedAdd(1);
// const addSecond = addFirst(2);
// const result = addSecond(3);
// console.log("Result:", result);

export { curriedAdd };

/*
 ! Завдання: Реалізація Функції з Каруванням для Побудови Повного Доменного Імені
*/

function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return protocol + "://" + domainName + "." + tld;
    };
  };
}

// Приклад використання
// const protocolSetter = curriedDomain("https");
// const domainNameSetter = protocolSetter("example");
// const fullDomain = domainNameSetter("com");
// console.log("Full Domain:", fullDomain);

export { curriedDomain };

/*
 ! Завдання: Розробка Вищої Функції для Модифікації Поведінки Іншої Функції
*/

function originalFunction(num) {
  return num * num;
}

function modifyFunction(originalFunc, multiplier) {
  return function (value) {
    return originalFunc(value) * multiplier;
  };
}

// Приклад використання
// const modifiedFunc = modifyFunction(originalFunction, 3);
// console.log("Original function output for 4:", originalFunction(4));
// console.log("Modified function output for 4:", modifiedFunc(4));

export { originalFunction, modifyFunction };

/*
 ! Завдання: Розробка Функції Трирівневої Вкладеності в JavaScript з Конкретною Операцією
*/

function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3;
    }
    return deepInnerFunction;
  }
  return innerFunction;
}

// Приклад використання
// const multiplyResult = outerFunction(2)(3)(4);
// console.log(multiplyResult);

export { outerFunction };
