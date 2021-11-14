export async function login(username, password) {
    return username === 'michael.zhao2' && password === 'password';
    // try {
    //     const response = await fetch(
    //         `https://us-central1-digital-insurance-9d3bd.cloudfunctions.net/login?username=${username}&password=${password}`
    //     ).then((res) => res.json());
    //     return response.ok === 1;
    // } catch (err) {
    //     console.log(err);
    //     return null;
    // }
}

export async function getRisk(summoner) {
    try {
        const response = await fetch(
            `https://us-central1-digital-insurance-9d3bd.cloudfunctions.net/checkName?name=${summoner}`
        ).then((res) => res.json());
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}

// accountAge, microtransactions, rarity, username
