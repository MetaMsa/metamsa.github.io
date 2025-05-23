var count = 1;

function yes() {
  text = document.getElementById("mainText");

  text.innerHTML = "Evet diyeceğini biliyordummmmm! <br> Teşekkür Ederim";

  document.getElementById("yes").style.display = "none";
  document.getElementById("no").style.display = "none";

  document.getElementById("bugcat").src = "ee9bf7b4bc7cd64143586bf87d7bae81.gif";
}

function no() {
  if (count == 1) {
    document.getElementById("yes").style.width = "300px";
    document.getElementById("yes").style.height = "200px";

    document.getElementById("no").innerHTML = "Emin Misin?";
  }
  if (count == 2) {
    document.getElementById("yes").style.width = "400px";
    document.getElementById("yes").style.height = "300px";

    document.getElementById("no").innerHTML = "Gerçekten Emin Misin?";
  }
  if (count == 3) {
    document.getElementById("yes").style.width = "500px";
    document.getElementById("yes").style.height = "400px";

    document.getElementById("no").innerHTML =
      "Tam Olarak Emin Olduğunu Söyleyebilir Misin?";
  }
  if (count == 4) {
    document.getElementById("yes").style.width = "600px";
    document.getElementById("yes").style.height = "700px";

    document.getElementById("no").innerHTML = "Bir daha düşün lütfen!";
  }
  if (count == 5) {
    document.getElementById("yes").style.width = "800px";
    document.getElementById("yes").style.height = "700px";

    document.getElementById("no").innerHTML = "Hayır dersen çok üzülürüm...";
  }
  if (count == 6) {
    document.getElementById("yes").style.width = "900px";
    document.getElementById("yes").style.height = "800px";

    document.getElementById("no").innerHTML = "Gerçekten çok üzülürüm...";
  }
  if (count == 7) {
    document.getElementById("yes").style.width = "1000px";
    document.getElementById("yes").style.height = "900px";

    document.getElementById("no").innerHTML = "Çok ama çok üzülürüm...";
  }
  if (count == 8) {
    document.getElementById("yes").style.width = "1100px";
    document.getElementById("yes").style.height = "1000px";

    document.getElementById("no").innerHTML =
      "Peki tamam, artık sormayacağım...";
  }
  if (count == 9) {
    document.getElementById("yes").style.width = "1200px";
    document.getElementById("yes").style.height = "1100px";

    document.getElementById("no").innerHTML = "Emin Misin?";

    document.getElementById("no").style.display = "none";
  }

  count++;
}
