const Api = chrome !== undefined ? chrome : browser;
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");

form.onsubmit = function (e) {
  e.preventDefault();
  if (input.value.trim().length > 0) {
    const query = encodeURIComponent(input.value.trim());
    window.location.href = `https://www.bing.com/search?q=${query}`;
  }
};

button.onclick = function () {
  form.requestSubmit();
};

Api.storage.onChanged.addListener((changes) => {
  if (changes.bgColor?.newValue) {
    document.documentElement.style.setProperty(
      "--background-color",
      changes.bgColor.newValue
    );
  }
});

Api.storage.onChanged.addListener((changes) => {
  if (changes.shadowOpacity?.newValue) {
    document.documentElement.style.setProperty(
      "--shadow-alpha",
      changes.shadowOpacity.newValue
    );
  }
});

Api.storage.onChanged.addListener((changes) => {
  if (changes.shadowRadius?.newValue) {
    document.documentElement.style.setProperty(
      "--shadow-radius",
      changes.shadowRadius.newValue + "px"
    );
  }
});