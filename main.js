function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function startMusic() {
    song1.play()
    song1.setVolume(0.5)
    song1.rate(1)
}

function draw() {
    image(video, 0, 0, 600, 450);
}