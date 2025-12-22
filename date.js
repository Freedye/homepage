window.addEventListener('load', function(event) {
    function updateClock() {
        var days = ['DOMENICA','LUNEDÌ','MARTEDÌ','MERCOLEDÌ','GIOVEDÌ','VENERDÌ','SABATO'];
        var m = new Date();
        var dateString =
            (days[ m.getDay() ]) + " " +
            ("0" + (m.getMonth()+1)).slice(-2) +"/"+
            ("0" + m.getDate()).slice(-2) + "/" +
            m.getFullYear() +" "+
            ("0" + m.getHours()).slice(-2) + ":" +
            ("0" + m.getMinutes()).slice(-2) + ":" +
            ("0" + m.getSeconds()).slice(-2);
        
        document.getElementById('time').innerHTML = dateString;

        setTimeout(updateClock, 1000);
    }
    updateClock();
}); 