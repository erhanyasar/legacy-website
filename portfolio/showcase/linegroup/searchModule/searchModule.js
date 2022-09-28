var settings = {},
    childConditions = [],
    isGroupHotel = false,
    isPaymentOnPrem = false;

var language = window.navigator.userLanguage || window.navigator.language;

window.onlanguagechange = function(event) { // to render UI when lang change detected
  console.log(event, 'language change event detected!');
  initModuleSettings();
};

// Creating necessary script, style, and HTML
function initScriptAndStyles() {
  setStyles();
  setHTML();
  setScripts();
}
function setStyles() {
  var styles = [
    "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css"
  ];
  for (var i=0; i<styles.length; i++){
    var newStyle = document.createElement("link");
    newStyle.type = "text/css";
    newStyle.rel = "stylesheet";
    newStyle.href = styles[i];
    document.head.appendChild(newStyle);
  }
  if (settings.orientation === 'Dikey') {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'input::-webkit-datetime-edit { color: transparent; user-select: none; } .focused::-webkit-datetime-edit{ color: #000; user-select: none; }.searchForm { border-radius: 10px; } .searchModule { background-size: contain; background-repeat: no-repeat; background-color: white; position: absolute; left: 5vw; top: 20vh; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; } #onlineReservation { position: absolute; top: 20vh; height: 375px; width: 3vw; background-color: blue !important; } #weCallBtn { color: #fb3 } #resBtn { color: #00c851 } #phoneBtn { color: #00c851 }';
    document.getElementsByTagName('head')[0].appendChild(style);
    //document.getElementById('someElementId').className = 'cssClass';
  } else {
    var style = document.createElement('style');
    style.type = 'text/css';                                                                                                                                                                                                                                                                                                            // 666666 708090 808080
    style.innerHTML = '.searchModule { background-size: contain; background-repeat: no-repeat; background-color: white; position: absolute; left: 5vw; top: 30vh; -webkit-border-radius: 20px; -moz-border-radius: 20px; border-radius: 20px; } #onlineReservation { position: absolute; top: 20vh; height: 375px; width: 3vw; background-color: #708090 } #weCallBtn { color: #fb3 } #resBtn { color: #00c851 }';
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}
function setHTML() {
  /*var body = document.getElementsByTagName('body'),
      x = body.firstChild.nodeName,
      y = document.getElementsByTagName(x)[0],
      newDiv = document.createElement("div");

    newDiv.setAttribute("id", "searchModule");
    //body.prepend(newDiv);
    script.parentNode.insertAdjacentElement('beforebegin', newDiv);*/
}
function setScripts() {
  var scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"
  ];
  for (var i=0; i<scripts.length; i++){
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = scripts[i];
    newScript.setAttribute('crossorigin','*');
    document.head.appendChild(newScript);
  }
}
initScriptAndStyles();

// Unique Global DOM Elements
var searchModuleElement = document.getElementById("searchModule"),
    searchElement = document.getElementById("search"),
    searchFormElement = document.getElementById("searchForm"),
    weCallBtnElement = document.getElementById("weCallBtn"),
    resBtnElement = document.getElementById("resBtn"),
    subtitleElement = document.getElementById("subtitle"),
    onlineResElement = document.getElementById("onlineReservation"),
    isGroupHotelSelectElement = document.getElementById("isGroupHotelSelect");

// Getting settings data from API
function XHRCalls() {
  var index = ["moduleformfeatureanonim"], // endpoint extensions to call (array elements and for loop used to instatiate various calls first, hence they're deleted;
      requests = new Array(index.length),  // therefore functions not transformed incase of occuring necessity again)
      responses = new Array(index.length);

  for (let i = 0; i < index.length; i++) {
    var url = "https://inline-api.devtagon.com/embedded/" + index[i] + `/${formFeatureID}`;
    requests[i] = new XMLHttpRequest();
    requests[i].open("GET", url);
    requests[i].onloadend = function() {
      responses[i] = JSON.parse(requests[i].responseText);
      reqListener();
    }
    requests[i].send();

    function reqListener() {
      settings = responses[0];
      initModuleSettings(); // To initialize module's settings
    }
  }
}
XHRCalls();

