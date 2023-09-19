TeamTreeHouse Techdegree: FullStack JavaScript

Project 3 - Interactive Form

Repository: https://github.com/DarkPhoenixNinja92/TeamTreeHouse-FullStack-Unit-03-Interactive-Form

Live Site: https://darkphoenixninja92.github.io/TeamTreeHouse-FullStack-Unit-03-Interactive-Form

Description: Used JavaScript to validate a form before letting a user submit the form.

Skills: HTML, CSS, JavaScript


Every single validation is also done in realtime through the following event listeners placed just above the event listener for the form itself.

Name.addEventListener('keyup', () => {
    nameValid(Name, nameErr, nameLabel);
});

Email.addEventListener('keyup', () => {
    emailValid(Email, emailErr, emailLabel);
});

activities.addEventListener('change', () => {
    activityValid();
})

cardNum.addEventListener('keyup', () => {
    cardValid(cardNum, cardErr, cardLabel);
});

zip.addEventListener('keyup', () => {
    zipValid(zip, zipErr, zipLabel);
});

cvv.addEventListener('keyup', () => {
    cvvValid(cvv, cvvErr, cvvLabel);
});




The majority of the validation is done on keyup - with the exception of the activities validation which happens when something changes in the field. As a result, getting the validation to start requires going into the field and starting to type things.
For example, to start validating the email, you must tab into that field and type any singular character. This will begin validating email from then on in that session. The exception to this is the name field which has cuursor focus at the start by default
and will therefore begin with an error message telling you it needs a name in the field in order to submit the form.
