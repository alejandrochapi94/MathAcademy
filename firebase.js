import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

        // Configuración de Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyD9fePuCfDSpPFVUF1hUOopMcrs-TcZIWU",
            authDomain: "mathacademy-ed73c.firebaseapp.com",
            projectId: "mathacademy-ed73c",
            storageBucket: "mathacademy-ed73c.firebasestorage.app",
            messagingSenderId: "635832196889",
            appId: "1:635832196889:web:25c1912eb3533d1911af88",
            measurementId: "G-H0JPTVFMLM"
          };

        // Inicializa Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Función para actualizar el contador
        async function updateVisitCounter() {
            const counterRef = doc(db, "counters", "visitCounter");

            try {
                const docSnap = await getDoc(counterRef);

                if (docSnap.exists()) {
                    const currentCount = docSnap.data().count || 0;
                    await updateDoc(counterRef, { count: currentCount + 1 });
                    //document.getElementById("visit-count").textContent = currentCount + 1;
                } else {
                    await setDoc(counterRef, { count: 1 });
                    //document.getElementById("visit-count").textContent = 1;
                }
            } catch (error) {
                console.error("Error al actualizar el contador:", error);
            }
        }

        // Llamar a la función al cargar la página
        window.addEventListener("DOMContentLoaded", updateVisitCounter);