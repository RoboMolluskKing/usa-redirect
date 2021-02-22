const usarch = "https://33kk.github.io/uso-archive/?search=";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    if (url.hostname === "https://33kk.github.io/uso-archive/?search=") return;


    return {redirectUrl: usarch + url.search};
  },
  {
    urls: [
      "*://userstyles.org/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);