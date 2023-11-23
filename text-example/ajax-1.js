const btn = document.querySelector('#btn1');
btn.addEventListener('click', loadText);

function loadText() {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', 'sample.txt', true);

    console.log('READYSTATE: ', xhr.readyState);

    // Optional - used for spinners/loaders
    // xhr.onprogress = function() {
    //     console.log('READYSTATE: ', xhr.readyState);
    // }

    xhr.onload = function() {
        // HTTP statuses
        // 200 OK
        // 400 Bad Request
        // 403 Forbidden
        // 404 Not Found
        // 500 server error
        if (this.status === 200) {
            console.log(this.responseText);
            document.querySelector('#text').innerHTML = 
                `<p>${this.responseText}</p>`;
        }
        else if (this.status === 404) {
            document.querySelector('#text').innerHTML = 
                `<p>Not found</p>`;
        }
    }

    xhr.onerror = function() {
        console.error('Request error...');
    }

    // xhr.onreadystatechange = function() {
    //     // Ready states
    //     // 0 request not initialized
    //     // 1 server connection established
    //     // 2 request received
    //     // 3 processing request
    //     // 4 request finished and response is ready
    //     console.log(this.readyState);
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();
}