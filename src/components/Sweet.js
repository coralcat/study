import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import { dbService, storageService } from "fbase";
import React, { useState } from "react";

export const Sweet = ({ sweetObject, isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newSweet, setNewSweet] = useState(sweetObject.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure, you want to delete this sweet?");

    if (ok) {
      await deleteDoc(doc(dbService, `sweets/${sweetObject.id}`));
      if (sweetObject.attachmentUrl !== "") {
        await deleteObject(ref(storageService, sweetObject.attachmentUrl));
      }
    }
  };

  const toggleEditing = () => setIsEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(dbService, `sweets/${sweetObject.id}`), {
      text: newSweet,
    });
    setIsEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewSweet(value);
  };
  return (
    <div>
      {isEditing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              placeholder="Edit your sweet"
              value={newSweet}
              required
            />
            <input type="submit" value="Update Sweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{sweetObject.text}</h4>
          {sweetObject.attachmentUrl && (
            <div>
              <img
                src={sweetObject.attachmentUrl}
                width="50px"
                height="50px"
                alt=""
              />
            </div>
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Sweet</button>
              <button onClick={toggleEditing}>Edit Sweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};
