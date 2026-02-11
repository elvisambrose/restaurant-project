document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reserveForm");
    if(form){
      form.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        localStorage.setItem("reservationName", name);
        alert("Reservation saved for " + name);
      });
    }
  
    let savedName = localStorage.getItem("reservationName");
    if(savedName){
      document.getElementById("savedReservation").innerText = "Reservation for: " + savedName;
    }
  });
  