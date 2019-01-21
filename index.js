
document.getElementById('output').style.visibility = 'hidden';
document.getElementById("input-1").style.height = "100px";
document.getElementById('input-1').addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById("input-1").style.height = "70px";
    let lbs = e.target.value;
    console.log(lbs);
    document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
    document.getElementById("kgOutput").innerHTML = (lbs / 2.2046).toFixed(2);
    document.getElementById("ozOutput").innerHTML = (lbs * 16).toFixed(2);
});
