//import "..public/styles";
import React, { useState } from "react";
import firebase from './firebase'

export default function App() {

  const [ selectedFile, setSelectedFile ] = useState(null);

  const fileEventHandler = (event) => {
     setSelectedFile(event.target.files[0])
     };

  const fileUploadHandler = () => {
    let bucketName = 'images'
    let storageRef = firebase.storage().ref(`${bucketName}/${selectedFile.name}`)
    let uploadImage = storageRef.put(selectedFile)
    uploadImage.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        let downloadUrl = uploadImage.snapshot.downloadUrl
      })
  };

  const previewImage = () => {
    let storageRef = firebase.storage().ref()
    let spaceRef = storageRef.child('images/'+selectedFile.name)
    spaceRef.getDownloadURL().then((url) => {
      console.log(url)
      document.getElementById('new-img').src = url
    })
  }


  return (
    <div className="App">
      <input type="file" onChange={fileEventHandler} />
      <button type="submit" onClick={fileUploadHandler}>
        {" "}
        Upload{" "}
      </button>
      <button onClick={previewImage}>Preview</button>
      <img id="new-img"/>
    </div>
  );
}
