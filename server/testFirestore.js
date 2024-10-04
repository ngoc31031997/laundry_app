const db = require('./config/firebase.js');  // Đường dẫn đến file Firebase đã cấu hình

async function testFirestoreConnection() {
  try {
    // Ghi một document vào Firestore
    const docRef = db.collection('testCollection').doc('testDoc');
    await docRef.set({
      name: 'Test Name',
      createdAt: new Date().toISOString()
    });

    console.log('Document successfully written!');

    // Đọc lại document từ Firestore
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      console.log('Document data:', docSnapshot.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error testing Firestore connection:', error);
  }
}

testFirestoreConnection();
