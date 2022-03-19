function submitForm(e) {
    event.preventDefault();

    let slim = document.getElementById('male')
    let slimm = document.getElementById('female')

    let nameManu = document.getElementById('your')








    let dateEm = new Date(document.getElementById('date').value);

    let male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

    let female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


    let finalManu = dateEm.getDay();


    if (dateEm == "") {
        alert("Enter your Date of Birth!");
    } else if (slim.value == "") {
        alert("Select your gender!");
    }


    if (slim.checked == true) {
        nameManu.innerText = "your name   is : " + (male[finalManu]);


    } else if (slimm.checked == true) {
        nameManu.innerText = "your name   is : " + (female[finalManu]);

    }

}