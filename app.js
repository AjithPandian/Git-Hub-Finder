const _github = new Github;
const ui = new UI;

const search = document.getElementById('searchUser');

search.addEventListener('keyup', (e) => {
    const _input = e.target.value;

    if (_input !== '') {
        _github.getData(_input)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    ui.showError('User not found', 'alert alert-danger');
                } else {
                    ui.showData(data.profile);
                }
            })
    } else {
        ui.clearProfile();
    }
})