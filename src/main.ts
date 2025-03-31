import CryptoJS from "crypto-js";

const decrypt = (ciphertext: string, iv: any) => {
  return CryptoJS.AES.decrypt(ciphertext, "twelve--feedback", {
    mode: CryptoJS.mode.CBC,
    iv: iv,
  });
};

document.getElementById("submit")!.onclick = () => {
  const input = document.getElementById("emailData") as HTMLTextAreaElement;
  const output = document.getElementById("decryptedData") as HTMLPreElement;
  const iv = input.value.trim().split("||")[1];
  const ciphertext = input.value.trim().split("||")[0];
  const decrypted = decrypt(ciphertext, iv);
  output.textContent = JSON.stringify(
    JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)),
    null,
    2
  );
};
