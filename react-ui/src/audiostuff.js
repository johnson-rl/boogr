import React, { Component } from 'react';
import Wad from 'web-audio-daw';

class AudioStuff extends Component {


  render() {


    if(!window.burp_song) {
      window.burp_song = new Wad({source : 'https://dl.dropboxusercontent.com/s/b4z7h1j7kidzl3l/burp_song.mp3?dl=1'});
      window.burp_song.play({
            loop    : true, // This overrides the value for loop on the constructor, if it was set. 
            env     : {      // This is the ADSR envelope.
                attack  : 1.5,  // Time in seconds from onset to peak volume.  Common values for oscillators may range from 0.05 to 0.3.
                decay   : 0,  // Time in seconds from peak volume to sustain volume.
                sustain : 1,  // Sustain volume level. This is a percent of the peak volume, so sensible values are between 0 and 1.
                hold    : 86400, // Time in seconds to maintain the sustain volume level. If this is not set to a lower value, oscillators must be manually stopped by calling their stop() method.
                release : 0     // Time in seconds from the end of the hold period to zero volume, or from calling stop() to zero volume.
            },
      });
    }



    return (
      <div className="AudioStuff">

      </div>
    );
  }
}

export default AudioStuff;
