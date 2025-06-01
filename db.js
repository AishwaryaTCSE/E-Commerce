
// db.js
import { database } from './firebase.js';
import { ref, push, set, get, remove, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

export async function addProduct(title, price, image) {
  const productRef = push(ref(database, 'products'));
  await set(productRef, { title, price, image });
}

export async function getProducts() {
  const snapshot = await get(ref(database, 'products'));
  return snapshot.exists() ? snapshot.val() : {};
}

export async function deleteProduct(productId) {
  await remove(ref(database, 'products/' + productId));
}

export async function updateProduct(productId, newData) {
  await update(ref(database, 'products/' + productId), newData);
}
