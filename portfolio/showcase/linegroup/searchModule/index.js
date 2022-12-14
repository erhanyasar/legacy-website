var hotelID = '1',
    settings = {},
    childConditions = [],
    isGroupHotel = false,
    isPaymentOnPrem = false;

var language = window.navigator.userLanguage || window.navigator.language;

window.onlanguagechange = function(event) { // to render UI when lang change detected
  console.log(event, 'language change event detected!');
  initModuleSettings();
};

/* Test environment setup*/
function buildTestEnv() {
  counter = document.getElementById("counter");
  if (counter.value !== 0)
    hotelID = counter.value;
  XHRCalls();
}

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
    style.innerHTML = '.searchModule { background-size: contain; background-repeat: no-repeat; background-color: white; position: absolute; left: 5vw; top: 20vh; } #onlineReservation { position: absolute; top: 20vh; height: 375px; width: 25px; color: #33b5e5 } #weCallBtn { color: #fb3 } #resBtn { color: #00c851 }';
    document.getElementsByTagName('head')[0].appendChild(style);
    //document.getElementById('someElementId').className = 'cssClass';
  } else {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.searchModule { background-size: contain; background-repeat: no-repeat; background-color: white; position: absolute; left: 5vw; top: 30vh; } #onlineReservation { position: absolute; top: 20vh; height: 375px; width: 25px; color: #33b5e5 } #weCallBtn { color: #fb3 } #resBtn { color: #00c851 }';
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}
function setHTML() {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "searchModule");
    document.getElementsByTagName("body")[0].appendChild(newDiv);
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
    onlineResElement = document.getElementById("onlineReservation");

