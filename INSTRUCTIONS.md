# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Verify Node.js version (16.13.1 or higher):
   ```bash
   node --version
   ```

## Running the Examples

### Run All Examples
Execute all ES2021 feature demonstrations:
```bash
npm start
```

This will run through all the examples in `index.js` and display the output in your console.

## ES2021 Features Covered

### 1. Numeric Separators
Makes large numbers more readable by using underscores as visual separators.

**Example:**
```javascript
let billion = 1_000_000_000;
let price = 1_475_938.38;
```

### 2. String.prototype.replaceAll()
Replace all occurrences of a substring without using regular expressions.

**Old way:**
```javascript
message.replace(/\+/g, ' ')
```

**New way:**
```javascript
message.replaceAll('+', ' ')
```

### 3. Logical Assignment Operators

Three new operators that combine logical operations with assignment:

- **&&=** (AND assignment): Assigns only if the left side is truthy
- **||=** (OR assignment): Assigns only if the left side is falsy
- **??=** (Nullish coalescing assignment): Assigns only if the left side is null or undefined

### 4. Promise.any()
Returns as soon as any of the promises fulfills. Rejects only if all promises reject.

**Use case:** When you need the first successful result from multiple sources.

### 5. Private Class Methods
Define truly private methods using the `#` prefix that cannot be accessed outside the class.

```javascript
class Example {
  #privateMethod() { }
  publicMethod() { }
}
```

### 6. Private Getters and Setters
Create private accessors for class properties.

```javascript
class Example {
  get #privateProp() { }
  set #privateProp(value) { }
}
```

### 7. WeakRef
Create weak references to objects that don't prevent garbage collection.

**Use case:** Caching scenarios where you want objects to be collected if memory is needed.

### 8. FinalizationRegistry
Execute cleanup logic when objects are garbage collected.

**Use case:** Release resources, close connections, or perform cleanup when objects are no longer needed.

## Understanding the Code

The `index.js` file contains:
- Clearly marked sections for each feature
- Working examples with console output
- Comments explaining the old vs new approaches
- Edge cases and special behaviors

## Modifying Examples

To experiment with the features:
1. Open `index.js`
2. Modify the example code
3. Run `npm start` to see your changes
4. Observe the console output

## Browser Compatibility

ES2021 features are supported in:
- Node.js 16+ (all features)
- Chrome 90+
- Firefox 88+
- Safari 14.1+
- Edge 90+

For older environments, consider using Babel transpilation.

## Additional Resources

- [ECMAScript 2021 Specification](https://www.ecma-international.org/ecma-262/12.0/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Original Blog Post](https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm)

## Notes

- All examples are self-contained and can be run independently
- The code demonstrates practical use cases, not just syntax
- Some features (WeakRef, FinalizationRegistry) are advanced and should be used carefully
- Private class fields and methods provide true encapsulation, unlike naming conventions

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
