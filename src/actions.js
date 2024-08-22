import { app } from "./firebaseConfig";
import tienda from "./tienda.json";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

export const db = getFirestore(app);
const collectionDeProductos = collection(db, "productos");

export function generateProducts() {
  return new Promise((resolve, reject) => {
    resolve(tienda);

    for (let i = 0; i < tienda.length; i++) {
      const consulta = addDoc(collectionDeProductos, tienda[i]);
    }

    reject("Error");
  });
}
/* generateProducts(); */

export function getProducts() {
  return getDocs(collectionDeProductos)
    .then((res) => {
      const productos = res.docs.map((doc) => {
        const producto = doc.data();
        producto._id = doc.id;
        return producto;
      });
      return productos;
    })
    .catch(() => {
      console.log("Hubo un error");
    });
}

export function getProductsByCategory(category = "Tools") {
  const filtro = query(
    collectionDeProductos,
    where("category", "==", category)
  );
  return getDocs(filtro)
    .then((res) => {
      const productos = res.docs.map((doc) => {
        const producto = doc.data();
        producto._id = doc.id;
        return producto;
      });
      return productos;
    })
    .catch(() => {
      console.log("Hubo un error");
    });
}

export function getProductsById(id) {
  const filtro = query(collectionDeProductos, where("id", "==", id));
  return getDocs(filtro).then((res) => {
    const producto = res.docs[0].data();
    return producto;
  });
}

/* Api de prueba de prodctos !!! 
("https://api.escuelajs.co/api/v1/products") */
/* loremflickr.com */
