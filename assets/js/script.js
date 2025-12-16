const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');


hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle('show');
});


document.querySelectorAll(".projet").forEach(element => {
  element.addEventListener("click", (e) => {
    window.location.assign(e.currentTarget.dataset.href)
  });
});


(function () { emailjs.init("TnmBgEO48Ras3Mx2A"); })();


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();


  emailjs.sendForm("service_puz62bb", "template_j4ih258", this).then(
    function () {
      document.getElementById("status").innerHTML = "<p class='success'>Message envoyé avec succès !</p>";
      document.getElementById("contact-form").reset();
    },
    function (error) {
      document.getElementById("status").innerHTML = "<p class='error'>Erreur lors de l'envoi.</p>";
      console.error(error);
    }
  );
});