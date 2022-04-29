let randomBtn = document.getElementById('random-res')


randomBtn.addEventListener('click', () => {
    let restaurants = ['remedy', 'dennys','pennys diner', 'arctic circle', 'broadway burger', 'china buffet', 'siam king']
    const random = Math.floor(Math.random() * restaurants.length);
   alert(restaurants[random])
})