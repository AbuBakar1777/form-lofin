function onclickss(){
    var names=document.getElementById("names");
var role=document.getElementById("role");
    var student={
        names:names.value,
        role:role.value,
    }
console.log(student)
var key=Math.random()*2232323;
console.log(key)
firebase.database().ref('list/'+key.toFixed()).set(student)
}
// console.log(firebase)
function getbasedata(){
    firebase.database().ref('list').once('value',function(data){
        console.log(data.val())
    })
}