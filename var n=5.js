var n=5
var fact=1
for(var i=1;i<=n;i++){
    fact = fact * i;
    console.log(fact);
}
while(n>0){
    fact = fact * n;
    console.log(fact);
}
do{
    console.log(fact);
}
while(n>0);
