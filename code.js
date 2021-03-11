let fs = require('fs');
let input = process.argv.slice(2);
// let printfileobj = require
let operation = input[0];

//range of inputs
let last = input.length;
let initial = 1;

function printfile(filename) {
    if (isfile(filename) == true) {
        let data = fs.readFileSync(filename, 'utf8');
        console.log(data);
    }
    console.log("function end");
}

function isfile(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}

// wcat functions
function b() {
    let linenumbering = 1;
    while (initial < last) {
        if (isfile(input[initial]) == true) {
            let data = fs.readFileSync(input[initial], 'utf8');
            let starr = data.split("\n");
            for (let j = 0; j < starr.length; j++) {
                if (starr[j].length > 1) {
                    console.log(linenumbering++, starr[j]);
                }
            }
            initial++;
        }
    }
}

function n() {
    let linenumbering = 1;
    while (initial < last) {
        if (isfile(input[initial]) == true) {
            let data = fs.readFileSync(input[initial], 'utf8');
            let starr = data.split("\n");
            for (let j = 0; j < starr.length; j++) {
                console.log(linenumbering++, starr[j]);
            }
            initial++;
        }
    }

}

function s() {
    while (initial < last) {
        if (isfile(input[initial]) == true) {
            let data = fs.readFileSync(input[initial], 'utf8');
            let starr = data.split("\n");
            for (let j = 0; j < starr.length; j++) {
                if (starr[j].length > 1) {
                    console.log(starr[j]);
                }
            }
            initial++;
        }
    }
}

if (input[0] == "wcat") {
    if (input[1] == "-s") {
        console.log("removing extra line breaks");
        initial++;
        s();

    } else if (input[1] == "-b") {
        console.log("adding line numbers to non empty lines");
        initial++;
        b();
    } else if (input[1] == "-n") {
        console.log("adding line numbers to all the lines");
        initial++;
        n();
    } else {
        console.log("wcat function");
        while (initial < last) {
            printfile(input[initial]);
            initial++;
        }

    }
} else {
    console.log("Command missing");
}

if (input[1] == "-s") {
    initial++;
}

