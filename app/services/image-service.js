import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  fetchPicture() {
    imgApi.get().then(res => {
      let data = res.data
      store.commit("image", { url: data.url, site: data.site })
    }).catch(err => console.error(err));
  }
}

const imageService = new ImageService();
export default imageService;
