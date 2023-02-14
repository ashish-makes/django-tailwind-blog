// document.addEventListener("DOMContentLoaded", function (event) {
//   let sc = document.createElement('script');
//   sc.setAttribute('src', 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js');

//   document.head.appendChild(sc);

//   sc.onload = () => {
//     tinymce.init({
//       selector: '#id_content'
//     });
//   }
// })

// const toggleButton = document.querySelector('.nav-btn');
// const navbarContent = document.querySelector('.mob-nav');

// toggleButton.addEventListener('click', () => {
//   if (navbarContent.classList.contains('hidden')) {
//     navbarContent.classList.replace('hidden', 'flex');
//   } else {
//     navbarContent.classList.replace('flex', 'hidden');
//   }
// });

//  // Show Search Modal
//  document.querySelector(".searchBtn").addEventListener("click", function() {
//   document.querySelector(".searchModal").style.display = "block";
// });

//   // Show Search Modal
//   document.querySelector(".searchBtn1").addEventListener("click", function() {
//   document.querySelector(".searchModal").style.display = "block";
//   });

// // Hide Search Modal
// document.querySelector(".searchCloseBtn").addEventListener("click", function() {
//   document.querySelector(".searchModal").style.display = "none";
// });

// // Submit Search Form
// document.querySelector(".searchSubmitBtn").addEventListener("click", function(event) {
//  const searchInput = document.querySelector(".searchInput");
//  const searchQuery = searchInput.value;
//  window.open("/search/?q="+searchQuery);
// });