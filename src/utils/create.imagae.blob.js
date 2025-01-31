async function fileToDataURI(file) {
  if (file === undefined || '') return '';
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
export default fileToDataURI;
