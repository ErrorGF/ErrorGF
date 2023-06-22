var lettre = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!§µ*%ù$+&?;:£abcdefghijklmnopqrstuvwxtz' ;
var pass = '';
longueur = 50;
for(i=0;i<=longueur;i++){
    var mdp = Math.round(Math.random()*lettre.length);
    pass+=lettre.substring(mdp,mdp+1);
}
console.log(pass);
