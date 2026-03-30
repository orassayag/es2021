# ES2021 - ECMAScript 2021 Features with Examples

A comprehensive demonstration of new features introduced in ECMAScript 2021 (ES12) with practical, runnable code examples.

Built in 2021-2026. This educational JavaScript project showcases all major ES2021 features including numeric separators, String.replaceAll(), logical assignment operators, Promise.any(), private class methods, WeakRef, and FinalizationRegistry.

## Features

- 🔢 **Numeric Separators** - Enhanced readability for large numbers
- 🔄 **String.replaceAll()** - Simple string replacement without regex
- ⚡ **Logical Assignment Operators** - Concise conditional assignments (&&=, ||=, ??=)
- ⏱️ **Promise.any()** - First-fulfilled promise handling
- 🔒 **Private Class Methods** - True method encapsulation with # syntax
- 🎯 **Private Getters/Setters** - Private accessors for class properties
- 💾 **WeakRef** - Weak object references for better memory management
- 🧹 **FinalizationRegistry** - Cleanup callbacks for garbage collection

## Getting Started

### Prerequisites

- Node.js (v16.13.1 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/orassayag/es2021.git
cd es2021
```

2. Install dependencies:
```bash
npm install
```

### Running the Examples

Execute all ES2021 feature demonstrations:
```bash
npm start
```

This will run through all examples in `index.js` and display their output in the console.

## ES2021 Features Explained

### 1. Numeric Separators

Make large numbers more readable using underscores as visual separators:

```javascript
let billion = 1_000_000_000;
let price = 1_475_938.38;
let hex = 0xFF_FF_FF;
```

### 2. String.prototype.replaceAll()

Replace all occurrences without regex:

```javascript
// Old way
let result = 'hello+world+test'.replace(/\+/g, ' ');

// New way
let result = 'hello+world+test'.replaceAll('+', ' ');
```

### 3. Logical Assignment Operators

Combine logical operations with assignment:

```javascript
// AND assignment (&&=)
x &&= 5;  // Assigns only if x is truthy

// OR assignment (||=)
y ||= 10;  // Assigns only if y is falsy

// Nullish coalescing assignment (??=)
z ??= 20;  // Assigns only if z is null or undefined
```

### 4. Promise.any()

Returns when the first promise fulfills:

```javascript
const first = await Promise.any([
  fetchFromAPI1(),
  fetchFromAPI2(),
  fetchFromAPI3()
]);
// Returns the first successful result
```

### 5. Private Class Methods

True method privacy using # prefix:

```javascript
class Database {
  #connect() {
    // Private method - cannot be called outside class
  }
  
  query() {
    this.#connect();  // Can be called internally
  }
}
```

### 6. Private Getters and Setters

Private accessors for class properties:

```javascript
class User {
  #password;
  
  get #hashedPassword() {
    return hash(this.#password);
  }
  
  set #hashedPassword(value) {
    this.#password = value;
  }
}
```

### 7. WeakRef

Create weak references that don't prevent garbage collection:

```javascript
const cache = new WeakRef(largeObject);
const obj = cache.deref();  // Get object if still alive
```

### 8. FinalizationRegistry

Execute cleanup when objects are garbage collected:

```javascript
const registry = new FinalizationRegistry(value => {
  console.log(`Cleaning up: ${value}`);
});

registry.register(myObject, "resource-id");
```

## Architecture

```mermaid
graph TD
    A[index.js] --> B[Numeric Separators]
    A --> C[String.replaceAll]
    A --> D[Logical Assignment Operators]
    A --> E[Promise.any]
    A --> F[Private Class Methods]
    A --> G[Private Getters/Setters]
    A --> H[WeakRef]
    A --> I[FinalizationRegistry]
    
    D --> D1[&&= AND Assignment]
    D --> D2[||= OR Assignment]
    D --> D3[??= Nullish Assignment]
    
    F --> F1[Private Methods]
    F --> F2[Public Methods]
    
    style A fill:#4CAF50
    style B fill:#2196F3
    style C fill:#2196F3
    style D fill:#FF9800
    style E fill:#2196F3
    style F fill:#9C27B0
    style G fill:#9C27B0
    style H fill:#E91E63
    style I fill:#E91E63
```

## Project Structure

```
es2021/
├── index.js           # Main file with all ES2021 examples
├── package.json       # Project configuration
├── package-lock.json  # Dependency lock file
├── README.md          # This file
├── INSTRUCTIONS.md    # Detailed usage instructions
├── CONTRIBUTING.md    # Contribution guidelines
└── LICENSE           # MIT license
```

## Browser/Environment Compatibility

| Environment | Version | Support |
|------------|---------|---------|
| Node.js | 16.13.1+ | ✅ Full |
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14.1+ | ✅ Full |
| Edge | 90+ | ✅ Full |

## Use Cases

- **Numeric Separators**: Financial calculations, large datasets, binary/hex values
- **replaceAll()**: Text processing, data sanitization, template engines
- **Logical Assignment**: State management, default values, configuration
- **Promise.any()**: Redundant API calls, fastest response selection
- **Private Methods**: Encapsulation, hiding implementation details
- **WeakRef**: Caching, memory-sensitive data structures
- **FinalizationRegistry**: Resource cleanup, connection management

## Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute. Contributing doesn't just mean submitting pull requests—there are many different ways to get involved, including answering questions and reporting issues.

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT license - see the [LICENSE](LICENSE) file for details.

## Credits

Original blog post inspiration: [New JavaScript Features - ECMAScript 2021 with Examples](https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm) by Brayan Arrieta
