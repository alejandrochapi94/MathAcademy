window.addEventListener("load", function() {
  var helpMessage = document.querySelector(".help-message");
  setTimeout(function() {
    helpMessage.classList.add("show");
    setTimeout(function() {
      helpMessage.classList.remove("show");
    }, 3000); // ajusta el valor para que se muestre durante 3 segundos
  }, 2000); // ajusta el valor para que se muestre después de 2 segundos
});