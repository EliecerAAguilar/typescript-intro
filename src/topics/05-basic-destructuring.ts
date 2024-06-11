interface AudioPlayer {
    audioVolumne: number;
    songDuration: number;
    song: string;
    details: Detail
}

interface Detail {
    artist: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumne: 90,
    song: 'Mess',
    songDuration: 2.7,
    details: {
        artist: 'EdSheran',
        year: 2015
    }
}

console.log('Song: ', audioPlayer.song);
console.log('SongDuration: ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.artist);


const {song} = audioPlayer;
const {song: anotherSong} = audioPlayer;
const {song: music, songDuration: duration} = audioPlayer;
console.log('Song: ', song);
console.log('Song: ', anotherSong);
console.log('Song: ', duration);


const {artist:author} = audioPlayer.details;
console.log('Author: ()', author);