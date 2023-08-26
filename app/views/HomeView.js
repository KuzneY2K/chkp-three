import { AppState } from "../AppState.js";

export const HomeView = /*HTML*/ `  <main class="container-fluid p-0 m-0">
    <!-- Main Content -->
    <section class="row p-0 m-0 main-row">
      <div class="col-12 p-0 m-0 bg-primary bg-gradient">
        <section class="row p-0 m-0 note-container-row p-5 mt-5">
          <div class="col-12 col-md-3 offset-md-1 note-info rounded bg-primary bg-opacity-25 shadow border border-3 border-light">
            <!-- jot title -->
            <h3 class="p-0 m-0 my-3 text-light jot-title">PLACEHOLDER TITLE</h3>
            <div class="vitals-tracker d-flex flex-column align-items-start">
              <!-- created time stamp -->
              <span id="created-time" class="mb-2 text-light"><span><i class="mdi mdi-pen-plus"></i></span>
                Time
                Stamp Created
                At</span>
              <!-- updated time stamp -->
              <span id="updated-item" class="mb-2 text-light">Time Stamp Updated At <i
                  class="mdi mdi-reload"></i></span>
              <!-- word / char counter -->
              <span id="word-char-track" class="mb-2 text-light"><i class="mdi mdi-file-word"></i> Word/Character
                Counter</span>
            </div>
          </div>
          <div class="col-12 col-md-7 rounded bg-opacity-25 text-center shadow jot-bg">
            <h2 class="p-0 m-0 my-3 jot-title text-light"><span><i class="mdi mdi-pen"></i></span> Jot Something Down... <span><i
                  class="mdi mdi-file"></i></span></h2>
            <!-- text area -->
            <form onsubmit="app.HomeController.editJot()">
            <textarea name="jotTextArea" placeholder="Type here...." id="jotTextArea" name="content" cols="95" rows="16" class="m-0 p-0 shadow form-control"></textarea>
            <div class="save-btn-container d-flex justify-content-center">
              <button class="btn btn-primary mt-3 save-jot-btn">Save Jot</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
    <!-- Off Canvas -->
    <!-- Button -->
    <button class="btn btn-primary position-absolute mt-3 ms-3 myjots-btn" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#jotOffCanvas" aria-controls="jotOffCanvas" id="myjots-btn">
      MY JOTS
    </button>
    <!-- Button -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="jotOffCanvas" aria-labelledby="jotOffCanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="jotOffCanvasLabel">JOTS: <span id="jot-counter"></span></h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
            <div class="offcanvas-body">
                <div class="p-0 m-0">
                    <form onsubmit="app.HomeController.createJot()">
                    <input type="text"
                                placeholder="JOT NAME" class="form-control" name="name" id='jot-name-input' required>
                        <div class="d-flex flex-row">
                            <button class="btn btn-danger" input type="submit">Create New Jot</button><input type="color" name="color" id="color" class="m-auto p-0" list="presets"><datalist id="presets">
  <option value="#0FC2C0">Definitely Teal.</option>
  <option value="#008F8C">Tealish?</option>
  <option value="#023535">Abyss</option>
</datalist> <label for="color" class="m-auto p-0">Choose Color</label>
                                </div>
                    </form>
                <ul class="mt-5 p-0 m-0 jot-list"></ul>
                </ul>
            </div>
    </div>
    </div>
  </main>`