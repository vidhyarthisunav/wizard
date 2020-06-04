var gender;

$('#boybutton').click(function(){
    gender = "male";
})
$('#girlbutton').click(function(){
    gender = "female";
})

var activity = "normal";
$('#four').click(function(){
    activity = "high";
})
$('#next').click(function(){
    var weight = document.getElementById('weight').value-1;
    if(gender == "male" && activity == "normal"){
        $.ajax("https://docs.google.com/spreadsheet/pub?key=1FHK8L-zDusQosa2rlBILEEUzIKajYQsk90GEZ1czeEs&single=true&gid=0&range=b"+weight+"&output=csv").done(function(result){
        document.getElementById('calorie').innerHTML = result;
    })}
    else if(gender == "female" && activity == "normal"){
        $.ajax("https://docs.google.com/spreadsheet/pub?key=1FHK8L-zDusQosa2rlBILEEUzIKajYQsk90GEZ1czeEs&single=true&gid=0&range=c"+weight+"&output=csv").done(function(result){
        document.getElementById('calorie').innerHTML = result;
    })}
    else if(gender == "male" && activity == "high"){
        $.ajax("https://docs.google.com/spreadsheet/pub?key=1FHK8L-zDusQosa2rlBILEEUzIKajYQsk90GEZ1czeEs&single=true&gid=0&range=d"+weight+"&output=csv").done(function(result){
        document.getElementById('calorie').innerHTML = result;
    })}
    else if(gender == "female" && activity == "high"){
        $.ajax("https://docs.google.com/spreadsheet/pub?key=1FHK8L-zDusQosa2rlBILEEUzIKajYQsk90GEZ1czeEs&single=true&gid=0&range=e"+weight+"&output=csv").done(function(result){
        document.getElementById('calorie').innerHTML = result;
    })}   
});


 

