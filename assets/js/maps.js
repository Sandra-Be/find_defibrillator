let map;

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
    coords:{lat:52.10964436742095,lng:-8.689611793384062},
    content:'<h1>1</h1>'
  },
  {
    coords:{lat:52.16124767975052,lng:-7.151566301940848},
    content:'<h1>2</h1>'
  },
  {
    coords:{lat:52.62342012846225,lng:-8.811364243252473},
    content:'<h1>3</h1>'
  },
  {
    coords:{lat:52.600774124237496,lng:-8.973489527752989},
    content:'<h1>4</h1>'
  },
  {
    coords:{lat:53.38987638335143,lng:-6.2984262865546325},
    content:'<h1>5</h1>'
  },
  {
    coords:{lat:52.090375183987405,lng:-7.6237825080413115},
    content:'<h1>7</h1>'
  },
  {
    coords:{lat:52.361055475941946,lng:-9.059641701933769},
    content:'<h1>9</h1>'
  },
  {
    coords:{lat:52.45565387980471,lng:-8.927184873094818},
    content:'<h1>10</h1>'
  },
  {
    coords:{lat:52.53418752737864,lng:-8.872767901927586},
    content:'<h1>13</h1>'
  },
  {
    coords:{lat:52.589955964091324,lng:-6.494968747114094},
    content:'<h1>15</h1>'
  },
  {
    coords:{lat:52.592775345058676,lng:-6.511480468536884},
    content:'<h1>16</h1>'
  },
  {
    coords:{lat:52.622803895603894,lng:-6.47973401211503},
    content:'<h1>17</h1>'
  },
  {
    coords:{lat:53.451105347975584,lng:-6.8445500706460525},
    content:'<h1>19</h1>'
  },
  {
    coords:{lat:53.41418742468659,lng:-6.832294470765572},
    content:'<h1>20</h1>'
  },
  {
    coords:{lat:53.44118991638063,lng:-6.806201942708192},
    content:'<h1>21</h1>'
  },
  {
    coords:{lat:53.397711077135796,lng:-8.993340301896556},
    content:'<h1>23</h1>'
  },
  {
    coords:{lat:54.120143380150935,lng:-6.738622673034752},
    content:'<h1>24</h1>'
  },
  {
    coords:{lat:55.03660301953727,lng:-7.6509687018365735},
    content:'<h3>25</h3>'
  }
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