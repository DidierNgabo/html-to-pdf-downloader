const messageParagraph = document.getElementById("message");
const button = document.querySelector("#btn");
const container = document.querySelector("#container");

// making api request to lorem picsum

const generatePdf = () => {
  try {
    // window.open("http://127.0.0.1:5500/src/", "_blank").focus();
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        const html = `
  <div id="element" class="bg-[url('background.jpg')] p-6">
        <div class="p-2 bg-green-100">
          <h3 class="uppercase text-green-600 text-lg text-center font-bold">
            Grow my tree
          </h3>

          <h3
            class="capitalize font-sans text-green-700 mt-6 text-4xl text-center font-bold"
          >
            tree certificate
          </h3>
          <p class="text-green-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <h3 class="capitalize text-green-600 text-lg text-center font-bold">
            22 trees
          </h3>
          <p class="text-green-600 text-center">Lorem ipsum dolor sit amet.</p>
          <div class="w-full flex items-center justify-between">
            <div class="w-10/12">
              <p class="mt-4">
                ${post.body}
              </p>

              <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                iure aliquid doloremque sit quasi illum temporibus beatae quod
                qui deserunt aperiam.
              </p>
            </div>
            <div class="w-10/12">
              <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                iure aliquid doloremque sit quasi illum temporibus beatae quod
                qui deserunt aperiam.
              </p>
              <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                iure aliquid doloremque sit quasi illum temporibus beatae quod
                qui deserunt aperiam.
              </p>
            </div>
          </div>

          <div class="w-full mt-20 flex items-center justify-between">
            <div>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div>
              <p class="mt-4">Lorem ipsum</p>
              <p class="mt-4">Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
  `;
        container.innerHTML = html;
        download();
      });
  } catch (error) {
    messageParagraph.textContent = "Error loading Certificate";
  }
};

const opt = {
  filename: "myfile.pdf",
  image: { type: "jpg", quality: 0.98 },
  html2canvas: {
    scale: 1,
    backgroundColor: "#232323",
  },
  jsPDF: {
    unit: "px",
    format: [598, 760],
    hotfixes: ["px_scaling"],
    orientation: "portrait",
  },
};

const download = () => {
  html2pdf().set(opt).from(element).save();
};

button.addEventListener("click", () => {
  messageParagraph.textContent = "Loading Certificate...";
  generatePdf();
});
