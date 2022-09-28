var language = window.navigator.userLanguage || window.navigator.language;
/*
window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
*/

var isGroupHotel = false;

// Search module action functions
function onlineReservationToggle() {
  var searchModuleEl = document.getElementById("search");
  if (document.getElementById("searchForm").classList.contains('d-none')) {
    document.getElementById("searchForm").classList.remove("d-none");
    document.getElementById("search").classList.remove("col-3");
    document.getElementById("search").classList.add("col-11");
    searchModuleEl.style["box-shadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    searchModuleEl.style["border"] = "1px double #999999";
  } else {
    document.getElementById("searchForm").classList.add("d-none");
    document.getElementById("search").classList.remove("col-11");
    document.getElementById("search").classList.add("col-3");
    searchModuleEl.removeAttribute("style");
  }
}
function onChildInputChange() {
  if (document.getElementById('childCount').value == 0) {
    if (!document.getElementById("firstchildsAge").classList.contains('d-none') ||
      !document.getElementById("thirdchildsAge").classList.contains('d-none') ||
      !document.getElementById("secondchildsAge").classList.contains('d-none')) {
        document.getElementById("thirdchildsAge").classList.add("d-none");
        document.getElementById("secondchildsAge").classList.add("d-none");
        document.getElementById("firstchildsAge").classList.add("d-none");
    }
  }
  if (document.getElementById('childCount').value == 1) {
    if (!document.getElementById("thirdchildsAge").classList.contains('d-none') ||
      !document.getElementById("secondchildsAge").classList.contains('d-none')) {
        document.getElementById("thirdchildsAge").classList.add("d-none");
        document.getElementById("secondchildsAge").classList.add("d-none");
    }
    document.getElementById("firstchildsAge").classList.remove("d-none");
  } else if (document.getElementById('childCount').value == 2) {
    if (!document.getElementById("thirdchildsAge").classList.contains('d-none'))
      document.getElementById("thirdchildsAge").classList.add("d-none");
    document.getElementById("firstchildsAge").classList.remove("d-none");
    document.getElementById("secondchildsAge").classList.remove("d-none");
  } else if (document.getElementById('childCount').value == 3) {
    document.getElementById("firstchildsAge").classList.remove("d-none");
    document.getElementById("secondchildsAge").classList.remove("d-none");
    document.getElementById("thirdchildsAge").classList.remove("d-none");
  }
}
function submitSearch() {
  var searchParams = document.getElementById('searchParams').value;
  var checkinDate = document.getElementById('checkinDate').value;
  var checkoutDate = document.getElementById('checkoutDate').value;
  var adultCount = document.getElementById('adultCount').value;
  var childCount = document.getElementById('childCount').value;
  var firstChildren = document.getElementById('firstChildren').value;
  var secondChildren = document.getElementById('secondChildren').value;
  var thirdChildren = document.getElementById('thirdChildren').value;
  
  window.open(`https://inline-embed.devtagon.com/searchResults?isGroupHotel=${isGroupHotel}&hotelID=${hotelID}&searchParams=${searchParams}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&adultCount=${adultCount}&childCount=${childCount}&firstChildren=${firstChildren}&secondChildren=${secondChildren}&thirdChildren=${thirdChildren}`,'_blank');
}

// CallYouModal open, close and submit functions
function openCallYouModal() {
  $('#CallYouModal').modal('show');
}
function closeCallYouModal() {
  $('#CallYouModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('phoneNumber').value = '';
}
function sendInfo() {
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  $('#CallYouModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('phoneNumber').value = '';
}

// CustomizerModal open, close and submit functions
function openCustomizerModal() {
  $('#CustomizerModal').modal('show');
}
function closeCustomizerModal() {
  $('#CustomizerModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('phoneNumber').value = '';
}
function saveCustomizations() {
  $('#CustomizerModal').modal('hide');
}

// Customizer modal's onChange functions
function ColorChange(Color) {
  switch (Color) {
    case 'Sarı':
      document.getElementById("search").style.backgroundColor = 'yellow';
      break;
    case 'Mavi':
      document.getElementById("search").style.backgroundColor = 'blue';
      break;
    case 'Kırmızı':
      document.getElementById("search").style.backgroundColor = 'red';
      break;
    case 'Yeşil':
      document.getElementById("search").style.backgroundColor = 'green';
      break;
    case 'Siyah':
      document.getElementById("search").style.backgroundColor = 'black';
      break;
    case 'Beyaz':
    default:
      document.getElementById("search").style.backgroundColor = 'white';
      break;
  }
}
function opacityChange() {
  var opacity = (document.getElementById("opacityRange").value) / 10;
  document.getElementById("search").style.opacity = opacity;
}
function locationChange() {
  var location = (document.getElementById("locationRange").value) * 10;
  locStyleValue = location + 'vh';
  document.getElementById("search").style.top = locStyleValue;
  document.getElementById("customizerButton").style.top = locStyleValue;
}
function groupHotelChange(param) {
  if (param === "nonGroup") {
    isGroupHotel = false;
    document.getElementById("isGroupHotelSelect").classList.add("d-none");
  } else {
    isGroupHotel = true;
    document.getElementById("isGroupHotelSelect").classList.remove("d-none");
  }
}
function paymentChange(param) {
  if (param === 'onPrem') {
    isPaymentOnPrem = true;
  } else {
    isPaymentOnPrem = false;
  }
}

switch (language) {
  case 'en-US':
  case 'en-EG':
  case 'en-AU':
  case 'en-GB':
  case 'en-CA':
  case 'en-NZ':
  case 'en-IE':
  case 'en-ZA':
  case 'en-JM':
  case 'en-BZ':
  case 'en-TT':
  case 'eu':
  case 'uk':
    search.innerHTML =
    ``
    break;
  case 'de-CH':
  case 'de-AT':
  case 'de-LU':
  case 'de-LI':
  case 'de':
    search.innerHTML =
    ``
    break;
  case 'ru':
  case 'ru-MI':
    search.innerHTML =
    ``
    break;
  case 'ar-SA':
  case 'ar-IQ':
  case 'ar-EG':
  case 'ar-LY':
  case 'ar-DZ':
  case 'ar-MA':
  case 'ar-TN':
  case 'ar-OM':
  case 'ar-YE':
  case 'ar-SY':
  case 'ar-JO':
  case 'ar-LB':
  case 'ar-KW':
  case 'ar-AE':
  case 'ar-BH':
  case 'ar-QA':
    search.innerHTML =
    ``
    break;
  case 'tr-TR':
  default:
    search.innerHTML =
      `<div class='offset-1 col-10 pt-2 d-none' id="searchForm">
        <div class="row" id="phoneAndCall">
          <div class='offset-4 col-2' id="phone">
            <a href="tel:+90 8507070500" class="phone">
              <i class="fa fa-phone"></i>
              <b>+90 850 707 05 00</b>
            </a>
          </div>
          <div class='col-2'>
            <button type="button" id="weCall-btn" class="btn btn-warning weCall-btn" data-toggle="modal" data-target="#CallYouModal" onClick="openCallYouModal()">Sizi Arayalım</button>
          </div>
        </div>
        <div class="row">
          <form class='row g-3' onsubmit="submitSearch()">
            <div id="isGroupHotelSelect" class='col-2'>
                <select class='form-control form-select' aria-label='Default select example'>
                    <option value="" disabled selected hidden>Grup Oteli Seçiniz...</option>
                    <option value='1'>Lykia World Belek</option>
                    <option value='2'>Lykia World Side</option>
                    <option value='3'>Lykia World Datça</option>
                </select>
            </div>
            <div class='col-1'>
                <input type='date' class="form-control">
                <label for="checkInDate" class="form-label">Giriş Tarihi</label>
            </div>
            <div class='col-1'>
                <input type='date' class="form-control">
                <label for="checkOutDate" class="form-label">Çıkış Tarihi</label>
              </div>
            <div class='col-1'>
              <input type='number' placeholder="Yetişkin Sayısı" class="form-control" id="adultCount" min="0">
            </div>
            <div class='col-1'>
              <input type='number' placeholder="Çocuk Sayısı" class="form-control" id="childCount" onChange="onChildInputChange()" min="0" max="3">
            </div>
            <div id="firstchildsAge" class="col-1 d-none">
                  <select class='form-control form-select' aria-label='Default select example'>
                    <option value="" disabled selected hidden>1.Çocuk Yaşı</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                  </select>
            </div>
            <div id="secondchildsAge" class='col-1 d-none'>
                    <select class='form-control form-select' aria-label='Default select example'>
                      <option value="" disabled selected hidden>2.Çocuk Yaşı</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                    </select>
            </div>
            <div id="thirdchildsAge" class='col-1 d-none'>
                    <select class='form-control form-select' aria-label='Default select example'>
                      <option value="" disabled selected hidden>3.Çocuk Yaşı</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                    </select>
            </div>
            <div class='col-3 d-grid gap-2'>
              <button type="submit" class="btn btn-success">REZERVASYON YAP</button>
            </div>
          </form>
        </div>
      </div>`
    break;
}

if (!isGroupHotel) {
  document.getElementById("isGroupHotelSelect").classList.add('d-none');
}