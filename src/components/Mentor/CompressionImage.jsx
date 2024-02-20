
import React from 'react'
import Resizer from "react-image-file-resizer";


export default function CompressionImage() {
  const [compressedImage, setCompressedImage] = React.useState(null);

  const resizeFile = (file) =>
    new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        200, // maxWidth
        300, // maxHeight
        'JPEG',
        100, // quality
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });

  const compressImage = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const compressedImageDataUri = await resizeFile(file);
        setCompressedImage(compressedImageDataUri);
        console.log(compressedImageDataUri);
      } catch (error) {
        console.error('Image compression error:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={compressImage} style={{ marginTop: '100px' }} />
      {compressedImage && (
        <img
          src={compressedImage}
          alt="Compressed Preview"
          style={{ maxWidth: '100%', marginTop: '100px' }}
          onLoad={() => console.log('Image loaded successfully')}
          onError={(event) => {
            console.error('Image load error:', event);
            console.error('Image error details:', event.nativeEvent);
          }}
        />
      )}
    </div>
  );
}
