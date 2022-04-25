import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var _ = require('lodash');


const getTimeDateUpdate = (timeupdate) => {
    const currenttime = timeupdate.seconds;
    
    localStorage.setItem('videoplayer-current-time', JSON.stringify({currenttime}))
}

const throttleGetTimeDateUpdate = _.throttle(getTimeDateUpdate, 1000)
player.on('play', throttleGetTimeDateUpdate)



const saved_time = localStorage.getItem('videoplayer-current-time')
const parse_time = JSON.parse(saved_time)

player.setCurrentTime(parse_time.currenttime).then(function (seconds) {
    
})
