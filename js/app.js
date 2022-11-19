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