// JavaScript Number Methods - Console Tutorial

const methodsData = [
    {
        name: 'toFixed()',
        explanation: 'Formats a number to a fixed number of decimal places. Returns a string.',
        example: `let price = 49.5678;\nlet rounded = price.toFixed(2);\nconsole.log(rounded);`,
        output: '49.57'
    },
    {
        name: 'toPrecision()',
        explanation: 'Formats a number to a specified total length (significant digits).',
        example: `let bigNum = 12345.6789;\nlet precise = bigNum.toPrecision(6);\nconsole.log(precise);`,
        output: '12345.7'
    },
    {
        name: 'toString()',
        explanation: 'Converts a number to a string representation.',
        example: `let num = 123;\nlet str = num.toString();\nconsole.log(str + ' is now a string');`,
        output: '123 is now a string'
    },
    {
        name: 'valueOf()',
        explanation: 'Returns the primitive (number) value of a Number object.',
        example: `let numObj = new Number(42);\nlet primitive = numObj.valueOf();\nconsole.log(primitive + 8);`,
        output: '50'
    },
    {
        name: 'toExponential()',
        explanation: 'Returns a string with the number in exponential notation.',
        example: `let large = 5000000;\nlet exp = large.toExponential(3);\nconsole.log(exp);`,
        output: '5.000e+6'
    },
    {
        name: 'Number.isInteger()',
        explanation: 'Checks if a value is a whole number (integer).',
        example: `console.log(Number.isInteger(42));\nconsole.log(Number.isInteger(3.14));\nconsole.log(Number.isInteger("5"));`,
        output: 'true\nfalse\nfalse'
    },
    {
        name: 'Number.isFinite()',
        explanation: 'Checks if a value is a finite number (not NaN or Infinity).',
        example: `console.log(Number.isFinite(100));\nconsole.log(Number.isFinite(Infinity));\nconsole.log(Number.isFinite(NaN));`,
        output: 'true\nfalse\nfalse'
    },
    {
        name: 'Number.isNaN()',
        explanation: 'Checks if a value is NaN (Not-a-Number).',
        example: `console.log(Number.isNaN(NaN));\nconsole.log(Number.isNaN(123));\nconsole.log(Number.isNaN("hello"));`,
        output: 'true\nfalse\nfalse'
    },
    {
        name: 'Number.parseInt()',
        explanation: 'Parses a string and returns an integer (whole number).',
        example: `console.log(Number.parseInt("42px"));\nconsole.log(Number.parseInt("3.14 meters"));\nconsole.log(Number.parseInt("hello"));`,
        output: '42\n3\nNaN'
    },
    {
        name: 'Number.parseFloat()',
        explanation: 'Parses a string and returns a floating point number.',
        example: `console.log(Number.parseFloat("3.14 meters"));\nconsole.log(Number.parseFloat("2.99 price"));\nconsole.log(Number.parseFloat("hello"));`,
        output: '3.14\n2.99\nNaN'
    }
];

const combinedExamples = [
    {
        title: 'Example 1: Shopping Cart Calculator',
        description: 'Using toFixed() and Number.parseFloat() together',
        code: `let itemPrice = "49.99";
let quantity = "3";

// Parse string numbers to actual numbers
let price = Number.parseFloat(itemPrice);
let qty = Number.parseInt(quantity);

// Calculate total
let total = price * qty;

// Format to 2 decimal places for display
let displayTotal = total.toFixed(2);

console.log("Item price: $" + price);
console.log("Quantity: " + qty);
console.log("Total: $" + displayTotal);`,
        output: 'Item price: $49.99\nQuantity: 3\nTotal: $75.97'
    },
    {
        title: 'Example 2: Price Formatter',
        description: 'Using toFixed(), toString(), and isFinite() together',
        code: `function formatPrice(input) {
    let num = Number.parseFloat(input);

    if (!Number.isFinite(num)) {
        return "Invalid price";
    }

    let dollars = num.toFixed(2);
    return "$" + dollars.toString();
}

console.log(formatPrice("123.5"));
console.log(formatPrice("free"));
console.log(formatPrice(99.999));`,
        output: '$123.50\nInvalid price\n$100.00'
    }
];

function printSeparator(char = '=', length = 60) {
    console.log(char.repeat(length));
}

function showAllMethods() {
    console.clear();
    printSeparator();
    console.log('JAVASCRIPT NUMBER METHODS - COMPLETE TUTORIAL');
    printSeparator();
    console.log('');
    
    methodsData.forEach((method, index) => {
        console.log(`${index + 1}. ${method.name}`);
        console.log('-'.repeat(50));
        console.log(`Explanation: ${method.explanation}`);
        console.log('\nCode Example:');
        console.log(method.example);
        console.log('\nExpected Output:');
        console.log(method.output);
        console.log('');
        printSeparator('-', 50);
        console.log('');
    });
    
    showCombinedExamples();
}

function showCombinedExamples() {
    printSeparator();
    console.log('COMBINED EXAMPLES - PRACTICAL USE CASES');
    printSeparator();
    console.log('');
    
    combinedExamples.forEach((example, idx) => {
        console.log(`${idx + 1}. ${example.title}`);
        console.log(`   ${example.description}`);
        console.log('\nCode:');
        console.log(example.code);
        console.log('\nExpected Output:');
        console.log(example.output);
        console.log('');
        printSeparator('-', 50);
        console.log('');
    });
}

// Run the tutorial - executes when page loads
showAllMethods();
