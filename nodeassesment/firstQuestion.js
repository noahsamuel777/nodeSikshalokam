function print_shortest_substrings(s, x) {
    let shortestSubstrings = [];
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i + x - 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                let substring = s.substring(i, j + 1);
                if (substring.length >= x) {
                    if (shortestSubstrings.length === 0 || substring.length < shortestSubstrings[0].length) {
                        shortestSubstrings = [substring];
                    } else if (substring.length === shortestSubstrings[0].length) {
                        shortestSubstrings.push(substring);
                    }
                }
            }
        }
    }

    if (shortestSubstrings.length === 0) {
        console.log("Answer: not-found");
    } else {
        console.log("Answer:", shortestSubstrings.join(" "));
    }
}


let s = "abccdbacca";

let x = 3;
console.log("x =", x);
print_shortest_substrings(s, x);

x = 4;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 5;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 6;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 7;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 8;
console.log("\nx =", x);
print_shortest_substrings(s, x);
