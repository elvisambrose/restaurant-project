document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reserveForm");
    const details = document.getElementById("savedReservation");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            let name = document.getElementById("name").value;
            let date = document.getElementById("date").value;
            let time = document.getElementById("time").value;

            if(!name || !date || !time){
                alert("Please fill in all fields before submitting.");
                return;
            }

            localStorage.setItem("reservationName", name);
            localStorage.setItem("reservationDate", date);
            localStorage.setItem("reservationTime", time);

            alert("Reservation saved for " + name + " on " + date + " at " + time);

            document.getElementById("name").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
        });
    }

    let savedName = localStorage.getItem("reservationName");
    let savedDate = localStorage.getItem("reservationDate");
    let savedTime = localStorage.getItem("reservationTime");

    if(savedName && savedDate && savedTime){
        let reservationInfo = "Reservation for: " + savedName + " on " + savedDate + " at " + savedTime;
        if(details){
            details.innerText = reservationInfo;
        }
    }

    const clearBtn = document.getElementById("clearReservation");
    if(clearBtn){
        clearBtn.addEventListener("click", () => {
            localStorage.removeItem("reservationName");
            localStorage.removeItem("reservationDate");
            localStorage.removeItem("reservationTime");
            if(details){
                details.textContent = "";
            }
            alert("Reservation cleared.");
        });
    }
});
