
    const apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY';

    document.getElementById('enFlag').addEventListener('click', () => translatePage('en'));
    document.getElementById('deFlag').addEventListener('click', () => translatePage('de'));
    document.getElementById('brFlag').addEventListener('click', () => location.reload());

    function translatePage(targetLang) {
        const elementsToTranslate = document.querySelectorAll('h1, h2, h3, p, a, button, span');
        
        elementsToTranslate.forEach(element => {
            const text = element.innerText;
            translateText(text, targetLang).then(translatedText => {
                element.innerText = translatedText;
            });
        });
    }

    async function translateText(text, targetLang) {
        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                target: targetLang,
                format: 'text'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.data.translations[0].translatedText;
    }
