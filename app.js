document.addEventListener("DOMContentLoaded", function() {

    // Obtener la referencia al elemento <textarea> usando su ID "input-text"
    const inputText = document.getElementById("input-text");

    // Obtener la referencia al botón de encriptar usando su clase "encrypt-button"
    const EncryptButton = document.querySelector(".encrypt-button");

    // Obtener la referencia al botón de desencriptar usando su clase "desencrypt-button"
    const decryptButton = document.querySelector(".desencrypt-button");

    // Referencia al <p> en la parte derecha
    const outputText = document.getElementById("output-text"); 

    // Función de ejemplo para encriptar el texto utilizando el Cifrado César con un desplazamiento de 3
    function encryptText(text) {
        return text.split('')  
            .map(char => {  
                const code = char.charCodeAt(0);  
                if (code >= 65 && code <= 90) {  
                    return String.fromCharCode(((code - 65 + 3) % 26) + 65);  
                } else if (code >= 97 && code <= 122) {  
                    return String.fromCharCode(((code - 97 + 3) % 26) + 97);  
                }
                return char;  
            })
            .join('');  
    }

    // Función de ejemplo para desencriptar el texto utilizando el Cifrado César con un desplazamiento de -3
    function decryptText(text) {
        return text.split('')
            .map(char => {
                const code = char.charCodeAt(0);
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 - 3 + 26) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 - 3 + 26) % 26) + 97);
                }
                return char;
            })
            .join('');
    }
    
    function updateOutput(message) {
        outputText.innerHTML = message;
    }

    // Añadir un evento de clic al botón de encriptar
    EncryptButton.addEventListener("click", function() {
        const text = inputText.value.trim();
        if (text === "") {
            updateOutput("<strong>No hay datos para encriptar.</strong>");
        } else {
            const encryptedText = encryptText(text);
            updateOutput(`<strong>Texto encriptado:</strong><br>${encryptedText}`);
        }
    });

    // Añadir un evento de clic al botón de desencriptar
    decryptButton.addEventListener("click", function() {
        const text = inputText.value.trim();
        if (text === "") {
            updateOutput("<strong>No hay datos para desencriptar.</strong>");
        } else {
            const decryptedText = decryptText(text);
            updateOutput(`<strong>Texto desencriptado:</strong><br>${decryptedText}`);
        }
    });
});
//..