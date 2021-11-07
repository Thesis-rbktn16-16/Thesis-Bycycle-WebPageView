import "./App.css";
import icon from "./assets/icon.png";
import android from "./assets/android.png";
import ios from "./assets/ios.png";
function App() {
  return (
    <div className="App">
      <div class=" bg-gray-100 py-6 flex flex-col justify-center ">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto">
              {/* <div>
                <img src={LogoBike} class=" sm:h-8 mx-48  " />
              </div> */}
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>
                    Wide range of bikes, offered here for you, Choose your
                    favorite bike, Explore the area by riding yourself
                  </p>
                  <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2 font-bold">
                        Get Your Bike with Us and ride it safe
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2 font-bold">
                        The best two-wheelers for you
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2 font-bold">
                        At cheap prices with Flexible packages
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2 font-bold">
                        Bikers mostly have the best love stories!
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2 font-bold">Enjoy with roads</p>
                    </li>
                  </ul>
                  <p>
                    We have lightweight, heavyweight and all kinds of bicycles
                    for rent along with the best services in town and the
                    neighborhood. Don't Hezitate and join us.
                  </p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 flex  ">
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-yellow-600 hover:text-yellow-700 flex-auto"
                  >
                    <img src={icon} class="w-32 ml-12" />
                    <img src={android} class="w-32 ml-12 rounded-md" />
                  </a>
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-yellow-600 hover:text-yellow-700 flex-auto"
                  >
                    <img src={icon} class="w-32 ml-12" />
                    <img src={ios} class="w-32 ml-12 rounded-md" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
