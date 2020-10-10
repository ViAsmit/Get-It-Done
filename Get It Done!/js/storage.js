function saveData(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    }
    else{
        alert('Your Browser does not support LocalStorage');
    }
}

function loadData(key) {
    if (localStorage) {
        if (key in localStorage) {
            return localStorage.getItem(key);
        }
    }
    else{
        alert('Your Browser does not support LocalStorage');
    }
}
