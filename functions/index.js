const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.checkName = functions.https.onRequest((request, response) => {
    var db = admin.firestore();

    db.collection('names')
        .add({
            first: 'William',
            last: 'Jetson',
            born: 1978,
        })
        .then((docRef) => {
            functions.logger.info('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
            functions.logger.error('Error adding document: ', error);
        });

    db.collection('names')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                functions.logger.info(`${doc.id} => ${doc.data()}`);
            });
        });
});