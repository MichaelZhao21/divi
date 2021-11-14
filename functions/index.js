const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.checkName = functions.https.onRequest(async (request, response) => {
    var db = admin.firestore();

    db.collection('names')
    var nameRef = db.collection("names");
    var query = nameRef.where("username", "==", "h4ck3rm4n");
    query.get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Fetching data:");
                const rarityRisk = (0.6165 * Math.log(doc.get("rarity")) + 0.261);
                const microtransactionRisk = (35.56 * doc.get("microtransactions"));
                const ageRisk = (0.01 * Math.pow(e, 0.384) * doc.get("accountAge"));
                response.send({ok: 1, rarity: doc.get("rarity"), microtransactions: doc.get("microtransactions"), accountAge: doc.get("accountAge") });
            } else {
                // doc.data() will be undefined in this case
                response.send({msg: "No such document!", ok: 0});
            }
        }).catch((error) => {
            response.send({msg: "Error getting document:", ok: 0});
        });
});