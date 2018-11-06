window.cipher = {
  encode: (offset, string) => {
    const newMessage = [];
    const finalMessage = [];
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) === 32) {
        newMessage[i] = finalMessage[i] = String.fromCharCode(32);
      } else {
        if (string.charCodeAt(i) > 90) {
          newMessage[i] = ((string.charCodeAt(i) - 97 + offset) % 26) + 97;
          finalMessage[i] = String.fromCharCode(newMessage[i]);
        } else {
          newMessage[i] = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
          finalMessage[i] = String.fromCharCode(newMessage[i]);
        }
      }
      document.getElementById("originalMessage").value += finalMessage[i];
    }
  },

  decode: (offset, string) => {
    let newMessage = [];
    let finalMessage = [];
    for (i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) == 32) {
        newMessage[i] = String.fromCharCode(32);
        finalMessage[i] = newMessage[i];
      } else {
        if (string.charCodeAt(i) > 90) {
          if (string.charCodeAt(i) - 97 - offset < 0) {
            newMessage[i] = ((string.charCodeAt(i) - 97 - offset) % 26) + 123;
            finalMessage[i] = String.fromCharCode(newMessage[i]);
          } else {
            newMessage[i] = ((string.charCodeAt(i) - 97 - offset) % 26) + 97;
            finalMessage[i] = String.fromCharCode(newMessage[i]);
          }
        } else {
          if (string.charCodeAt(i) - 65 - offset < 0) {
            newMessage[i] = ((string.charCodeAt(i) - 65 - offset) % 26) + 91;
            finalMessage[i] = String.fromCharCode(newMessage[i]);
          } else {
            newMessage[i] = ((string.charCodeAt(i) - 65 - offset) % 26) + 65;
            finalMessage[i] = String.fromCharCode(newMessage[i]);
          }
        }
      }
      document.getElementById("originalMessage").value += finalMessage[i];
    }
  }
};
