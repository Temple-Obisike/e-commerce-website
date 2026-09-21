const cartContainer = document.getElementById("cart-container");
const signupContainer = document.getElementById("sign-up-container");
const signupDOM = document.getElementById("sign-up");
signupDOM.addEventListener("click", () => {
  signupContainer.classList.add("hidden");
});
// const cart =[
//     {name}
// ]
// console.log(arrivalProducts);

// arrivalProducts.map((e, i) => {
//   cartContainer.insertAdjacentHTML(
//     "beforeend",
//     `<div class="flex gap-2">
//             <img
//               src="assets/images/new-arrival-checkered-shirt.png"
//               alt=""
//               width="100"
//             />
//             <div class="flex justify-between gap-2 w-full">
//               <div class="flex flex-col items-start gap-1 leading-4 text-start">
//                 <p class="font-bold">Gradient Graphic T-shirt</p>
//                 <p>Size: <span class="text-gray-300">large</span></p>
//                 <p>Color: <span class="text-gray-300">white</span></p>
//                 <p class="font-bold text-2xl mt-3.5">$145</p>
//               </div>
//               <div class="flex flex-col justify-between relative items-end">
//                 <img
//                   src="assets/images/trash-bin-icon.png"
//                   alt=""
//                   width="25"
//                   class=" "
//                 />
//                 <div
//                   class="p-2.5 flex justify-between items-center bg-gray-400 rounded-2xl w-28"
//                   id="cart-item-button-add-remove"
//                 >
//                   <button id="cart-item-button-remove">-</button>
//                   <p>1</p>
//                   <button id="cart-item-button-add">+</button>
//                 </div>
//               </div>
//             </div>
//           </div>`,
//   );
// });
