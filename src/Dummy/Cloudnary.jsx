import { useState } from "react";

const Cloudnary = () => {
  const [images, setImages] = useState([]);
  const submitImages = async () => {
    try {
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("file", images[i]);
      }
      formData.append("upload_preset", "carokupload");
      formData.append("cloud_name", "delygdkh2");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/delygdkh2/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = Array.from(files);
    setImages(imageArray);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={submitImages}>Upload</button>
    </div>
  );
};

export default Cloudnary;
