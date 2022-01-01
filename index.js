//https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm

// #######################
// # Numberic separators #
// #######################

// A billion.
let amount = 1_000_000_000;
console.log(amount);

// Hundreds of millions.
amount = 1_475_938.38;
console.log(amount);

// 6234500 cents (62345 dollars).
amount = 62345_00;
console.log(amount);

// 1,734,500.
amount = 1_734_500;
console.log(amount);

// 20^30000.
amount = 2e30_000;
console.log(amount);

// Also can be used for Binary, Hex, Octal bases.

// #############################
// # String.protype.replaceAll #
// #############################

// Old:
let message = 'hello+this+is+a+message';
let messageWithSpace = message.replace(/\+/g, ' ');
console.log(messageWithSpace);
// hello this is a message
// New:
message = 'hello+this+is+a+message';
messageWithSpace = message.replaceAll('+', ' ');
// hello this is a message
console.log(messageWithSpace);

// ###############################
// # Logical assignment operator #
// ###############################

// And & Equals (&&=)
// Old:
let a = 1;
if (a) {
    a = 8;
}
console.log(a);
// New:
a = 1;
a &&= 3
console.log(a);
a &&= 4;
console.log(a);
let b = a &&= 5;
console.log(b);
let c = null;
let d = c &&= 6;
console.log(d);
let e = undefined;
let f = e &&= 7;
console.log(f);
let g = '';
let h = g &&= 8;
console.log(h);

// OR & Equals (||=)
// Old:
let i = undefined;
if (!i) {
    i = 5;
}
console.log(i);
i = i || 3;
console.log(i);
// New:
let j = 0;
j ||= 3
console.log(j);
let k = 6;
k ||= 3;
console.log(k);
let o = null;
o ||= 3;
console.log(o);
let n = undefined;
n ||= 12;
console.log(n);
let m = '';
m ||= 4;
console.log(m);

// Nullish Coalescing & Equals (??=)
let r = undefined;
r ??= 7;
console.log(r);
let y = null;
y ??= 8;
console.log(y);
let x = 12;
x ??= 8 ? y : r;
console.log(x);
let w = 9;
w ??= 45;
console.log(w);

// ######################
// # Promise.any method #
// ######################

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 3000);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello world'), 4000);
});

(async () => {
    try {
        const first = await Promise.any([
            promise1, promise2, promise3
        ]);
        console.log(first);
        // Any of the promises was fulfilled.
    } catch (error) {
        console.log(error);
        // AggregateError: All promises were rejected
    }
    try {
        const first = await Promise.any([
            promise1, promise2, promise3, promise4
        ]);
        console.log(first);
        // Any of the promises was fulfilled.
    } catch (error) {
        console.log(error);
        // AggregateError: All promises were rejected
    }
})();

// #########################
// # Private class methods #
// #########################

class Test1 {
    addTestRunnerPublic(testRunner) {
        this.testRunner = testRunner;
    }

    #addTestRunnerPrivate(testRunner) {
        this.testRunner = testRunner;
    }
}

const test1 = new Test1();
test1.addTestRunnerPublic({ name: 'test1' });
console.log(test1.testRunner);
try {
    test1.addTestRunnerPrivate({ name: 'test2' });
}
catch (error) {
    console.log(error);
}

// ###############################
// # Private Getters and setters #
// ###############################

class Test2 {
    name2() {
        return 'test is public';
    }

    get #name() {
        return 'test is private';
    }
}

const test2 = new Test2();
console.log(test2.name2());
try {
    console.log(test2.name());
} catch (error) {
    console.log(error);
}

// ###########
// # WeakRef #
// ###########

// Old:
const ref = { x: 42, y: 51 };
// New:
const objectExample = { name: "Juanito", lastname: "Jordan" };
const refObj = new WeakRef(objectExample);
const obj = refObj.deref();
console.log(obj.name);

// ##############
// # Finalizers #
// ##############

const registry = new FinalizationRegistry(value => {
    // Do some stuff
});
registry.register({ greeting: "Hello World" }, "greetingObject");