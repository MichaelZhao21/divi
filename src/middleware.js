export function login(username, password) {
    return username === 'williamjetson1900' && password === 'ilovemoney1!';
}

export async function getRisk(summoner) {
    try {
        const response = await fetch(
            `https://us-central1-digital-insurance-9d3bd.cloudfunctions.net/checkName?name=${summoner}`
        ).then((res) => res.json());
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}
