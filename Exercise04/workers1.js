let statusEnable = false;

function updateTime(isClick) {
  self.postMessage({ date: new Date(), isClick: isClick });
}

self.addEventListener("message", (event) => {
  statusEnable = event.data.statusEnable;

  if (statusEnable) {
    updateTime(true);
  }
});

setInterval(() => {
  if (statusEnable) {
    updateTime(false);
  }
}, 1000);

updateTime(false);
