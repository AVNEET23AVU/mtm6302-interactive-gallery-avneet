document.addEventListener("DOMContentLoaded", function() {
  const galleryContainer = document.getElementById("gallery-container");

  const images = [
      { src: "img/KIWI.jpeg", title: "Image 1", description: "The kiwi fruit, also known as kiwifruit or Chinese gooseberry, is a small, nutrient-dense fruit known for its vibrant green flesh, unique flavor, and numerous health benefits." },
      { src: "img/APPLE.jpeg", title: "Image 2", description: "I love apple" },
      { src: "img/grapes.jpeg", title: "Image 2", description: "Grapes are small, juicy fruits that grow in clusters on woody vines. Known for their sweet or tangy flavor, grapes are one of the most popular fruits worldwide, consumed fresh or processed into various products like wine, raisins, and juice" },
      { src: "img/pineapple.jpeg", title: "Image 2", description: "The pineapple (Ananas comosus) is a tropical fruit known for its unique appearance, sweet and tangy flavor, and versatility in culinary use. It is widely celebrated for its juicy, fragrant flesh and health benefits." },
      { src: "img/orange.jpeg", title: "Image 2", description: "The orange (Citrus sinensis) is a popular citrus fruit known for its bright color, juicy flesh, and sweet, tangy flavor" },
      { src: "img/pear.jpeg", title: "Image 2", description: "The pear (Pyrus species) is a sweet, juicy fruit known for its distinct shape, smooth skin, and a wide variety of flavors." },
      { src: "img/banana.jpeg", title: "Image 2", description: "The banana (Musa species) is one of the most widely consumed fruits in the world, known for its distinctive yellow peel, sweet flavor, and versatile use in both sweet and savory dishes. Bananas are rich in nutrients, providing a quick source of energy, and are often enjoyed as a healthy snack or incorporated into a variety of recipes.." },
      { src: "img/strawberry.jpeg", title: "Image 2", description: "The strawberry (Fragaria × ananassa) is a popular and widely loved fruit known for its bright red color, sweet-tart flavor, and juicy texture. Strawberries are often enjoyed fresh but are also used in a variety of culinary applications, from desserts to savory dishes" },
      { src: "img/blueberry.jpeg", title: "Image 2", description: "The blueberry (Vaccinium species) is a small, round, and vibrant fruit known for its deep blue-purple color, sweet flavor, and high nutritional value. Blueberries are often enjoyed fresh, but they can also be used in a variety of recipes, such as baked goods, smoothies, and jams. " },
      { src: "img/dragonfuit.jpeg", title: "Image 2", description: "Dragonfruit (Hylocereus spp.), also known as pitaya, is a vibrant tropical fruit with a unique appearance and mildly sweet flavor" },
      { src: "img/pomegranate.jpeg", title: "Image 2", description: "The pomegranate (Punica granatum) is a striking and ancient fruit, prized for its vibrant color, sweet-tart flavor, and numerous health benefits" },
      { src: "img/pappaya.jpeg", title: "Image 2", description: "Papaya (Carica papaya) is a tropical fruit that is beloved for its sweet flavor, soft texture, and vibrant color. Native to southern Mexico and Central America, papayas are widely cultivated in tropical and subtropical regions around the world." },
      { src: "img/watermelon.jpeg", title: "Image 2", description: "Watermelon (Citrullus lanatus) is one of the most beloved summer fruits, known for its refreshing sweetness, juicy texture, and high water content." },
      
  ];

  images.forEach(image => {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = image.title;

      imgElement.addEventListener("click", function() {
          displayImageDetails(image);
      });

      galleryContainer.appendChild(imgElement);
  });

  function displayImageDetails(image) {
      // Create the modal overlay
      const modalOverlay = document.createElement("div");
      modalOverlay.classList.add("modal-overlay");

      // Create modal content
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = "&times;";
      closeButton.addEventListener("click", () => {
          modalOverlay.style.display = "none";
          document.body.removeChild(modalOverlay);
      });

      // Populate modal content
      const modalImage = document.createElement("img");
      modalImage.src = image.src;
      modalImage.alt = image.title;

      const modalTitle = document.createElement("h2");
      modalTitle.classList.add("modal-title");
      modalTitle.textContent = image.title;

      const modalDescription = document.createElement("p");
      modalDescription.classList.add("modal-description");
      modalDescription.textContent = image.description;

      // Append elements
      modalContent.appendChild(closeButton);
      modalContent.appendChild(modalImage);
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(modalDescription);
      modalOverlay.appendChild(modalContent);
      document.body.appendChild(modalOverlay);

      // Display modal
      modalOverlay.style.display = "flex";
  }
});