

$("#closeBtn").on('click', function () {
  $("#modal").hide();
});
$("#modalOpen").on('click', function () {
  $("#modal").show();
});
function showModal() {

  $("#modal").show();
}




$("#closeBtn").on('click', function () {
  $("#ETH-modal").hide();
});
$("#modalOpen").on('click', function () {
  $("#ETH-modal").show();
});
function showModal() {

  $("#ETH-modal").show();
}



$("#closeBtn1").on('click', function () {
  $("#USDT-modal").hide();
});
$("#modalOpen1").on('click', function () {
  $("#USDT-modal").show();
});
function showModal() {

  $("#USDT-modal").show();
}


$("#closeBtn2").on('click', function () {
  $("#CARD-modal").hide();
});
$("#modalOpen2").on('click', function () {
  $("#CARD-modal").show();
});
function showModal() {

  $("#CARD-modal").show();
}



$(function() {
  const API_URL = "https://api.collectixt.com/api/v1"

  $.ajax({
    url: `${API_URL}/projects/current`,
    success: function(data){
      let values = JSON.parse(data)

      console.log(values)

      $('.telegram-btn').attr('href', values.social_media.telegram)
      $('.twitter-btn').attr('href', values.social_media.twitter)
    }
  });

  $.ajax({
    url: `${API_URL}/stages`,
    success: function(data){
      let stages = JSON.parse(data);
      let start_date = new Date(stages.data[0].start_date).getTime();
      let text= ""
      const today = new Date();

      $('.js-p-date').text(moment(stages.data[0].start_date).format('DD/MM/YYYY'))
      $('.js-s-price').text(stages.data[0].token_price.toFixed(2))
      $('.js-l-date').text(moment(stages.data[stages.data.length - 1].end_date).format('DD/MM/YYYY'))


      $('.js-p1-start').text(moment(stages.data[0].start_date).format('DD/MM/YYYY') + ' - ' + moment(stages.data[0].end_date).format('DD/MM/YYYY'))
      $('.js-p1-tokens').text(stages.data[0].total_tokens)

      $('.js-p2-start').text(moment(stages.data[1].start_date).format('DD/MM/YYYY') + ' - ' + moment(stages.data[1].end_date).format('DD/MM/YYYY'))
      $('.js-p2-tokens').text(stages.data[1].total_tokens)      

      $('.js-p3-start').text(moment(stages.data[2].start_date).format('DD/MM/YYYY') + ' - ' + moment(stages.data[2].end_date).format('DD/MM/YYYY'))
      $('.js-p3-tokens').text(stages.data[2].total_tokens)      

      if (today < new Date(stages.data[0].start_date)) {
        start_date = new Date(stages.data[0].start_date);      
        text = "PRESALE WILL START IN";
      }
      if (today > new Date(stages.data[0].start_date) && today < new Date(stages.data[0].end_date)) {
        start_date = new Date(stages.data[0].end_date);      
        text = "PRESALE STAGE 1 WILL ENDED IN";
      }
  
      if (today > new Date(stages.data[1].start_date) && today < new Date(stages.data[1].end_date)) {
        start_date = new Date(stages.data[1].end_date);      
        text = "PRESALE STAGE 2 WILL ENDED IN";
      }		
  
      if (today > new Date(stages.data[2].start_date) && today < new Date(stages.data[2].end_date)) {
        start_date = new Date(stages.data[2].end_date);      
        text = "PRESALE STAGE 3 WILL ENDED IN";
      }    
      
    }
  });
});