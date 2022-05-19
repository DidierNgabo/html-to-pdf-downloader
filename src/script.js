const messageParagraph = document.getElementById("message");
const button = document.querySelector("#btn");
const container = document.querySelector("#container");

// making api request to lorem picsum

const generatePdf = () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        const html = `
        <div class="w-4/5 m-4 mx-auto">
        <div id="element" class="bg-[url('background.jpg')] p-6">
          <div class="p-2 bg-[#D5DFCC]">
            <img
              src="grow_my_tree.png"
              class="w-2/5 mx-auto"
              alt="grow my tree logo"
            />
  
            <h3
              class="capitalize font-sans text-[#1D2D1D] mt-6 text-5xl text-center font-bold"
            >
              Baum-Zertificat
            </h3>
  
            <h4 class="text-[#6F894C] mt-4 text-center">Lorem, ipsum.</h4>
            <p class="text-[#1D2D1D] mt-4 text-center">
              hat
              <span class="text-[#708C53] font-bold text-3xl">1 baum</span>
              gepflanzt
            </p>
            <h3 class="capitalize mt-4 text-[#1D2D1D] text-lg text-center">
              Lorem, ipsum dolor.
            </h3>
            <div class="w-full p-3 flex items-start justify-between">
              <div class="">
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                  iure aliquid doloremque sit quasi illum temporibus beatae quod
                  qui deserunt aperiam Lorem ipsum dolor sit amet consectetur..
                </p>
                <div class="mt-4">
                  <p class="mt-4">
                    rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                    iure aliquid:
                  </p>
                  <ul class="mt-8">
                  <li class="text-[#6F894C] mt-4">
                  <i class="fa-solid fa-check"></i>
                  <span class="inline ml-4">Lorem ipsum dolor sit amet.</span>
                </li>
                <li class="text-[#6F894C] mt-4">
                  <i class="fa-solid fa-check"></i>
                  <span class="inline ml-4">Lorem ipsum dolor sit amet.</span>
                </li>
                <li class="text-[#6F894C] mt-4">
                  <i class="fa-solid fa-check"></i>
                  <span class="inline ml-4">Lorem ipsum dolor sit amet.</span>
                </li>
                <li class="text-[#6F894C] mt-4">
                  <i class="fa-solid fa-check"></i>
                  <span class="inline ml-4">Lorem ipsum dolor sit amet.</span>
                </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                  iure aliquid doloremque sit quasi illum temporibus beatae quod
                  qui deserunt aperiam.
                </p>
                <p class="mt-4">
                  ${post.body}
                </p>
  
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                  rem obcaecati quia quisquam eius alias, illo nesciunt facilis
                  iure aliquid doloremque sit quasi illum temporibus beatae quod
                  qui deserunt aperiam.
                </p>
              </div>
            </div>
  
            <div class="w-full mt-20 flex items-center justify-between">
              <div>
                <p>Lorem, ipsum.</p>
                <p>CEO/FOUNDER</p>
                <p class="underline text-[#6F894C]">growmytree.com</p>
              </div>
              <div>
                <p class="mt-4 text-[#6F894C]">Berlin,20.07.2021</p>
                <img src="signature.png" class="w-52" alt="signature" />
              </div>
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
    format: [698, 1060],
    hotfixes: ["px_scaling"],
    orientation: "portrait",
  },
};

const download = () => {
  //html2pdf().set(opt).from(element).save();

  var zip = new JSZip();
  zip.file("certificate.pdf", html2pdf().from(element).set(opt).output("blob"));
  zip
    .generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 9 },
    })
    .then((res) => saveAs(res, "GMTCertificate.zip"));
};

button.addEventListener("click", () => {
  messageParagraph.textContent = "Loading Certificate...";
  generatePdf();
});
