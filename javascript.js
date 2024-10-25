function upDate(previewPic) {
    // Console log to check if event triggers and to print alt and src
    console.log("Event Triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Image Source:", previewPic.src);

    // Change the background image and text of the element with id 'image'
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function undo() {
    // Reset background image and text of the element with id 'image'
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
