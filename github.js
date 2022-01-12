class Github {
    constructor() {
        this.client_id = '5eed4eba5cb24c52555b';
        this.client_secret = '1e8253584d6b85bab87a7b3508776312557e2911'
    }

    async getData(user) {
        let personalResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let profile = await personalResponse.json();

        return {
            profile
        }
    }
}