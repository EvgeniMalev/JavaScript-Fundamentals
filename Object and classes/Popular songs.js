function manageSongs(input) {
    let songs = [];

    function addSong(songName) {
        songs.push({ name: songName });
    }

    function addSinger(songName, singerName) {
        const song = songs.find(song => song.name === songName);
        if (song) {
            song.singer = singerName; 
        }
    }

    function addAuthor(songName, authorName) {
        const song = songs.find(song => song.name === songName);
        if (song) {
            song.author = authorName;
        }
    }

    function addTime(songName, time) {
        const song = songs.find(song => song.name === songName);
        if (song) {
            song.time = time; 
        }
    }

    for (const line of input) {
        if (line.includes('addSong')) {
            const songName = line.substring(9);
            addSong(songName);
        } else if (line.includes('singed By')) {
            const [songName, singerName] = line.split(' singed By '); 
            addSinger(songName.trim(), singerName.trim()); 
        } else if (line.includes('with author')) {
            const [songName, authorName] = line.split(' with author '); 
            addAuthor(songName.trim(), authorName.trim()); 
        } else if (line.includes('Time')) {
            const [songName, time] = line.split(' Time ');
            addTime(songName.trim(), time.trim()); 
        }
    }

    
    const validSongs = songs.filter(song => song.name && song.singer && song.author && song.time);

    
    console.log(JSON.stringify(validSongs));
}
