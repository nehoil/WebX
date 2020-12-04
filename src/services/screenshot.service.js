export const screenshotService = {
    getScreenshot
}

// import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
var htmlToImage = require('html-to-image')

function getScreenshot() {
    var userWebsite = document.getElementByClass('workspace');

    htmlToImage.toPng(userWebsite)
        .then((dataUrl) => {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch((error) => {
            console.error('oops, something went wrong!', error);
        });
}
