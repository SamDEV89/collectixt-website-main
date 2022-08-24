(function () {
  const API_URL = "https://api.collectixt.com/api/v1"

  $.ajax({
    url: `${API_URL}/stages`,
    success: function (data) {
      let stages = JSON.parse(data);
      let start_date = new Date(stages.data[0].start_date).getTime();
      let text = "";
      let today = new Date();

      if (today < new Date(stages.data[0].start_date)) {
        start_date = new Date(stages.data[0].start_date);
        text = "PRESALE WILL START IN";
      }
      if (
        today > new Date(stages.data[0].start_date) &&
        today < new Date(stages.data[0].end_date)
      ) {
        start_date = new Date(stages.data[0].end_date);
        text = "PRESALE STAGE 1 WILL ENDED IN";
      }

      if (
        today > new Date(stages.data[1].start_date) &&
        today < new Date(stages.data[1].end_date)
      ) {
        start_date = new Date(stages.data[1].end_date);
        text = "PRESALE STAGE 2 WILL ENDED IN";
      }

      if (
        today > new Date(stages.data[2].start_date) &&
        today < new Date(stages.data[2].end_date)
      ) {
        start_date = new Date(stages.data[2].end_date);
        text = "PRESALE STAGE 3 WILL ENDED IN";
      }

      $('.countdown-timer h5').text(text)

      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      const countDown = new Date(start_date).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          document.querySelector(".days h1").innerText = Math.floor(
            distance / day
          );
          (document.querySelector(".hours h1").innerText = Math.floor(
            (distance % day) / hour
          )),
            (document.querySelector(".minutes h1").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.querySelector(".seconds h1").innerText = Math.floor(
              (distance % minute) / second
            ));
        }, 0);
    },
  });
})();
