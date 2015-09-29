$.getJSON( "/aboutMe.json", function( data ) {
    console.log("Hey");
    var table = $("#aboutMeTable > tbody");
    var items = [];
    for(key in data){
        if(data.hasOwnProperty(key)){
            $(table).append("<tr><td>" + data[key].humanName + "</td><td>" + data[key].text + "</td></tr>");
        }
    }
});
