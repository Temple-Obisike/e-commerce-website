const categoryCasualContainerDOM = document.getElementById(
  "category-casual-container",
);
const colorContainerDOM = document.getElementById("color-option-container");
const categoryPageSideMenuTune = document.getElementById(
  "categorypage-side-menu-tune",
);
const categoryPageSideMenuClose = document.getElementById(
  "categorypageside-menu-close",
);
const categoryPageSideAside = document.getElementById("categorypage-aside");
const hamburger = document.getElementById("hamburger");
// const signupContainer = document.getElementById("sign-up-container");
// const signupDOM = document.getElementById("sign-up");
// signupDOM.addEventListener("click", () => {
//   signupContainer.classList.add("hidden");
// });
const categories = [
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    img: "./assets/images/gradient-graphic-T-shirt.png",
    price: 145,

    star: 4,
  },
  {
    id: 1,
    name: "Polo with Contrast Trims",
    img: "./assets/images/polo-with-tipping-details.png",
    price: 212,
    oldPrice: 242,
    discountValue: -20,
    star: 4,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    img: "./assets/images/black-striped-shirt.png",
    price: 180,
    star: 4,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    img: "./assets/images/new-arrival-jeans.png",
    price: 240,
    oldPrice: 260,
    discountValue: 20,
    star: 3.5,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    img: "./assets/images/new-arrival-checkered-shirt.png",
    price: 180,
    star: 4.5,
  },
  {
    id: 4,
    name: "Sleeve Striped T-Shirt",
    img: "./assets/images/new-arrival-sleeve-striped-shirt.png",
    price: 130,
    oldPrice: 160,
    star: 5.0,
  },
  {
    id: 5,
    name: "Vertical Striped T-Shirt",
    img: "./assets/images/top-selling-vertical-striped-shirt.png",
    price: 212,
    oldPrice: 232,
    discountValue: 2,
    star: 5.0,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    img: "./assets/images/top-selling-courage-graphic-shirt.png",
    price: 145,
    star: 4.0,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    img: "./assets/images/top-selling-bermuda-shorts.png",
    price: 80,
    star: 3.0,
  },
];
const colorOption = [
  { color: "green" },
  { color: "red" },
  { color: "yellow" },
  { color: "orange" },
  { color: "cyan" },
  { color: "purple" },
  { color: "pink" },
  { color: "white" },
  { color: "black" },
];

// console.log(categoryCasualContainerDOM);
categories.map((e, i) => {
  categoryCasualContainerDOM.insertAdjacentHTML(
    "beforeend",
    `       <div id=${i} class="flex flex-col justify-center items-start">
            <img src= ${e.img} alt="" />
            <p id="name" class="font-bold">${e.name}</p>
            <div id="star-container" class="flex gap-1">
              <svg
                class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <div class='flex gap-2 justify-between items-center '>
            <p class="text-2xl font-bold">$${e.price}</p>
            <p class="text-2xl font-bold ${e.oldPrice ? "line-through text-gray-400" : "hidden"}">$${e.price}</p>
            <p class="text-red-600 bg-red-300 p-2 rounded-2xl ${e.discountValue ? "" : "hidden"}">$${e.discountValue}</p>
            </div>
          </div>`,
  );
});

categoryPageSideMenuClose.addEventListener("click", () => {
  categoryPageSideAside.classList.toggle("hidden");
  console.log(categoryPageSideAside);
  console.log("yeah");
});
hamburger.addEventListener("click", () => {
  categoryPageSideAside.classList.remove("hidden");
});
// console.log(categoryPageSideAside);
// console.log(categoryPageSideMenuClose);
// console.log(categoryPageSideMenuTune);
