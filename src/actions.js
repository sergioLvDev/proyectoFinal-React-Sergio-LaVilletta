import { faker } from "@faker-js/faker";
import { app } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  getDoc,
  where,
} from "firebase/firestore";

export const db = getFirestore(app);
const collectionDeProductos = collection(db, "productos");

export function generateProducts(cant) {
  if (typeof cant !== "number") return;
  for (let i = 0; i < cant; i++) {
    const producto = {
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      price: faker.commerce.price(),
      stock: faker.number.int({ min: 10, max: 100, precision: 1 }),
      images: faker.image.url(),
    };
    addDoc(collectionDeProductos, producto)
      .then((res) => {
        console.log(res);
        console.log("Se agrego el producto");
      })
      .catch((err) => {
        console.log(err);
        console.log("No se agrego el producto");
      });
  }
}

export function getProducts() {
  return getDocs(collectionDeProductos)
    .then((res) => {
      const productos = res.docs.map((doc) => {
        const producto = doc.data(); //{ id, title, description, category, price, stock, image }
        producto._id = doc.id; //{...,_id }
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

/* export function getProductsById(id) {
  const filtro = doc(collectionDeProductos, id);
  const consulta = getDoc(filtro);
  consulta.then((res) => {
    const producto = res.data();
    producto._id = res.id;
    return producto;
  });
} */

/* 
export async function getProductsByIdAsync(id) {
  try {
    //const id = "JSeN0hs1Bn0fUCsBv3xh"
    const filtro = doc(collectionDeProductos, id);
    const res = await getDoc(filtro);

    const producto = res.data();
    producto._id = res.id;
    return producto;
  } catch (err) {
    console.log(err);
    return null;
  }
}
 */
