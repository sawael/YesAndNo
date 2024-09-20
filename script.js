const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const meFaceSad = document.getElementById('meFaceSad');
const response = document.getElementById('response');

noBtn.addEventListener('click', () => {
    // Generate random positions for the "No" button
    const randomX = Math.floor(Math.random() * window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight - noBtn.offsetHeight);
    
    // Ensure button stays on the screen
    const adjustedX = Math.max(0, Math.min(randomX, window.innerWidth - noBtn.offsetWidth));
    const adjustedY = Math.max(0, Math.min(randomY, window.innerHeight - noBtn.offsetHeight));
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${adjustedX}px`;
    noBtn.style.top = `${adjustedY}px`;
});

yesBtn.addEventListener('click', () => {
    response.textContent = 'I still love you more!';
    meFaceSad.src = '0633E327-7E5A-44B2-A579-ABF66B73268F.PNG';
});