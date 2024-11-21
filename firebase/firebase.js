const firebase = firebase.initializeApp({
  apiKey: "AIzaSyD9fePuCfDSpPFVUF1hUOopMcrs-TcZIWU",
  authDomain: "mathacademy-ed73c.firebaseapp.com",
  projectId: "mathacademy-ed73c",
  storageBucket: "mathacademy-ed73c.firebasestorage.app",
  messagingSenderId: "635832196889",
  appId: "1:635832196889:web:25c1912eb3533d1911af88",
  measurementId: "G-H0JPTVFMLM"
});

const db = firebase.firestore();

// Resto del código para contar visitas (ver paso 5)

// ...
// Referencia al documento del contador
const visitsRef = db.collection("visits").doc("pageViews");

async function incrementVisits() {
  try {
    const docSnap = await visitsRef.get();

    if (docSnap.exists()) {
      await visitsRef.update({
        count: docSnap.data().count + 1
      });
    } else {
      // El documento no existe, crearlo con un valor inicial
      await visitsRef.set({
        count: 1
      });
    }
  } catch (e) {
    console.error("Error incrementando las visitas: ", e);
  }
}

// Llamar a la función al cargar la página
incrementVisits();