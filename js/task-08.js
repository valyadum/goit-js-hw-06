let form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmitClick);
function onSubmitClick(event){
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
       return alert('Всі поля повинні бути заповнені');
    }
    const dataForm = {
        email: `${email.value}`,
        password: `${password.value}`
    }
    console.log(dataForm);
    event.currentTarget.reset();
}
