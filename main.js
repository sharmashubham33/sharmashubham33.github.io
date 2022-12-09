let encryptbtn = document.querySelector('#encryptbtn').addEventListener('click', encrypt);

let decryptbtn = document.querySelector('#decryptbtn').addEventListener('click', decrypt);

let textOutput = document.querySelector('#textOutput');

textOutput.style.display = "none";

function encrypt() {
  let str = document.querySelector('#textInput').value;

  let shift = document.querySelector('#shiftInput').value;

  shift = parseInt(shift);

  lowerAlp = 'abcdefghijklmnopqrstuvwxyz';

  upperAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let newStr = [];

  let letters = str.split('');

  for (let i = 0; i < letters.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      newStr += upperAlp.charAt((upperAlp.indexOf(letters[i]) + shift) % 26);
    }

    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      newStr += lowerAlp.charAt((lowerAlp.indexOf(letters[i]) + shift) % 26);
    }

    else {
      newStr += str[i];
    }
  }

  textOutput.style.display = "block";
  textOutput.innerHTML = `<h3>Encrypted text is-</h3>
                          <br>
                          <h5>${newStr}</h5>`;
}



function decrypt() {
  let str = document.querySelector('#textInput').value;

  let shift = document.querySelector('#shiftInput').value;

  lowerAlp = 'abcdefghijklmnopqrstuvwxyz';

  upperAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let newStr = [];

  let letters = str.split('');

  for (let i = 0; i < letters.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if (((upperAlp.indexOf(letters[i]) - shift) % 26) < 0) {
        newStr += upperAlp.charAt(((upperAlp.indexOf(letters[i]) - shift) % 26) + 26);
      }
      else {
        newStr += upperAlp.charAt((upperAlp.indexOf(letters[i]) - shift) % 26);
      }
    }

    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      if (((lowerAlp.indexOf(letters[i]) - shift) % 26) < 0) {
        newStr += lowerAlp.charAt(((lowerAlp.indexOf(letters[i]) - shift) % 26) + 26);
      }
      else {
        newStr += lowerAlp.charAt((lowerAlp.indexOf(letters[i]) - shift) % 26);
      }
    }

    else {
      newStr += str[i];
    }
  }

  textOutput.style.display = "block";
  textOutput.innerHTML = `<h3>Decrypted text is-</h3>
                          <br>
                          <h5>${newStr}</h5>`;
}
