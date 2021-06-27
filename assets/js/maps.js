//Google Maps  

function initMap() {
  var options = {
    zoom: 6,
    center:{lat: 53.1424,lng: -7.6921}
  }

  var map = new
  google.maps.Map(document.getElementById("map"), options);

// Array of markers
var markers = [
  {
    coords:{lat:52.1421626700037,lng:-9.305669412496405},
    content:'<h1>AED Automatic External Defibrillator Ireland</h1>'
  },
  {
    coords:{lat:52.256635299495386,lng:-6.866704684608732},
    content:'<h1>Automated External Defibrillator</h1>'
  },
  {
    coords:{lat:52.73154489314362,lng:-9.052983877625143},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.77144327068455,lng:-8.26196829020212},
    content:'<h1>AED Automated External Defibrillator</h1>'
  },
  {
    coords:{lat:53.54217754684779,lng:-7.174321857495463},
    content:'<h1>AED Automated External Defibrillator</h1>'
  },
  {
    coords:{lat:53.64650336613575,lng:-5.75708559669588},
    content:'<h1>AED External Defibrillator</h1>'
  },
  {
    coords:{lat:52.11004406649266,lng:-7.630299956684575},
    content:'<h1>AED External Defibrillator</h1>'
  },
  {
    coords:{lat:52.10582685530924,lng:-7.554768954413278},
    content:'<h1>AED External Defibrillator</h1>'
  },
  {
    coords:{lat:52.37744001849238,lng:-9.017323852065012},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.44850680974158,lng:-8.92571324415733},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.48273892976059,lng:-8.939568417608076},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.487274992935276,lng:-8.8276770066944},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.549948926131606,lng:-8.834543461446335},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.623372384872134,lng:-8.977365720286604},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.63893448431766,lng:-8.807104895539165},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:52.6651775166355,lng:-6.520575380161987},
    content:'<h1>AED Defibrillator</h1>'
  },
  {
    coords:{lat:52.66101300727781,lng:-6.482123233551145},
    content:'<h1>AED Defibrillator</h1>'
  },
  {
    coords:{lat:53.28372713805419,lng:-7.025946443902594},
    content:'<h1>AED</h1>'
  },
  {
    coords:{lat:53.466942604162675,lng:-6.845950183685315},
    content:'<h1>AED Public Access Defibrillator</h1>'
  },
  {
    coords:{lat:53.461539377842044,lng:-6.737176859794313},
    content:'<h1>AED Public Access Defibrillator</h1>'
  },
  {
    coords:{lat:53.4018415316852,lng:-6.847386153626036},
    content:'<h1>AED Public Access Defibrillator</h1>'
  },
  {
    coords:{lat:53.49726015880319,lng:-7.868050964595465},
    content:'<h1>Defibrillator</h1>'
  },
  {
    coords:{lat:53.47798751919546,lng:-8.647153261420733},
    content:'<h1>AED (Defibrillator) Machine - Corrandulla Community Hall</h1>'
  },
  {
    coords:{lat:54.15630265306495,lng:-6.755046870316596},
    content:'<h1>AED Public Access Defibrillator</h1>'
  },
  {
    coords:{lat:55.104596298305786,lng:-7.633953078564402},
    content:'<h1>AED - Public Access Defibrillator</h1>'
  },
];

// Loop through markers
for(var i = 0; i < markers.length; i++){
  addMarker(markers[i]);
}

// Marker Function
function addMarker(props){
  var marker = new google.maps.Marker({
    position:props.coords,
    map:map
  });

// Check Content
  if(props.content){
    var infoWindow = new google.maps.InfoWindow({
      content:props.content
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
  }
}
}