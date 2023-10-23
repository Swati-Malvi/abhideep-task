const listOfDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const dogNames = await response.json();
  console.log(dogNames.message);
  const dogLists = Object.keys(dogNames.message);
  console.log(dogLists);
  const dogSelectorCointainer = document.querySelector("#pet-select");

  dogLists.forEach((currentDog) => {
    const htmlStr = ` <option value="${currentDog}">${currentDog}</option>`;
    dogSelectorCointainer.insertAdjacentHTML("beforeend", htmlStr);
  });
  dogSelectorCointainer.addEventListener("click", async () => {
    console.log(dogSelectorCointainer.value);
    const elementRemove = document.querySelector(".remove");
    console.log(elementRemove);
    if (elementRemove) elementRemove.remove();
    const response = await fetch(
      `https://dog.ceo/api/breed/${dogSelectorCointainer.value}/images/random`
    );

    const doggo = await response.json();
    console.log(doggo);
    const imageContainer = document.querySelector(".image-container");
    imageContainer.innerHTML = `<img
    class="fit-picture"
    src="${doggo.message}"
    alt="dogimage" />
  `;
    console.log(imageContainer);
  });
  //if (dogSelectorCointainer.value === "pet-select")
};
listOfDogs();
