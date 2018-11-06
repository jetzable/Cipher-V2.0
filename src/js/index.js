const originalMessage = document.getElementById("originalMessage");
const cipherKey = document.getElementById("offset");
const encryptBtn = document.getElementById("cipher-button");
const decryptBtn = document.getElementById("decipher-button");

encryptBtn.addEventListener("click", event => {
  event.preventDefault();
  if (originalMessage.value === "" || cipherKey.value === "") {
    swal({
      title: "¡Cifra tu Mensaje!",
      text: "Se requiere un mensaje y la clave para cifrarlo.",
      icon: "info"
    });
  }
  const offset = parseInt(cipherKey.value) % 26;
  const string = originalMessage.value;
  originalMessage.value = " ";
  cipher.encode(offset, string);
});

decryptBtn.addEventListener("click", event => {
  event.preventDefault();
  if (originalMessage.value === "" || cipherKey.value === "") {
    swal({
      title: "¡Descifra tu Mensaje!",
      text: "Se requiere el mensaje y la clave para descifrarlo.",
      icon: "info"
    });
  }
  const offset = parseInt(cipherKey.value) % 26;
  const string = originalMessage.value;
  originalMessage.value = " ";
  cipher.decode(offset, string);
});
