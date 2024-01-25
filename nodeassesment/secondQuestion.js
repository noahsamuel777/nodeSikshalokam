function transformString(s) {
    const asciiValues = s.split('').map(char => char.charCodeAt(0));
    let changedChars = new Set();

    for (let i = 0; i < asciiValues.length; i++) {
        if (!changedChars.has(i)) {
            if (i < asciiValues.length - 1 && asciiValues[i] % 2 === 0) {
           
                asciiValues[i + 1] += asciiValues[i] % 7;
                changedChars.add(i + 1);
            } else if (i > 0 && asciiValues[i] % 2 !== 0) {
              
                asciiValues[i - 1] -= asciiValues[i] % 5;
                changedChars.add(i - 1);
            }

           
            if (asciiValues[i] < 0 || asciiValues[i] > 127) {
                asciiValues[i] = 83;
            }
        }
    }

    const result = asciiValues.map(code => String.fromCharCode(code)).join('');
    console.log("Final Answer:", result);
}


let s = "sHQen}";
console.log("Original String:", s);
console.log("ASCII:", s.split('').map(char => char.charCodeAt(0)).join('-'));

transformString(s);
