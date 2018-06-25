let argv = process.argv;
let num = parseInt(argv[1], 10);

if (isNaN(num) || argv.length < 2) {
	console.log('useage: node 2s-complement.js <number>');
	return;
}

let bits = [];
while (num>=1 || num <= -1) {
	bits.push(num%2);
	num = num / 2;
}
console.log(bits.join(''))
