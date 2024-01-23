document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var wish = document.getElementById('wish');
    wish.textContent = 'Happy Birthday, ' + name + '! You are now ' + age + ' years old.';
});