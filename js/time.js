function displayTime() {

    let now = new Date();
    let div = document.getElementById("clock");

    div.innerHTML = now.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:"2-digit"});

    setTimeout(displayTime,1000);

}

window.onload = displayTime;