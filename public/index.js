/*
 * 
 */
var vrView;

// All the scenes for the experience
var scenes = {
  franzenheim: {
    image: 'franzenheim.jpg',
    preview: 'franzenheim-preview.jpg'
  },
  franzenheim_gusterath: {
    image: 'franzenheim_gusterath.jpg',
    preview: 'franzenheim_gusterath-preview.jpg'
  },
  gusterath_pluwig: {
    image: 'gusterath_pluwig.jpg',
    preview: 'gusterath_pluwig-preview.jpg'
  },
  gusterath_tal: {
    image: 'gusterath_tal.jpg',
    preview: 'gusterath_tal-preview.jpg'
  },
  gutweiler_grillhuette: {
    image: 'gutweiler_grillhuette.jpg',
    preview: 'gutweiler_grillhuette-preview.jpg'
  },
  hockweiler: {
    image: 'hockweiler.jpg',
    preview: 'hockweiler-preview.jpg'
  },
  hockweiler1: {
    image: 'hockweiler1.jpg',
    preview: 'hockweiler1-preview.jpg'
  },
  hockweiler2: {
    image: 'hockweiler2.jpg',
    preview: 'hockweiler2-preview.jpg'
  },
  holzerath: {
    image: 'holzerath.jpg',
    preview: 'holzerath-preview.jpg'
  },
  holzerath2: {
    image: 'holzerath2.jpg',
    preview: 'holzerath2-preview.jpg'
  },
  karlmay: {
    image: 'karlmay.jpg',
    preview: 'karlmay-preview.jpg'
  },
  lonzenburg_wald: {
    image: 'lonzenburg_wald.jpg',
    preview: 'lonzenburg_wald-preview.jpg'
  },
  raulsmuehle: {
    image: 'raulsmuehle.jpg',
    preview: 'raulsmuehle-preview.jpg'
  },
  romika: {
    image: 'romika.jpg',
    preview: 'romika-preview.jpg'
  },
  ruwertal: {
    image: 'ruwertal.jpg',
    preview: 'ruwertal-preview.jpg'
  },
  ruwertal_hochwald: {
    image: 'ruwertal_hochwald.jpg',
    preview: 'ruwertal_hochwald-preview.jpg'
  },
  wackenwild: {
    image: 'wackenwild.jpg',
    preview: 'wackenwild-preview.jpg'
  },
  wackenwild8: {
    image: 'wackenwild8.jpg',
    preview: 'wackenwild8-preview.jpg'
  },
};

function onLoad() {
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 480,
    image: 'blank.png',
    is_stereo: false,
    is_autopan_off: false
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('getposition', onGetPosition);
  vrView.on('error', onVRViewError);
}

function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview,
    is_autopan_off: false
  });

  // Unhighlight carousel items
  var carouselLinks = document.querySelectorAll('ul.carousel li a');
  for (var i = 0; i < carouselLinks.length; i++) {
    carouselLinks[i].classList.remove('current');
  }
    vrView.getPosition();
  // Highlight current carousel item
  document.querySelector('ul.carousel li a[href="#' + id + '"]')
      .classList.add('current');
}

function onVRViewReady(e) {
  console.log('onVRViewReady');

  // Create the carousel links
  var carouselItems = document.querySelectorAll('ul.carousel li a');
  for (var i = 0; i < carouselItems.length; i++) {
    var item = carouselItems[i];
    item.disabled = false;

    item.addEventListener('click', function(event) {
      event.preventDefault();
      loadScene(event.target.parentNode.getAttribute('href').substring(1));
    });
  }

  loadScene('ruwertal');
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

function onGetPosition(e) {
    console.log(e)
}

window.addEventListener('load', onLoad);
