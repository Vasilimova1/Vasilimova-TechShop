
console.log("JavaScript подключён!");
document.querySelector("#buy").addEventListener("click", function() {
  document.querySelector("#message").textContent =
    "Отлично! Наушники в корзине.";
});
document.querySelector("#details").addEventListener("click", function() {
  document.querySelector("#info").textContent =
    "Гарантия: 24 месяца. Bluetooth 5.3, до 30 часов работы.";
});
document.querySelector("#delivery").addEventListener("click", function() {
  document.querySelector("#delivery-info").textContent =
    "Доставка по городу — 300 ₽";
});
document.querySelector("#clear").addEventListener("click", function() {
  document.querySelector("#message").textContent = "";
});