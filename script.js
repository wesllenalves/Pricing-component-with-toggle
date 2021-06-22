const basicMonthly = document.getElementById('basic-monthly');
const basicAnnually = document.getElementById('basic-annually');

const profissionalMonthly = document.getElementById('profissional-monthly');
const profissionalAnnually = document.getElementById('profissional-annually');

const masterMonthly = document.getElementById('master-monthly');
const masterAnnually = document.getElementById('master-annually');

const toggleSwitch = document.querySelector('.toggle')


var displayMonth = () => {
    basicMonthly.style.display = "block";
    profissionalMonthly.style.display = "block";
    masterMonthly.style.display = "block";

    basicAnnually.style.display = "none";
    profissionalAnnually.style.display = "none";
    masterAnnually.style.display = "none";
}

var displayAnnually = () => {
    basicMonthly.style.display = "none";
    profissionalMonthly.style.display = "none";
    masterMonthly.style.display = "none";

    basicAnnually.style.display = "block";
    profissionalAnnually.style.display = "block";
    masterAnnually.style.display = "block";
}

toggleSwitch.addEventListener('change', e => {
    if (toggleSwitch.checked) {
        displayMonth();
    } else {
        displayAnnually();
    }
})

document.addEventListener('keydown', e => {
    if (e.key == "ArrowLeft") {
        toggleSwitch.checked = false;
        displayAnnually();
    }
    else if (e.key == "ArrowRight") {
        toggleSwitch.checked = true;
        displayMonth();
    }
})

