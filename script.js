const artworks = [
    {
        title: "Starry Night",
        artist: "Vincent van Gogh",
        image: "images/1.png"
    },
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        image: "images/2.png"
    },
    {
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        image: "images/3.png"
    },
    // Add more artwork objects as needed
];

const gallery = document.getElementById('gallery');

artworks.forEach(artwork => {
    const artworkDiv = document.createElement('div');
    artworkDiv.classList.add('artwork');

    artworkDiv.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}">
        <div class="artwork-info">
            <h3>${artwork.title}</h3>
            <p>${artwork.artist}</p>
        </div>
    `;

    gallery.appendChild(artworkDiv);
});