// Calling all necessary init functions
function initModuleSettings () {
  console.log(settings);
  setOrientation();
  setLanguage();
  setGroupHotel();
  setOpacity();
  setSubtitle();
  setColor();
  setPosition();
  setHeight();
  setPayment();
  setDates();
  setPhone();
  setFontColor();
  setMobileFooter();
}

// Search module's action functions
function onlineReservationToggle() {
  searchModuleElement = document.getElementById("searchModule");
  searchElement = document.getElementById("search");
  searchFormElement = document.getElementById("searchForm");

  if(settings.orientation === 'Dikey') {
    searchFormElement.classList.toggle('d-none');
    if (!searchFormElement.classList.contains('d-none')) {
      searchElement.style["box-shadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
      searchElement.style["border"] = "1px double #999999";
    }
    else {
      searchElement.style["box-shadow"] = "";
      searchElement.style["border"] = "";
    }
  } else {
    if (searchFormElement.classList.contains('d-none')) {
      searchFormElement.classList.remove("d-none");
      searchElement.style["box-shadow"] = "10 14px 8px 10 rgba(0, 0, 0, 0.2), 10 16px 20px 10 rgba(0, 0, 0, 0.19)";
      searchElement.style["border"] = "1px double #999999";
    } else {
      searchFormElement.classList.add("d-none");
      searchElement.style["box-shadow"] = "";
      searchElement.style["border"] = "";    }
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
    var checkinDate = document.getElementById('checkinDate').value,
        checkoutDate = document.getElementById('checkoutDate').value,
        adultCount = document.getElementById('adultCount').value,
        childCount = document.getElementById('childCount').value,
        firstChildren = document.getElementById('firstChildren').value,
        secondChildren = document.getElementById('secondChildren').value,
        thirdChildren = document.getElementById('thirdChildren').value,
        groupHotelID = document.getElementById('groupHotelID').value;
    
    //if ( (!checkinDate) || (checkoutDate) || (adultCount) || (childCount) || (firstChildren) || () || () || () || () || () || () )
    
    var targetURL = `https://inline-embed.devtagon.com/searchResults?isGroupHotel=${isGroupHotel}&groupHotelID=${groupHotelID}&hotelID=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&adultCount=${adultCount}&childCount=${childCount}&firstChildren=${firstChildren}&secondChildren=${secondChildren}&thirdChildren=${thirdChildren}`

    if (isPaymentOnPrem === true) {
      window.open(targetURL,'_blank');
      /*document.getElementById('iframe').innerHTML =
      //`<iframe src="${targetURL}" name="iframeCheckout" height="300px" width="100%" title="iframeCheckout" sandbox="allow-top-navigation allow-scripts allow-forms"></iframe>`;
      `<iframe src="${targetURL}" width="100%" height="1000"></iframe>`;
      //document.getElementById('iframeCheckout').setAttribute('src', targetURL);
      debugger;*/
    } else
      window.open(targetURL,'_blank');
}

// CallYouModal open, close and submit functions
function openCallYouModal() {
  $('#CallYouModal').modal('show');
}
function closeCallYouModal() {
  $('#CallYouModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phoneNumber').value = '';
  document.getElementById('message').value = '';

}
function sendInfo() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var message = document.getElementById('message').value;


  function reqListenerWeCallYou() {
    console.log(JSON.parse(this.responseText));
    if (JSON.parse(this.responseText)){ // TODO: Will be refactored according to the response's unsuccessful param
      console.log(JSON.parse(this.responseText));
      alert("Bilgileriniz sizinle en kısa sürede iletişime geçmek üzere alınmıştır!");
    } else {
      var mailToAddress = 'support@linegroup.com';
      window.open('mailto:' + mailToAddress);
    }
  }

  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("load", reqListenerWeCallYou);
  xhttp.open("POST", 'https://inline-api.devtagon.com/management/callbackanonim', true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(`{"fullName":"${name}","email":"${email}","gsm":"${phoneNumber}","note":"${message}","otel":"${hotelID}"}`);

  $('#CallYouModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phoneNumber').value = '';
  document.getElementById('message').value = '';
}

// CustomizerModal open, close and submit functions
function setPayment() {
  if (settings.isPaymentSystem === 'Kendisi')
    isPaymentOnPrem = true;
}
function openCustomizerModal() {
  $('#CustomizerModal').modal('show');
}
function closeCustomizerModal() {
  $('#CustomizerModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('phoneNumber').value = '';
}

// module's initialization functions
function setPayment() {
  if (settings.isPaymentSystem === 'Kendisi')
    isPaymentOnPrem = true;
}
function setHeight() {
  searchElement = document.getElementById("search");
  locStyleValue = settings.height * 10 + 'vh';
  searchElement.style.top = locStyleValue;
}
function setPosition() {
  searchElement = document.getElementById("search");
  searchElement.removeAttribute("style");
  if(settings.orientation === 'Dikey') {
    switch (settings.position) {
      case 'Sağ':
        searchElement.style["left"] = "";
        searchElement.style.right = '5vw';
        searchElement.classList.add("offset-9");
        break;
      case 'Orta':
        searchElement.style["left"] = "";
        searchElement.style["right"] = "";
        searchElement.classList.add("offset-4");
      case 'Sol':
        searchElement.style.left = '5vw';
        searchElement.style.right = '';
      default:
        break;
    }
  }
}
function setColor() {
  onlineResElement = document.getElementById("onlineReservation");
  themeHeaderElement = document.getElementById("themeHeader");
  searchFormElement = document.getElementById("searchForm"),
  weCallBtnElement = document.getElementById("weCallBtn");
  resBtnElement = document.getElementById("resBtn");

  onlineResElement.style.backgroundColor = settings.themeColor;
  onlineResElement.style.color = settings.themeColor;
  themeHeaderElement.style.backgroundColor = settings.themeColor;
  themeHeaderElement.style.color = settings.themeColor;
  searchFormElement.style.backgroundColor = settings.bgColor;
  weCallBtnElement.style.backgroundColor = settings.callBtnColor;
  weCallBtnElement.style.color = settings.callBtnColor;
  resBtnElement.style.backgroundColor = settings.resBtnColor;
  resBtnElement.style.color = settings.resBtnColor;
}
function setSubtitle() {
  subtitleElement = document.getElementById("subtitle");
  subtitleElement.style.color = settings.subTitleColor;
  subtitleElement.innerHTML = settings.subtitleText;
  if (settings.isSubtitleActive === 'Yok')
    subtitleElement.classList.add("d-none");
  else if (settings.isSubtitleActive === 'Var')
    subtitleElement.classList.remove("d-none");
}
function setOpacity() {
  searchFormElement = document.getElementById("searchForm");
  searchFormElement.style.opacity = settings.transparency / 10;
}
function setGroupHotel() {
  isGroupHotelSelectElement = document.getElementById("isGroupHotelSelect")
  if (settings.isGroupHotel === "Hayır")
    isGroupHotelSelectElement.classList.add("d-none");
  else {
    isGroupHotelSelectElement.classList.remove("d-none");
    isGroupHotel = true;
    if(settings.orientation === 'Yatay') {
      document.getElementById("firstComponentAfterGroup").classList.remove("offset-2");
    }
  }
}

function setLanguage() {
  if(settings.orientation === 'Dikey') {
    switch (language) { // Instead of making users type explicitly 'npm install' within their current directory since they're non-developers, statically lang change enabled
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
        searchModuleElement.innerHTML =
        ``
        break;
      case 'de-CH':
      case 'de-AT':
      case 'de-LU':
      case 'de-LI':
      case 'de':
        searchModuleElement.innerHTML =
        ``
        break;
      case 'ru':
      case 'ru-MI':
        searchModuleElement.innerHTML =
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
        searchModuleElement.innerHTML =
        ``
        break;
      case 'tr-TR':
      default:
        searchModuleElement.innerHTML =
          `<div>
              <button type="submit" id="onlineReservation" class="btn text-light" style="font-weight: 900; border-radius: 15px; background-color: blue !important;" onClick="onlineReservationToggle()">ONLINE&nbsp;REZERVASYON</button>
          </div>
          <div id="search" class='container-md col-xs-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 searchModule'>
                            <div id="searchForm" class='row d-none'>
                              <div class='row' style="margin: 1vh 0vh">
                                <div class='col-6' style="padding-left: 0px; padding-right: 0px;">
                                  <a>
                                    <button type="button" id="phoneBtn" class="btn btn-block btn-danger text-light" style="border-radius: 15px;" href="tel:+90 850 707 05 00">
                                      <b>
                                      Rezervasyon İçİn<br />
                                      <i class="fa fa-phone"></i>
                                      0850 707 05 00
                                      </b>
                                    </button>
                                  </a>
                                </div>
                                <div class='col-6' style="padding-left: 0px; padding-right: 0px;">
                                  <button type="button" id="weCallBtn" class="btn btn-block btn-info text-light weCall-btn" style="border-radius: 15px; height: 4rem; width:11.5rem; margin-left: .8rem;" data-toggle="modal" data-target="#CallYouModal" onClick="openCallYouModal()">Sİzİ Arayalım</button>
                                </div>
                              </div>
                              <span class="border border-grey" style="margin-bottom: 2vh;"></span>
                              <h6 id="themeHeader" style="display: flex; justify-content: center;"><b>ONLINE REZERVASYON</b></h6>
                              <form class='row g-3' onsubmit="submitSearch()" style="padding-right: 0px !important; margin-top: -.05vh;">
                                <div class='col-12 d-none' id="isGroupHotelSelect">
                                    <select class='form-control form-select' aria-label='Default select example' id="groupHotelID">
                                        <option value="" disabled selected hidden>Otel Seçiniz...</option>
                                        <option value='1'>Lykia World Belek</option>
                                        <option value='2'>Lykia World Side</option>
                                        <option value='3'>Lykia World Datça</option>
                                    </select>
                                </div>
                                <div class='col-6'>
                                  <div class='input-group'>
                                    <input type='date' class="form-control" placeholder="Date" id="checkinDate" onFocus="getCheckinDate()">
                                    <span class="input-group-text" id="basic-addon1"><i class="far fa-calendar-alt"></i></span>
                                  </div>
                                  <label id="labelCheckin" class="form-label">Giriş Tarihi</label>
                                </div>
                                <div class='col-6'>
                                  <div class='input-group'>
                                    <input type='date' class="form-control" id="checkoutDate">
                                    <span class="input-group-text" id="basic-addon1"><i class="far fa-calendar-alt"></i></span>
                                  </div>
                                  <label id="labelCheckout" class="form-label">Çıkış Tarihi</label>
                                </div>
                                <div class='col-6' style="margin: -0.01vh 0 .25vh 0;">
                                    <input type='number' placeholder="Yetişkin Sayısı" class="form-control" id="adultCount" min="0">
                                </div>
                                <div class='col-6' style="margin: -0.01vh 0 .25vh 0;">
                                    <input type='number' placeholder="Çocuk Sayısı" class="form-control" id="childCount" onChange="onChildInputChange()" min="0" max="3">
                                </div>
                                <div id="firstchildsAge" class='col-4 d-none'>
                                  <input type='date' class="form-control" id="firstChildren">
                                  <label id="labelFirstKid" class="form-label">1. Çocuk</label>
                                </div>
                                <div id="secondchildsAge" class='col-4 d-none'>
                                  <input type='date' class="form-control" id="secondChildren">
                                  <label id="labelSecondKid" class="form-label">2. Çocuk</label>
                                </div>
                                <div id="thirdchildsAge" class='col-4 d-none'>
                                  <input type='date' class="form-control" id="thirdChildren">
                                  <label id="labelThirsdKid" class="form-label">3.Çocuk</label>
                                </div>
                                <div class='offset-3'>
                                  <button type="submit" id="resBtn" class="btn text-light btn-success" style="border-radius: 15px;">REZERVASYON YAP</button>
                                </div>
                                <span class="border border-grey" style="margin-top: 1vh; margin-left: 0.2vw;"></span>
                                <div class='col-12'>
                                  <p id="subtitle"></p>
                                </div>
                            </form>
                          </div>
          </div>
          <div id="iframe"></div>
          <!-- We'll Call You Modal -->
          <div class="modal fade" id="CallYouModal" tabindex="-1" role="dialog" aria-labelledby="CallYouModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                  <div class="modal-content" style="border-radius: 10px;">
                      <div class="modal-header" style="border-bottom: 1px #fff solid; ">
                          <h5 class="modal-title" id="CallYouModalLabel" style="margin: -1vh 0 0 -0.1vw;"><b>Sizi Arayalım</b></h5>
                          <span aria-hidden="true" class="close" data-dismiss="modal" aria-label="Close" onClick="closeCallYouModal()" style="margin-top: -3vh; margin-right: -0.1vw;">&times;</span>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class='offset-1 col-4 mb-3'>
                            <label>Ad, Soyad:</label>
                          </div>
                          <div class='col-6 mb-3'>
                              <input type='text' class="form-control" id="name">
                          </div>
                          <div class='offset-1 col-4 mb-3'>
                            <label>E-Posta:</label>
                          </div>
                          <div class='col-6 mb-3'>
                            <input type='email' class="form-control" id="email">
                          </div>
                          <div class='offset-1 col-4 mb-3'>
                            <label>Telefon:</label>
                          </div>
                          <div class='col-6 mb-3'>
                              <input type='number' class="form-control" id="phoneNumber">
                          </div>
                          <div class='offset-1 col-4 mb-3'>
                            <label>Mesaj:</label>
                          </div>
                          <div class='col-6 mb-3'>
                              <textarea class="form-control" id="message"></textarea>
                          </div>
                      </div>
                      <div class="modal-footer" style="border-top: 1px #fff solid; margin: 1vh 0 1vh 0;">
                          <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="closeCallYouModal()" style="margin: 0 0.5vw -3vh 0; border-radius: 15px;">Vazgeç</button>
                          <button type="button" class="btn btn-success" data-dismiss="modal" onClick="sendInfo()" style="margin: 0 -1vw -3vh 0; border-radius: 15px;">Gönder</button>
                      </div>
                  </div>
              </div>
          </div>`
        break;
    }
  }
}
function setOrientation() {
  if(settings.orientation === 'Yatay') {
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
        searchModuleElement.innerHTML =
        ``
        break;
      case 'de-CH':
      case 'de-AT':
      case 'de-LU':
      case 'de-LI':
      case 'de':
        searchModuleElement.innerHTML =
        ``
        break;
      case 'ru':
      case 'ru-MI':
        searchModuleElement.innerHTML =
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
        searchModuleElement.innerHTML =
        ``
        break;
      case 'tr-TR':
      default:
        searchModuleElement.innerHTML =
          `<div>
            <button type="submit" id="onlineReservation" class="btn text-light" onClick="onlineReservationToggle()">ONLINE &nbsp; REZERVASYON</button>
          </div>
          <div id="search" class='offset-1 col-xs-12 col-sm-10 col-md-10 col-lg-9 col-xl-8 searchModule'>
            <div class='pt-2 d-none' id="searchForm">
              <div class="row" id="phoneAndCall" style="display:flex; flex-direction: row; justify-content: center; align-items: center;">
                <div class='col-xs-12 col-sm-6 col-md-6 col-lg-3' id="phone">
                  <a class="phone" id="hrPhoneCall">
                    <i class="fa fa-phone"></i>
                    <b id="hrPhoneNumber"></b>
                  </a>
                </div>
                <div class='col-xs-12 col-sm-6 col-md-6 col-lg-3 d-grid gap-2'>
                  <button type="button" id="weCallBtn" class="btn text-light weCall-btn" data-toggle="modal" data-target="#CallYouModal" onClick="openCallYouModal()">Sizi Arayalım</button>
                </div>
                <div class='d-none d-lg-block col-lg-4'>
                  <p id="subtitle" style="margin-top: 2vh;"></p>
                </div>
              </div>
              <div class="row" style="margin-left: 4vw; margin-right: 3vw;">
                <form class='row g-1' onsubmit="submitSearch()">
                  <div id="isGroupHotelSelect" class='col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-2'>
                      <select class='form-control form-select' aria-label='Default select example' id="groupHotelID">
                          <option value="" disabled selected hidden>Grup Oteli Seçiniz...</option>
                          <option value='1'>Lykia World Belek</option>
                          <option value='2'>Lykia World Side</option>
                          <option value='3'>Lykia World Datça</option>
                      </select>
                  </div>
                  <div class='offset-2 col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-1' id="firstComponentAfterGroup">
                      <input type='date' class="form-control" id="checkinDate">
                      <label for="checkInDate" class="form-label">Giriş Tarihi</label>
                  </div>
                  <div class='col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-1'>
                      <input type='date' class="form-control" id="checkoutDate">
                      <label for="checkOutDate" class="form-label">Çıkış Tarihi</label>
                    </div>
                  <div class='col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-1'>
                    <input type='number' placeholder="Yetişkin Sayısı" class="form-control" id="adultCount" min="0">
                  </div>
                  <div class='col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-1'>
                    <input type='number' placeholder="Çocuk Sayısı" class="form-control" id="childCount" onChange="onChildInputChange()" min="0" max="3">
                  </div>
                  <div id="firstchildsAge" class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-1 d-none">
                    <input type='date' class="form-control" id="firstChildren">
                    <label class="form-label">1. Çocuk</label>
                  </div>
                  <div id="secondchildsAge" class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-1 d-none'>
                    <input type='date' class="form-control" id="secondChildren">
                    <label class="form-label">2. Çocuk</label>
                  </div>
                  <div id="thirdchildsAge" class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-1 d-none'>
                    <input type='date' class="form-control" id="thirdChildren">
                    <label class="form-label">3. Çocuk</label>
                  </div>
                  <div class='col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-grid gap-2' style="margin-top: 0px;">
                    <button type="submit" id="resBtn" class="btn text-light">REZERVASYON YAP</button>
                  </div>
                  <div class="row" style="margin-left: 4vw; margin-right: 3vw;">
                  </div>
                </form>
              </div>
            </div>
            <div id="iframe"></div>
            <!-- We'll Call You Modal -->
            <div class="modal fade" id="CallYouModal" tabindex="-1" role="dialog" aria-labelledby="CallYouModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="CallYouModalLabel"><b>Sizi Arayalım</b></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick="closeCallYouModal()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class='offset-1 col-10 mb-3'>
                                <input type='text' placeholder="Adınız" class="form-control" id="name">
                            </div>
                            <div class='offset-1 col-10 mb-3'>
                                <input type='text' placeholder="Soyadınız" class="form-control" id="surname">
                            </div>
                            <div class='offset-1 col-10 mb-3'>
                                <input type='number' placeholder="Telefon Numaranız" class="form-control" id="phoneNumber">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="closeCallYouModal()">Vazgeç</button>
                            <button type="button" class="btn btn-success" data-dismiss="modal" onClick="sendInfo()">Gönder</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>`
        break;
    }   
  }
}
function setDates() {
  Date.prototype.toCheckinDateInputValue = (function() {
    var local = new Date(this);
    local.setDate(local.getDate() + 7);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });
  Date.prototype.toCheckoutDateInputValue = (function() {
    var local = new Date(this);
    local.setDate(local.getDate() + 11);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });

  document.getElementById('checkinDate').value = new Date().toCheckinDateInputValue();
  document.getElementById('checkoutDate').value = new Date().toCheckoutDateInputValue();
}

function setPhone() {
  hrPhoneNumberElement = document.getElementById('hrPhoneNumber');
  vrPhoneNumberElement = document.getElementById('vrPhoneNumber');

  hrPhoneNumberElement.innerHTML = settings.phoneNumber;
  vrPhoneNumberElement.innerHTML = settings.phoneNumber;

  hrPhoneCallElement = document.getElementById('hrPhoneCall');
  vrPhoneCallElement = document.getElementById('vrPhoneCall');
  hrPhoneCall.setAttribute('href',`tel:${settings.phoneNumber}`);
  vrPhoneCall.setAttribute('href',`tel:${settings.phoneNumber}`);
}

function setFontColor() {
  labelCheckinElement = document.getElementById('labelCheckin');
  labelCheckoutElement = document.getElementById('labelCheckout');
  labelCheckinElement = document.getElementById('labelFirstKid');
  labelCheckinElement = document.getElementById('labelSecondKid');
  labelCheckinElement = document.getElementById('labelThirsdKid');

  labelCheckinElement = document.getElementById('labelCheckin');
  labelCheckinElement = document.getElementById('labelCheckin');
  labelCheckinElement = document.getElementById('labelCheckin');
  labelCheckinElement = document.getElementById('labelCheckin');
  labelCheckinElement = document.getElementById('labelCheckin');

  
  labelCheckinElement.style.cssText = `color:${settings.fontColor};`;
  labelCheckoutElement.style.cssText = `color:${settings.fontColor};`;
}

function setMobileFooter() {
}