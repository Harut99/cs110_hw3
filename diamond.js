<script>
const Rchar = function(n, c){
	let Eplace = "" ;
	for(let i = 1 ; i<=n ; i++ ) {
		Eplace = Eplace + c;
	}
	
	return Eplace;
}

const diamond = function(b) {
let d = ""
	if(b%2 === 0) {
		b = b + 1;
	}
	for (let i = 1; i<b; i=i+2){
		d = d + Rchar((b-i)/2, " ") + Rchar(i, "*")+"\n";
	}
	d = d + Rchar(b, "*")+"\n";
	for (let i = b-2; i>=1; i=i-2){
		d = d + Rchar((b-i)/2, " ") + Rchar(i, "*")+"\n";
	}
	return d;

}
let Bigrow=8;
console.log(diamond(Bigrow));

</script>