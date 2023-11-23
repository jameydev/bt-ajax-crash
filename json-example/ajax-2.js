const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', loadUser);
btn2.addEventListener('click', loadUsers);

function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
            document.querySelector('#user').innerHTML = output;
        }
    }
    xhr.send();
}

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const users = JSON.parse(this.responseText);
            let output = '';
            users.forEach(function(user) {
                output += `
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            });
            document.querySelector('#users').innerHTML = output;
        }
    }
    xhr.send();
}