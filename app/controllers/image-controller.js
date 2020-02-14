import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _draw() {
  let image = store.State.image
  document.querySelector('body').style.backgroundImage = `url(${image.url})`
  document.getElementById("image-source").innerText = image.site
}
export default class ImageController {
  constructor() {
    store.subscribe("image", _draw)
    ImageService.fetchPicture()
  }
}
