const api = chrome !== undefined ? chrome : browser;


api.storage.sync.get(['bgColor'], function (result) {
  var bgColor;

  bgColor = result.bgColor || '#ffffff';
  document.documentElement.style.setProperty(
    "--background-color",
    bgColor
  );
});

api.storage.sync.get(['shadowOpacity'], function (result) {
  var shadowOpacity;
  shadowOpacity = result.shadowOpacity || '0.1';
  document.documentElement.style.setProperty(
    "--shadow-alpha",
    shadowOpacity
  );
});

api.storage.sync.get(['shadowRadius'], function (result) {
  var shadowRadius;
  shadowRadius = result.shadowRadius || '6';
  document.documentElement.style.setProperty(
    "--shadow-radius",
    shadowRadius + "px"
  );
});