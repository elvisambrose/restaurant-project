document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reserveForm");
    if(form){
      form.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        
        localStorage.setItem("reservationName", name);
        localStorage.setItem("reservationDate", date);
        localStorage.setItem("reservationTime", time);
        
        alert("Reservation saved for " + name + " on " + date + " at " + time);
        
      });
    }
  
let savedName = localStorage.getItem("reservationName");
let savedDate = localStorage.getItem("reservationDate");
let savedTime = localStorage.getItem("reservationTime");

if(savedName && savedDate && savedTime){
    let reservationInfo = "Reservation for: " + savedName + " on " + savedDate + " at " + savedTime;
    let savedReservation = document.getElementById("savedReservation");
    if(savedReservation){ 
        savedReservation.innerText = reservationInfo;
    }
}  
});
  