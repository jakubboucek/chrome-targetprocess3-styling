jQuery( function ( $ ) {

  var interval = 250;
  var css = {
    background: '#E01470',
    color: 'white',
    padding: '0 5px'
  };

  var myInterval = setInterval( function() {
    var $tags = $( '.i-role-card-content-tags_short_xs div, .tau-card-tags, .tau-tag' );
    if ( $tags.length > 0 ) {
      setTags( $tags );

      //clearInterval( myInterval );
    }
  }, interval );

  function setTags( $tags ) {
    $tags.css( css );
  }

} );