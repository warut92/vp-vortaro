let disigitaj_vortoj = ""
function sercxi() {
  let cxiuj_vortoj = document.getElementById("vortaro");
  let cxiuj_vortoj_HTML = cxiuj_vortoj.innerHTML;
  disigitaj_vortoj = cxiuj_vortoj_HTML.split(/\n/g);

  //forigi malplenajn ĉenojn
  disigitaj_vortoj = disigitaj_vortoj.filter(n => n)

  console.log(disigitaj_vortoj);

  document.getElementById('nombro').innerText = disigitaj_vortoj.length + " vortoj. Laste ŝanĝita " + document.lastModified

  let vortoj_Arr, i;
  for (i = 0; i < disigitaj_vortoj.length; i++) {
    vortoj_Arr = disigitaj_vortoj[i];
  }
  let str_sxablono = document.getElementById("input").value;
  let sxablono_regex = new RegExp(`${str_sxablono}`, "gi");
  let rezulto = disigitaj_vortoj.filter(function (str) {
    return sxablono_regex.test(str);
  });

  if (str_sxablono === "") {
    rezulto = "serĉu la vorton en ĉi tiu vortaro!";
    return document.getElementById("output").innerHTML = "<hr>" + rezulto;
  }

  let sercxitaj_vortoj = rezulto.toString().replace(/,(?!\s)/g, "<br><hr>");

  sercxitaj_vortoj = sercxitaj_vortoj.replace(
    new RegExp(`${str_sxablono}`, "gi"),
    "<b><u>" + str_sxablono + "</u></b>"
  );

  if (sercxitaj_vortoj !== "") {
    document.getElementById("output").innerHTML = "<hr>" + sercxitaj_vortoj;
  } else document.getElementById("output").innerHTML = "<hr>" + "ne estas la vorto <i>\"" + str_sxablono + "\"</i> en ĉi tiu vortaro! <br> bonvolu aldoni ĝin ĉe  <a href=\"https://github.com/warut92/vp-vortaro/blob/main/index.html\"> Github </a>";
}

function aperigi() {
  var x = document.getElementById("klavaro");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function enigi(litero) {
  document.getElementById('input').value += litero;
  sercxi();
}
sercxi();

//montri ĉiujn vortojn.
function montri() {
document.write(disigitaj_vortoj.toString().replace(/,(?!\s)/g, "<br><hr>"))
document.body.style.backgroundColor = "black"
document.body.style.color = "white"
}
