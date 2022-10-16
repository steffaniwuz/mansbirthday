var musik = "";

AOS.init({
  once: true,
});

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1000);
}

function wa(isi) {
  window.open(
    "https://twitter.com/sanguineyeon    " +
      isi
  );
}
async function tanya() {
  var { value: kado } = await swal.fire({
    title: "is there a message you want to convey to me?",
    input: "text",
    showCancelButton: false,
  });
  if (kado) {
    await swal.fire("send the message to my direct message okay.");
    wa(kado);
  } else {
    await swal.fire("don't leave the answer blank😡 ");
    tanya();
  }
}
