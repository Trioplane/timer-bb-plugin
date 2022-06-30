(function() {
    const timer = document.createElement('p')
    let time = {
        hour: 0,
        minute: 0,
        second: 0
    }

    Plugin.register('timer', {
        title: 'Timer',
        author: 'Trplnr',
        icon: 'fa-clock',
        description: 'Adds a timer at the status bar at the bottomof the screen so you can keep track on how long you\'ve been in blockbench',
        version: '1.0.0',
        variant: 'both',
        onload() {
            timer.setAttribute('id', 'trplnr-timer')
            document.getElementById('status_bar').appendChild(timer)
            function updateTime() {

                if (time.second == 60) {
                  time.minute++
                  time.second = 0
                }
                if (time.minute == 60) {
                  time.hour++
                  time.minute = 0
                }
                setTimeout(() => {
                  time.second++
                  updateTime()
                }, 1000)
                let display = `${time.hour}:${time.minute}:${time.second}`
                timer.textContent = display
              }
              updateTime()
        },
        onunload() {
          timer.remove()
        }
    });

})();