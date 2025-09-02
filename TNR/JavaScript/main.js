const cam = document.querySelector('#video');
Promise.all([ 
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo);

async function startVideo() {
    const constraints = { video: true };

    try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints);

        cam.srcObject = stream;
        cam.onloadedmetadata = e => {
            cam.play();
        };

    } catch (err) {
        console.error(err);
    }
}

cam.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(cam);
    document.body.append(canvas);

    const displaySize = { width: cam.width, height: cam.height };

    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => { 
        const detections = await faceapi.detectAllFaces(
            cam,
            new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks() 
        .withFaceExpressions();

        if (detections.length > 0) {
            const expressions = detections[0].expressions;

            // Armazenando cada expressão facial em uma variável separada
            const happy = expressions.happy;
            const sad = expressions.sad;
            const angry = expressions.angry;
            const surprised = expressions.surprised;
            const fearful = expressions.fearful;
            const disgusted = expressions.disgusted;
            const neutral = expressions.neutral;

            if (happy > 0.99) {
                localStorage.setItem("resul", "PERDEU");
                window.open("fim.html", "_self");
            } else {
                localStorage.setItem("resul", "GANHOU");
                setTimeout (function () {
                    window.open("fim.html", "_self");
                }, 60000);
            }
        }

        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
    
});

