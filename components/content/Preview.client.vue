  <template>
    <div
      class="border border-gray-400 dark:bg-idle-black dark:border-gray-600 rounded-xl"
    >
      <div class="border-b border-gray-400 dark:border-gray-600">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center p-0 py-2 m-0 dark:bg-gray-700 rounded-t-xl"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li class="list-none" role="presentation">
            <button
              class="inline-block p-2 px-4"
              :class="
                props.path
                  ? 'border-r border-gray-300 dark:border-gray-600'
                  : 'border-none'
              "
              id="preview-tab"
              :data-tabs-target="'#preview-' + preview_random_id"
              type="button"
              role="tab"
              aria-controls="preview"
              aria-selected="false"
            >
              Preview
            </button>
          </li>
          <li class="list-none" role="presentation" v-if="props.path">
            <button
              class="inline-block p-2 px-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              :data-tabs-target="'#dashboard-' + preview_random_id"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Code
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          class="hidden pt-0 rounded-lg relative"
          :id="'preview-' + preview_random_id"
          role="tabpanel"
          aria-labelledby="preview-tab"
        >
          <!----------component slot-->
          <div class="mt-4 mb-1 preview">
            <div class="p-2 text-idle-black dark:text-idle-white">
              <slot />
            </div>
            <div class="bg-[#2e2e2e] dark:bg-idle-black">
              <div
                class="mt-4 grid w-full grid-cols-2 border-b border-gray-600 rounded-t-md dark:bg-gray-700"
              >
                <ul
                  class="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400"
                >
                  <li>
                    <button
                      type="button"
                      class="inline-block w-full p-2 px-3 text-idle-white bg-[#2e2e2e] hover:bg-[#484848] dark:hover:bg-gray-700 border-r border-gray-600 dark:text-white dark:bg-gray-800"
                    >
                      HTML
                    </button>
                  </li>
                </ul>
                <div class="flex justify-end">
                  <div
                    v-if="$slots['expandCode']"
                    @click="showCode = !showCode"
                    class="py-2 px-3 bg-[#2e2e2e] hover:bg-[#484848] dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-l border-gray-600"
                  >
                    <svg
                      height="14"
                      viewBox="0 0 1792 1792"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#e2e2e2"
                    >
                      <path
                        d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"
                      />
                    </svg>
                  </div>

                  <div
                    class="py-2 px-3 cursor-pointer bg-[#2e2e2e] hover:bg-[#484848] dark:bg-gray-800 dark:hover:bg-gray-700 border-l border-gray-600"
                    @click="copyBelowCode"
                  >
                    <svg
                      v-if="!showNewBelowSVG"
                      width="12px"
                      xmlns="http://www.w3.org/2000/svg"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#e2e2e2"
                      viewBox="0 0 438 511.52"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M141.44 0h172.68c4.71 0 8.91 2.27 11.54 5.77L434.11 123.1a14.37 14.37 0 0 1 3.81 9.75l.08 251.18c0 17.62-7.25 33.69-18.9 45.36l-.07.07c-11.67 11.64-27.73 18.87-45.33 18.87h-20.06c-.3 17.24-7.48 32.9-18.88 44.29-11.66 11.66-27.75 18.9-45.42 18.9H64.3c-17.67 0-33.76-7.24-45.41-18.9C7.24 480.98 0 464.9 0 447.22V135.87c0-17.68 7.23-33.78 18.88-45.42C30.52 78.8 46.62 71.57 64.3 71.57h12.84V64.3c0-17.68 7.23-33.78 18.88-45.42C107.66 7.23 123.76 0 141.44 0zm30.53 250.96c-7.97 0-14.43-6.47-14.43-14.44 0-7.96 6.46-14.43 14.43-14.43h171.2c7.97 0 14.44 6.47 14.44 14.43 0 7.97-6.47 14.44-14.44 14.44h-171.2zm0 76.86c-7.97 0-14.43-6.46-14.43-14.43 0-7.96 6.46-14.43 14.43-14.43h136.42c7.97 0 14.43 6.47 14.43 14.43 0 7.97-6.46 14.43-14.43 14.43H171.97zM322.31 44.44v49.03c.96 12.3 5.21 21.9 12.65 28.26 7.8 6.66 19.58 10.41 35.23 10.69l33.39-.04-81.27-87.94zm86.83 116.78-39.17-.06c-22.79-.35-40.77-6.5-53.72-17.57-13.48-11.54-21.1-27.86-22.66-48.03l-.14-2v-64.7H141.44c-9.73 0-18.61 4-25.03 10.41C110 45.69 106 54.57 106 64.3v319.73c0 9.74 4.01 18.61 10.42 25.02 6.42 6.42 15.29 10.42 25.02 10.42H373.7c9.75 0 18.62-3.98 25.01-10.38 6.45-6.44 10.43-15.3 10.43-25.06V161.22zm-84.38 287.11H141.44c-17.68 0-33.77-7.24-45.41-18.88-11.65-11.65-18.89-27.73-18.89-45.42v-283.6H64.3c-9.74 0-18.61 4-25.03 10.41-6.41 6.42-10.41 15.29-10.41 25.03v311.35c0 9.73 4.01 18.59 10.42 25.01 6.43 6.43 15.3 10.43 25.02 10.43h225.04c9.72 0 18.59-4 25.02-10.43 6.17-6.17 10.12-14.61 10.4-23.9z"
                      />
                    </svg>

                    <svg
                      v-if="showNewBelowSVG"
                      class="w-3 h-3.5 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="group code">
                  <!----------code slot-->
                  <div class="mt-4" :data-belowCode="preview_random_id">
                    <slot v-if="!showCode" name="shortCode" />

                    <slot v-if="showCode" name="expandCode" />
                  </div>

                  <!----  copy icon inside code block  ---->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-[#2e2e2e] dark:bg-idle-black hidden p-2 pt-0 rounded-lg relative"
          :id="'dashboard-' + preview_random_id"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <!----   component name & copy button    ---->

          <p
            class="flex items-center group cursor-pointer absolute right-2 -top-14"
            @click="copyPath"
          >
            <span class="p-[7px] bg-gray-300 dark:bg-gray-500 rounded">
              <svg
                v-if="!showNewPathSVG"
                width="12px"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#000"
                viewBox="0 0 438 511.52"
              >
                <path
                  fill-rule="nonzero"
                  stroke="currentColor"
                  d="M141.44 0h172.68c4.71 0 8.91 2.27 11.54 5.77L434.11 123.1a14.37 14.37 0 0 1 3.81 9.75l.08 251.18c0 17.62-7.25 33.69-18.9 45.36l-.07.07c-11.67 11.64-27.73 18.87-45.33 18.87h-20.06c-.3 17.24-7.48 32.9-18.88 44.29-11.66 11.66-27.75 18.9-45.42 18.9H64.3c-17.67 0-33.76-7.24-45.41-18.9C7.24 480.98 0 464.9 0 447.22V135.87c0-17.68 7.23-33.78 18.88-45.42C30.52 78.8 46.62 71.57 64.3 71.57h12.84V64.3c0-17.68 7.23-33.78 18.88-45.42C107.66 7.23 123.76 0 141.44 0zm30.53 250.96c-7.97 0-14.43-6.47-14.43-14.44 0-7.96 6.46-14.43 14.43-14.43h171.2c7.97 0 14.44 6.47 14.44 14.43 0 7.97-6.47 14.44-14.44 14.44h-171.2zm0 76.86c-7.97 0-14.43-6.46-14.43-14.43 0-7.96 6.46-14.43 14.43-14.43h136.42c7.97 0 14.43 6.47 14.43 14.43 0 7.97-6.46 14.43-14.43 14.43H171.97zM322.31 44.44v49.03c.96 12.3 5.21 21.9 12.65 28.26 7.8 6.66 19.58 10.41 35.23 10.69l33.39-.04-81.27-87.94zm86.83 116.78-39.17-.06c-22.79-.35-40.77-6.5-53.72-17.57-13.48-11.54-21.1-27.86-22.66-48.03l-.14-2v-64.7H141.44c-9.73 0-18.61 4-25.03 10.41C110 45.69 106 54.57 106 64.3v319.73c0 9.74 4.01 18.61 10.42 25.02 6.42 6.42 15.29 10.42 25.02 10.42H373.7c9.75 0 18.62-3.98 25.01-10.38 6.45-6.44 10.43-15.3 10.43-25.06V161.22zm-84.38 287.11H141.44c-17.68 0-33.77-7.24-45.41-18.88-11.65-11.65-18.89-27.73-18.89-45.42v-283.6H64.3c-9.74 0-18.61 4-25.03 10.41-6.41 6.42-10.41 15.29-10.41 25.03v311.35c0 9.73 4.01 18.59 10.42 25.01 6.43 6.43 15.3 10.43 25.02 10.43h225.04c9.72 0 18.59-4 25.02-10.43 6.17-6.17 10.12-14.61 10.4-23.9z"
                />
              </svg>
              <svg
                v-if="showNewPathSVG"
                class="w-3 h-3.5 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <span
              class="group-hover:bg-gray-300 group-hover:dark:bg-gray-500 rounded-br rounded-tr p-[6.4px] text-xs -ml-1 path transition-all duration-200 text-gray-500 dark:text-gray-300 group-hover:text-idle-black"
            >{{ props.path }}</span
            >
          </p>

          <div class="relative">
            <div class="group code" :data-path="props.path">
              <!----------code slot-->
              <div class="mt-4">
                <slot name="code" />
              </div>

              <!----  copy icon inside code block  ---->
              <div
                class="group-hover:block hidden p-[7px] bg-gray-300 rounded cursor-pointer absolute top-3 right-3"
                @click="copyCode"
              >
                <svg
                  v-if="!showNewSideSVG"
                  width="12px"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  class="text-[#e2e2e2]"
                  viewBox="0 0 438 511.52"
                >
                  <path
                    fill-rule="nonzero"
                    stroke="currentColor"
                    d="M141.44 0h172.68c4.71 0 8.91 2.27 11.54 5.77L434.11 123.1a14.37 14.37 0 0 1 3.81 9.75l.08 251.18c0 17.62-7.25 33.69-18.9 45.36l-.07.07c-11.67 11.64-27.73 18.87-45.33 18.87h-20.06c-.3 17.24-7.48 32.9-18.88 44.29-11.66 11.66-27.75 18.9-45.42 18.9H64.3c-17.67 0-33.76-7.24-45.41-18.9C7.24 480.98 0 464.9 0 447.22V135.87c0-17.68 7.23-33.78 18.88-45.42C30.52 78.8 46.62 71.57 64.3 71.57h12.84V64.3c0-17.68 7.23-33.78 18.88-45.42C107.66 7.23 123.76 0 141.44 0zm30.53 250.96c-7.97 0-14.43-6.47-14.43-14.44 0-7.96 6.46-14.43 14.43-14.43h171.2c7.97 0 14.44 6.47 14.44 14.43 0 7.97-6.47 14.44-14.44 14.44h-171.2zm0 76.86c-7.97 0-14.43-6.46-14.43-14.43 0-7.96 6.46-14.43 14.43-14.43h136.42c7.97 0 14.43 6.47 14.43 14.43 0 7.97-6.46 14.43-14.43 14.43H171.97zM322.31 44.44v49.03c.96 12.3 5.21 21.9 12.65 28.26 7.8 6.66 19.58 10.41 35.23 10.69l33.39-.04-81.27-87.94zm86.83 116.78-39.17-.06c-22.79-.35-40.77-6.5-53.72-17.57-13.48-11.54-21.1-27.86-22.66-48.03l-.14-2v-64.7H141.44c-9.73 0-18.61 4-25.03 10.41C110 45.69 106 54.57 106 64.3v319.73c0 9.74 4.01 18.61 10.42 25.02 6.42 6.42 15.29 10.42 25.02 10.42H373.7c9.75 0 18.62-3.98 25.01-10.38 6.45-6.44 10.43-15.3 10.43-25.06V161.22zm-84.38 287.11H141.44c-17.68 0-33.77-7.24-45.41-18.88-11.65-11.65-18.89-27.73-18.89-45.42v-283.6H64.3c-9.74 0-18.61 4-25.03 10.41-6.41 6.42-10.41 15.29-10.41 25.03v311.35c0 9.73 4.01 18.59 10.42 25.01 6.43 6.43 15.3 10.43 25.02 10.43h225.04c9.72 0 18.59-4 25.02-10.43 6.17-6.17 10.12-14.61 10.4-23.9z"
                  />
                </svg>
                <svg
                  v-if="showNewSideSVG"
                  class="w-3 h-3.5 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { nextTick, onMounted } from "vue";

  import { useClipboard } from "@vueuse/core";
  import { initFlowbite } from "flowbite";

  const props = defineProps(["component", "path"]);

  const source = ref({
    component: props.component,
    path: props.path,
  });

  const showCode = ref(false);
  const showNewBelowSVG = ref(false);
  const showNewSideSVG = ref(false);
  const showNewPathSVG = ref(false);

  const { copy, copied } = useClipboard({ source });

  const preview_random_id = ref();

  const copyCode = () => {
    const item = document.querySelector(`[data-path="${props.path}"]`);
    copy(item.innerText);
    showNewSideSVG.value = true;
    setTimeout(() => {
      showNewSideSVG.value = false;
    }, 2000);
  };
  const copyBelowCode = () => {
    const item = document.querySelector(
      `[data-belowCode="${preview_random_id.value}"]`
    );
    copy(item.innerText);
    showNewBelowSVG.value = true;
    setTimeout(() => {
      showNewBelowSVG.value = false;
    }, 2000);
  };

  const copyPath = () => {
    copy(props.path);
    showNewPathSVG.value = true;
    setTimeout(() => {
      showNewPathSVG.value = false;
    }, 2000);
  };

  onMounted(() => {
    nextTick(() => {
      initFlowbite();
    });
  });
  </script>
