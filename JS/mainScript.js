//preloader

// document.addEventListener('DOMContentLoaded', () => {

//   const mediaFiles = document.querySelectorAll('img, video');
//   let i = 0
//  console.log(mediaFiles)
//   Array.from(mediaFiles).forEach((file, i) => {
//       file.onload = () => {
//           i++

//           percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

//           if(i === mediaFiles.length) {
//               preloader.classList.add('preloader--hide')
//               percents.innerHTML = 100
//           }
//       }
//   })

// })

// function myFunction() {
//   const body = document.body;
//   body.style.position = 'fixed';
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//       const body = document.body;
//       body.style.position = '';
//       body.style.top = '';
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//               openDropdown.classList.remove('show');
//           }
//       }
//   }
// }

// popup
// let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
// let popup = document.querySelector(".popup"); // Само окно
// let popupSuc = document.querySelector(".popup_suc"); // Окно успешно!
// let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
// let openSucButtons = document.querySelector(".send"); // Кнопки для показа окна
// let closePopupButton = document.querySelector(".close-popup");
// let closeSucButton = document.querySelector(".close-popup2");
// let closeSucButton2 = document.getElementById("close");

// openPopupButtons.forEach((button) => {
//   // Перебираем все кнопки
//   button.addEventListener("click", (e) => {
//     // Для каждой вешаем обработчик событий на клик
//     e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//     popupBg.classList.add("active"); // Добавляем класс 'active' для фона
//     popup.classList.add("active"); // И для самого окна
//     const body = document.body;
//     body.style.overflowY = "hidden";
//   });
// });

// closePopupButton.addEventListener("click", () => {
//   // Вешаем обработчик на крестик
//   popupBg.classList.remove("active"); // Убираем активный класс с фона
//   popup.classList.remove("active"); // И с окна
//   popupSuc.classList.remove("active");
//   const body = document.body;
//   body.style.height = "";
//   body.style.overflowY = "";
// });

// closeSucButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   popupBg.classList.remove("active"); // Убираем активный класс с фона
//   popup.classList.remove("active");
//   popupSuc.classList.remove("active");
//   const body = document.body;
//   body.style.height = "";
//   body.style.overflowY = "";
// });
// closeSucButton2.addEventListener("click", () => {
//   // Вешаем обработчик на крестик
//   popupBg.classList.remove("active"); // Убираем активный класс с фона
//   popupSuc.classList.remove("active");
//   const body = document.body;
//   body.style.height = "";
//   body.style.overflowY = "";
// });

// document.addEventListener("click", (e) => {
//   // Вешаем обработчик на весь документ
//   if (e.target === popupBg) {
//     // Если цель клика - фон, то:
//     popupBg.classList.remove("active"); // Убираем активный класс с фона
//     popup.classList.remove("active"); // И с окна
//     popupSuc.classList.remove("active");
//     const body = document.body;
//     body.style.height = "";
//     body.style.overflowY = "";
//   }
// });
// popup

//tel input

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(
    document.querySelectorAll(".main_info_form-tel"),
    function (input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
        console.log(this.value.length);
        if (this.value.length == 17) {
          openSucButtons.removeAttribute("disabled");
          openSucButtons.addEventListener("click", (e) => {
            e.preventDefault();
            popupSuc.classList.add("active");
            popup.classList.remove("active");
            this.value = "";
          });
        } else {
          openSucButtons.setAttribute("disabled", true);
        }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
});

//disable overflow when menu opened

// const burger = document.getElementById("burger-toggle");
// const mobileMenu = document.querySelector(".menu");



// burger.addEventListener("click", () => {
//   const body = document.body;
//   body.classList.toggle ("is-menu-open");
// });






