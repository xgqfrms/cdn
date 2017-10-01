// utils.js
export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}

// https://github.com/gildata/RAIO/issues/178#issuecomment-333373464
