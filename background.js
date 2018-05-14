browser.webRequest.onBeforeRequest.addListener(
  function(request) {
    if (request.url.includes("disable_polymer"))
      return;

    var url = request.url;
    url += url.includes("?") ? "&" : "?";

    return {
      redirectUrl: url + "disable_polymer=1"
    };
  },
  {
    urls: [
      "https://www.youtube.com/",
      "https://www.youtube.com/watch*",
      "https://www.youtube.com/results*",
      "https://www.youtube.com/channel*",
      "https://www.youtube.com/playlist*"
    ]
  },
  ["blocking"]
);
