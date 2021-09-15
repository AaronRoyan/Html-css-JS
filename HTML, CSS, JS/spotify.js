$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&unit=imperial&appid=1800881dca86bd8a72d0d1b7c7719136",
    function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";

    $('.icon').attr('src', icon);
});

