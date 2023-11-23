const btn = document.querySelector('#btn');

btn.addEventListener('click', loadUsers);

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users');
    xhr.onload = function () {
        const data = JSON.parse(xhr.response);
        let output = '';
        data.forEach(user => {
            output += `
                <div class="user">
                    <img src="${user.avatar_url}" alt="${user.login}'s profile image">
                    <p>Username: <span class="text-bold">${user.login}</span></p>
                    <p>Profile: <a href="${user.url}">${user.url}</a></p>
                    <p>Repos: <a href="${user.repos_url}">${user.repos_url}</a></p>
                </div>
            `;
        });

        document.querySelector('#users').innerHTML = output;
    };

    xhr.send();
}