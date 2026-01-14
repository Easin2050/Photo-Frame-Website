// Elements
const imageUpload = document.getElementById('imageUpload');
const userImage = document.getElementById('user-image');
const userImagePreview = document.getElementById('user-image-preview');
const frameOverlay = document.getElementById('frame-overlay');
const frames = document.querySelectorAll('.frame-option');

// Upload image
imageUpload.addEventListener('change', function(e){
    const file = e.target.files[0];
    if(file){
        const url = URL.createObjectURL(file);
        userImage.src = url;
        userImagePreview.src = url;
    }
});

// Zoom
document.getElementById('zoom-in').addEventListener('click', () => {
    userImage.style.width = (userImage.offsetWidth * 1.1) + 'px';
    userImagePreview.style.width = userImage.style.width;
});
document.getElementById('zoom-out').addEventListener('click', () => {
    userImage.style.width = (userImage.offsetWidth * 0.9) + 'px';
    userImagePreview.style.width = userImage.style.width;
});

// Frame selection
frames.forEach(frame => {
    frame.addEventListener('click', () => {
        frameOverlay.src = frame.src;
    });
});
