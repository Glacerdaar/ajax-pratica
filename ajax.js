document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('followers');
    const following = document.querySelector('following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/Glacerdaar')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            userName.innerText = json.login;
            avatar.src = json.avatar_url;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = jason.html_url;

        })
});    