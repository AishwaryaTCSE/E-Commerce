
// auth.js
import { auth, database } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

export async function registerUser(email, password, role) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    await set(ref(database, 'users/' + uid), { email, role });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    const snapshot = await get(ref(database, 'users/' + uid));
    if (!snapshot.exists()) throw new Error("User data not found");

    const role = snapshot.val().role;
    return { success: true, role };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
