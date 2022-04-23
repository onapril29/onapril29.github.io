if (document.cookie.includes('darkmode=1')) {
   var element = document.body;
   element.classList.toggle('darkmode');
}
function darkmode() {
   if (!document.cookie.includes('darkmode=1')) {
      document.cookie = 'darkmode=1; expires=Tue, Jan 1 12:00:00 AM EST 2030';
   } else {
      document.cookie = 'darkmode=0; expires=Tue, Jan 1 12:00:00 AM EST 2030';
   }
   var element = document.body;
   element.classList.toggle('darkmode');
}

function surprise(cb) { // Run surprise(function) and it'll run function() at april 29th, 12:10 or greater. I didn't even know that this was a feature in JS. (taken from stackoverflow)
    (function loop() {
        var now = new Date();
        if (now.getDate() === 29 && now.getHours() === 12 && now.getMinutes() > 9) {
            cb();
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
    })();
}
