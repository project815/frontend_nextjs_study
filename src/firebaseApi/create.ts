import { addDoc, collection } from "firebase/firestore";
import { database } from "../config/firebase.config";

const TEST_COLLECTION = collection(database, "test");

export const createTest = async () => {
  console.log("@@@");
  await addDoc(TEST_COLLECTION, { writer: "??" })
    .then((result) => {
      console.log("result : ", result);
    })
    .catch((error) => {
      console.log("error : ", error);
    });
};
