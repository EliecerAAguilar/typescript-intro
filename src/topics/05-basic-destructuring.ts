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

// console.log('Song: ', audioPlayer.song);
// console.log('SongDuration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.artist);


const {song} = audioPlayer;
const {song: anotherSong} = audioPlayer;
const {song: music, songDuration: duration} = audioPlayer;
// console.log('Song: ', song);
// console.log('Song: ', anotherSong);
// console.log('Song: ', duration);


const {artist:author} = audioPlayer.details;
// console.log('Author: ()', author);

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];
console.log('personaje 3: ', dbz[2]);
const trunk = dbz[3] || 'no personaje';
console.log('personaje 3: ', trunk);
const [p1,p2, trunks, gohan = 'not found'] = dbz;
console.log('personaje (3): ', trunks);
console.log('personaje (4): ', gohan);
console.log('personaje (1): ', p1);


export {};