import React from 'react'

function PdfUploader() {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          console.log("Selected PDF:", file.name);
        }
      };
  return (
    <>
    <input type="file" accept="application/pdf" onChange={handleFileUpload} />
    </>
  )
}

export default PdfUploader