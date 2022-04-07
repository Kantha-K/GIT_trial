
function extractText(){
    var items=$("#items li")
    .toArray()
    .map(e=>e.textContent)
    
    $("#result").text(items.join(","));
       
}