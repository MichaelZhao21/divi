const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// https://us-central1-digital-insurance-9d3bd.cloudfunctions.net/checkName?name=h4ck3rm4n
exports.checkName = functions.https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    if (request.query.name === null) {
        response.send({ msg: 'No name provided', ok: 0 });
        return;
    }

    const db = admin.firestore();
    const nameRef = db.collection('names');
    const query = nameRef.where('username', '==', request.query.name);
    query
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // Should always be one item long due to the unique summoner name
                const doc = querySnapshot.docs[0];
                const rarityRisk = 0.6165 * Math.log(doc.get('rarity')) + 0.261;
                const microtransactionRisk = doc.get('microtransactions') / 35.56;
                const ageRisk = 0.01 * Math.pow(Math.E, 0.384 * doc.get('accountAge'));
                const risk = (rarityRisk + microtransactionRisk + ageRisk) / 3.0;

                response.send({
                    ok: 1,
                    rarity: doc.get('rarity'),
                    microtransactions: doc.get('microtransactions'),
                    accountAge: doc.get('accountAge'),
                    risk,
                    minCost: 2 + Math.sqrt(risk),
                    maxCost: 2 + Math.sqrt(risk) + 5 * Math.log(risk),
                });
            } else {
                // doc.data() will be undefined in this case
                response.send({ msg: 'No such document!', ok: 0 });
            }
        })
        .catch((error) => {
            functions.logger.error('Error getting document:', error);
            response.send({ msg: 'Error getting document:', ok: 0 });
        });
});


exports.checkLogin = functions.https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    if (request.query.username === null) {
        response.send({ msg: 'No name provided', ok: 0 });
        if (requestAnimationFrame.query.password === null) {
            response.send({ msg: 'No password provided', ok:0});
        }
        return;
    } else if (request.query.password === null) {
        response.send({ msg: 'No password provided', ok: 0});
        return;
    }
    const db = admin.firestore();
    const nameRef = db.collection('login');
    const query1 = nameRef.where('username', '==', request.query.username);
    const query2 = nameRef.where('password', '==', request.query.password);
    query1
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                response.send({
                    ok: 1,
                    username: doc.get('username'),
                });
            } else {
                // doc.data() will be undefined in this case
                response.send({ msg: 'No such document!', ok: 0 });
            }
        })
        .catch((error) => {
            functions.logger.error('Error getting document:', error);
            response.send({ msg: 'Error getting document:', ok: 0 });
        });
    
    query2
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                response.send({
                    ok: 1,
                    password: doc.get('password'),
                });
            } else {
                // doc.data() will be undefined in this case
                response.send({ msg: 'No such document!', ok: 0 });
            }
        })
        .catch((error) => {
            functions.logger.error('Error getting document:', error);
            response.send({ msg: 'Error getting document:', ok: 0 });
        });
});