let currentIndex = 0;

function updateTime() {
  self.postMessage({date: new Date(), index: currentIndex});
}

self.addEventListener("message", (event) => {
  currentIndex = event.data.index;
})

setInterval(() => {
  currentIndex++;
  if (currentIndex > 5){
    currentIndex = 0;
  }
  updateTime();
}, 1000);

updateTime();
