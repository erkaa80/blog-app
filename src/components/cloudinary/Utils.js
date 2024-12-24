export const uploadImage = async (file) => {
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "leap");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const { secure_url } = await response.json();
    return secure_url;
  } catch (error) {
    console.log(error);
    return null;
  }
};
