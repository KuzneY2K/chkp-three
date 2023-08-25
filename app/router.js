import { HomeController } from "./controllers/HomeController.js";
import { HomeView } from "./views/HomeView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: HomeView
  }
]