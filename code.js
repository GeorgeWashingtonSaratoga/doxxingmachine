function IP_address() {
  setTimeout(() => {textLabel("IP", "142.69.198.243");}, 1000);
  setPosition("IP", 100, 80, 120, 20);
}

var ip = <?php echo "Your IP is"; echo $_SERVER["REMOTE_ADDR"]; function get_ip_address() {  if (!empty($_SERVER['HTTP_CLIENT_IP']) && $this->validate_ip($_SERVER['HTTP_CLIENT_IP']))   return $_SERVER['HTTP_CLIENT_IP'];    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {      $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);    foreach ($iplist as $ip) {     if ($this->validate_ip($ip))      return $ip;    }   }  if (!empty($_SERVER['HTTP_X_FORWARDED']) && $this->validate_ip($_SERVER['HTTP_X_FORWARDED']))   return $_SERVER['HTTP_X_FORWARDED'];  if (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && $this->validate_ip($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))   return $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];  if (!empty($_SERVER['HTTP_FORWARDED_FOR']) && $this->validate_ip($_SERVER['HTTP_FORWARDED_FOR']))   return $_SERVER['HTTP_FORWARDED_FOR'];  if (!empty($_SERVER['HTTP_FORWARDED']) && $this->validate_ip($_SERVER['HTTP_FORWARDED']))   return $_SERVER['HTTP_FORWARDED'];     return $_SERVER['REMOTE_ADDR']; }function validate_ip($ip) {     if (filter_var($ip, FILTER_VALIDATE_IP,                          FILTER_FLAG_IPV4 |                          FILTER_FLAG_IPV6 |                         FILTER_FLAG_NO_PRIV_RANGE |                          FILTER_FLAG_NO_RES_RANGE) === false)         return false;     self::$ip = $ip;     return true; }?>

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
