(function () {
  const timer = document.createElement("p");
  const resetButton = document.createElement("button");
  const status_bar = document.getElementById("status_bar");
  let time = {
    hour: 0,
    minute: 0,
    second: 0,
  };

  Plugin.register("timer", {
    title: "Timer",
    author: "Trplnr",
    icon: "fa-clock",
    description:
      "Adds a timer at the status bar at the bottom of the screen so you can keep track on how long you've been in blockbench",
    version: "1.0.0",
    variant: "both",
    onload() {
      //Styles

      //Functionality
      timer.setAttribute("id", "trplnr-timer");
      resetButton.setAttribute("id", "trplnr-resetButton");
      resetButton.setAttribute(
        "style",
        "margin-inline: 3px; margin-bottom: 3px;"
      );
      status_bar.appendChild(timer);
      resetButton.textContent = "Reset Timer";
      status_bar.appendChild(resetButton);
      resetButton.addEventListener("click", () => {
        time.hour = 0;
        time.minute = 0;
        time.second = 0;
      });
      function updateTime() {
        if (time.second == 60) {
          time.minute++;
          time.second = 0;
        }
        if (time.minute == 60) {
          time.hour++;
          time.minute = 0;
        }
        setTimeout(() => {
          time.second++;
          updateTime();
        }, 1000);
        let display = `${time.hour}:${time.minute}:${time.second}`;
        timer.textContent = display;
      }
      updateTime();
    },
    onunload() {
      timer.remove();
      resetButton.remove();
      alert("unloaded/reloaded");
    },
    onuninstall() {
      timer.remove();
    },
  });
})();
