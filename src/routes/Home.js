/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { Sweet } from "components/Sweet";
import { dbService } from "fbase";
import { SweetFactory } from "components/SweetFactory";

export const Home = ({ userObject }) => {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, "sweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      const newArray = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setSweets(newArray);
    });
  }, []);
  return (
    <div>
      <SweetFactory userObject={userObject} />
      <div>
        {sweets.map((sweet) => (
          <Sweet
            key={sweet.id}
            sweetObject={sweet}
            isOwner={sweet.createrId === userObject.uid}
          />
        ))}
      </div>
    </div>
  );
};
