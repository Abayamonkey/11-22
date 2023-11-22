function Go(){
let q = document.getElementById('q').value;
let price = 52500;
let item = 'butter chicken';
let msg = `you  bougth ${q} of ${item} that will be ${q*price} pay up or i will kill u`;
document.getElementById('response').innerHTML=msg;
}