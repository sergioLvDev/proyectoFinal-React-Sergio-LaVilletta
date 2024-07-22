import { app } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const db = getFirestore(app);
const collectionDeProductos = collection(db, "productos");

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
export function getProductsById(category) {
  const filtro = query(collectionDeProductos, where("id", "==", category));
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
