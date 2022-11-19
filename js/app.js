const nameInput = document.getElementById('name');
const jobRole = document.querySelector('select[name="user-title"]')
const otherRole = document.querySelector('input[name="other-job-role"]');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const colorOptions = document.querySelectorAll('#color option');

nameInput.focus();
otherRole.style.opacity = '0';

jobRole.addEventListener('change', (e) => {
    if(e.target.value == 'other') {
        otherRole.style.opacity = '100';
    } else if(e.target.value != 'other') {
        otherRole.style.opacity = '0';
    }
});

shirtColor.disabled = true;

shirtDesign.addEventListener('change', (event) => {
    shirtColor.disabled = false;
    const selectDesign = event.target.value;
    if(selectDesign == 'js puns') {
        colorOptions[1].selected = true;
    } else if(selectDesign == 'heart js') {
        colorOptions[4].selected = true;
    }

    for(let i = 1; i < colorOptions.length; i++) {
        const theme = colorOptions[i].getAttribute('data-theme');
        if(selectDesign === theme) {
            colorOptions[i].hidden = false;
        } else {
            colorOptions[i].hidden = true;
        }
    }
});