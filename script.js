const imageProfile = document.querySelector(".photo");

imageProfile.addEventListener("click", (event) => {
  console.log(imageProfile.src);
  if (imageProfile.src.includes("blank-profile")) {
    imageProfile.src = "./profile-blur.png";
  } else {
    imageProfile.src = "./blank-profile.png";
  }
});
