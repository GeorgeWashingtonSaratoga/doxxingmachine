function IP_address() {
  textLabel("IP", "142.69.198.243");
  setPosition("IP", 100, 80, 120, 20);
}
onEvent("licensing", "click", function(license) {
  setScreen("licensingscreen");
});
onEvent("starter", "click", function(begindoxxing) {
  setScreen("doxxingscreen");
  playSound("assets/Grubhub-Delivery-Dance-Song---Bomba-Este--reo---Soy-Yo.mp3", true);
  setPosition("image2", 135, 200, 50, 50);
  showElement("image2");
  setPosition("image2", 110, 175, 100, 100);
  setPosition("image2", 85, 150, 150, 150);
  setPosition("image2", 60, 125, 200, 200);
  IP_address();
  playSound("https://www.youtube.com/watch?v=vCbjzFZJrlA", true);
  playSpeech("one four two six nine one nine eight two four three!", "female", "Italiano");
});
onEvent("button3", "click", function( ) {
  setScreen("Menu");
});
onEvent("crash", "click", function( ) {
  open("https://whatismyipaddress.com/");
});