// Getting settings data from API
function XHRCalls() {
  var index = ["moduleformfeatureanonim"], // endpoint extensions to call (array elements and for loop used to instatiate various calls first, hence they're deleted;
      requests = new Array(index.length),  // therefore functions not transformed incase of occuring necessity again)
      responses = new Array(index.length);

  for (let i = 0; i < index.length; i++) {
    var url = "https://inline-api.devtagon.com/embedded/" + index[i] + `/${hotelID}`;
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
}

// Search module's action functions
function onlineReservationToggle() {
  searchModuleElement = document.getElementById("searchModule");
  searchElement = document.getElementById("search");
  searchFormElement = document.getElementById("searchForm");

  if(settings.orientation === 'Dikey') {
    searchFormElement.classList.toggle('d-none');
    if (!searchFormElement.classList.contains('d-none'))??{
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
      searchElement.style["box-shadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
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
  document.getElementById('surname').value = '';
  document.getElementById('phoneNumber').value = '';
}
function sendInfo() { // TODO: Send form details as an e-mail via npm or else
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  $('#CallYouModal').modal('hide');
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('phoneNumber').value = '';
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
      case 'Sa??':
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
  searchFormElement = document.getElementById("searchForm"),
  weCallBtnElement = document.getElementById("weCallBtn");
  resBtnElement = document.getElementById("resBtn");

  onlineResElement.style.backgroundColor = settings.themeColor;
  onlineResElement.style.color = settings.themeColor;
  searchFormElement.style.backgroundColor = settings.bgColor;
  //searchFormElement.style.color = settings.bgColor;
  weCallBtnElement.style.backgroundColor = settings.callBtnColor;
  weCallBtnElement.style.color = settings.callBtnColor;
  resBtnElement.style.backgroundColor = settings.resBtnColor;
  resBtnElement.style.color = settings.resBtnColor;
}
function setSubtitle() {
  subtitleElement = document.getElementById("subtitle");
  subtitleElement.innerHTML = settings.subtitleText;
}
function setOpacity() {
  searchFormElement = document.getElementById("searchForm");
  searchFormElement.style.opacity = settings.transparency / 10;
}
function setGroupHotel() {
  if (settings.isGroupHotel === "Hay??r")
    document.getElementById("isGroupHotelSelect").classList.add("d-none");
  else {
    document.getElementById("isGroupHotelSelect").classList.remove("d-none");
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
              <button type="submit" id="onlineReservation" class="btn text-light" onClick="onlineReservationToggle()">ONLINE &nbsp; REZERVASYON</button>
          </div>
          <div id="search" class='container-md col-3 searchModule'>
                            <div id="searchForm" class='row d-none'>
                              <div class='offset-3 col-6 mt-3'>
                                <a href="tel:+90 8507070500" class="phone">
                                  <i class="fa fa-phone"></i>
                                  <b>+90 850 707 05 00</b>
                                </a>
                              </div>
                              <form class='row g-3' onsubmit="submitSearch()" style="padding-right: 0px; !important">
                                <div class='col-12 d-none' id="isGroupHotelSelect">
                                    <select class='form-control form-select' aria-label='Default select example' id="groupHotelID">
                                        <option value="" disabled selected hidden>Grup Oteli Se??iniz...</option>
                                        <option value='1'>Lykia World Belek</option>
                                        <option value='2'>Lykia World Side</option>
                                        <option value='3'>Lykia World Dat??a</option>
                                    </select>
                                </div>
                                <div class='col-4'>
                                  <label class="form-label">Giri?? Tarihi</label>
                                </div>
                                <div class='col-8'>
                                  <input type='date' class="form-control" id="checkinDate">
                                </div>
                                <div class='col-4'>
                                    <label class="form-label">????k???? Tarihi</label>
                                </div>
                                <div class='col-8'>
                                  <input type='date' class="form-control" id="checkoutDate">
                                </div>
                                <div class='col-6'>
                                    <input type='number' placeholder="Yeti??kin Say??s??" class="form-control" id="adultCount" min="0">
                                </div>
                                <div class='col-6'>
                                    <input type='number' placeholder="??ocuk Say??s??" class="form-control" id="childCount" onChange="onChildInputChange()" min="0" max="3">
                                </div>
                                <div id="firstchildsAge" class='col-4 d-none'>
                                  <input type='date' class="form-control" id="firstChildren">
                                </div>
                                <div id="secondchildsAge" class='col-4 d-none'>
                                  <input type='date' class="form-control" id="secondChildren">
                                </div>
                                <div id="thirdchildsAge" class='col-4 d-none'>
                                  <input type='date' class="form-control" id="thirdChildren">
                                </div>
                                <div class='col-12 d-grid'>
                                  <button type="button" id="weCallBtn" class="btn text-light weCall-btn" data-toggle="modal" data-target="#CallYouModal" onClick="openCallYouModal()">Sizi Arayal??m</button>
                                  <button type="submit" id="resBtn" class="btn text-light">REZERVASYON YAP</button>
                                </div>
                                <div class='col-12' style="margin-top: -0.5vh;">
                                  <hr />
                                  <p id="subtitle"></p>
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
                          <h5 class="modal-title" id="CallYouModalLabel"><b>Sizi Arayal??m</b></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick="closeCallYouModal()">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <div class='offset-1 col-10 mb-3'>
                              <input type='text' placeholder="Ad??n??z" class="form-control" id="name">
                          </div>
                          <div class='offset-1 col-10 mb-3'>
                              <input type='text' placeholder="Soyad??n??z" class="form-control" id="surname">
                          </div>
                          <div class='offset-1 col-10 mb-3'>
                              <input type='number' placeholder="Telefon Numaran??z" class="form-control" id="phoneNumber">
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="closeCallYouModal()">Vazge??</button>
                          <button type="button" class="btn btn-success" data-dismiss="modal" onClick="sendInfo()">G??nder</button>
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
          <div id="search" class='col-11 searchModule'>
            <div class='pt-2 d-none' id="searchForm">
              <div class="row" id="phoneAndCall" style="display:flex; flex-direction: row; justify-content: center; align-items: center;">
                <div class='offset-4 col-2' id="phone">
                  <a href="tel:+90 8507070500" class="phone">
                    <i class="fa fa-phone"></i>
                    <b>+90 850 707 05 00</b>
                  </a>
                </div>
                <div class='col-2'>
                  <button type="button" id="weCallBtn" class="btn text-light weCall-btn" data-toggle="modal" data-target="#CallYouModal" onClick="openCallYouModal()">Sizi Arayal??m</button>
                </div>
                <div class='col-4'>
                  <p id="subtitle" style="margin-top: 2vh;"></p>
                </div>
              </div>
              <div class="row">
                <form class='row g-3' onsubmit="submitSearch()">
                  <div id="isGroupHotelSelect" class='offset-1 col-2'>
                      <select class='form-control form-select' aria-label='Default select example' id="groupHotelID">
                          <option value="" disabled selected hidden>Grup Oteli Se??iniz...</option>
                          <option value='1'>Lykia World Belek</option>
                          <option value='2'>Lykia World Side</option>
                          <option value='3'>Lykia World Dat??a</option>
                      </select>
                  </div>
                  <div class='offset-2 col-1' id="firstComponentAfterGroup">
                      <input type='date' class="form-control" id="checkinDate">
                      <label for="checkInDate" class="form-label">Giri?? Tarihi</label>
                  </div>
                  <div class='col-1'>
                      <input type='date' class="form-control" id="checkoutDate">
                      <label for="checkOutDate" class="form-label">????k???? Tarihi</label>
                    </div>
                  <div class='col-1'>
                    <input type='number' placeholder="Yeti??kin Say??s??" class="form-control" id="adultCount" min="0">
                  </div>
                  <div class='col-1'>
                    <input type='number' placeholder="??ocuk Say??s??" class="form-control" id="childCount" onChange="onChildInputChange()" min="0" max="3">
                  </div>
                  <div id="firstchildsAge" class="col-1 d-none">
                    <input type='date' class="form-control" id="firstChildren">
                  </div>
                  <div id="secondchildsAge" class='col-1 d-none'>
                    <input type='date' class="form-control" id="secondChildren">
                  </div>
                  <div id="thirdchildsAge" class='col-1 d-none'>
                    <input type='date' class="form-control" id="thirdChildren">
                  </div>
                  <div class='col-2 d-grid gap-2' style="margin-top: 0px;">
                    <button type="submit" id="resBtn" class="btn text-light">REZERVASYON YAP</button>
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
                            <h5 class="modal-title" id="CallYouModalLabel"><b>Sizi Arayal??m</b></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick="closeCallYouModal()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class='offset-1 col-10 mb-3'>
                                <input type='text' placeholder="Ad??n??z" class="form-control" id="name">
                            </div>
                            <div class='offset-1 col-10 mb-3'>
                                <input type='text' placeholder="Soyad??n??z" class="form-control" id="surname">
                            </div>
                            <div class='offset-1 col-10 mb-3'>
                                <input type='number' placeholder="Telefon Numaran??z" class="form-control" id="phoneNumber">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="closeCallYouModal()">Vazge??</button>
                            <button type="button" class="btn btn-success" data-dismiss="modal" onClick="sendInfo()">G??nder</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>`
        break;
    }   
  }
}