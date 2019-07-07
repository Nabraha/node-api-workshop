const express = require("express")
const bodyParser = require("body-parser")


//initialize express
const app = express();
app.use(bodyParser.json())

//Listening on port 3001
app.listen(3001, () => console.log("this is running on  port 3001"))


// creating endpoints
app.get("/", (req, res) => {
    res.send("Hello world")
})


app.get("/albums", (req, res) => {
    res.send(albumsData)
})

app.get("/albums/:albumsId", (req, res) => {
    const found = albumsData.some(album => album.albumId === req.params.albumsId)
    if (found) {
        res.send(albumsData.find(album => album.albumId === req.params.albumsId))
    } else {
        res.status(400).json({ msg: `No member with the ID of ${req.params.albumsId}` })
    }

})

app.post("/albums", (req, res) => {

    console.log(req.body)
    const newAlbum = req.body;
    albumsData.push(newAlbum)
    res.send("this is the post")
})

//update member

app.put("/albums/:albumsId", (req, res) => {
    const found = albumsData.some(album => album.albumId === req.params.albumsId)
    if (found) {
        const updateAlbum = req.body;
        albumsData.forEach(album => {
            if (album.albumId === req.params.albumsId) {
                album.artistName = updateAlbum.artistName ? updateAlbum.artistName : album.artistName;
                album.collectionName = updateAlbum.collectionName ? updateAlbum.collectionName : album.collectionName;
                album.artworkUrl100 = updateAlbum.artworkUrl100 ? updateAlbum.artworkUrl100 : album.artworkUrl100;
                album.releaseDate = updateAlbum.releaseDate ? updateAlbum.releaseDate : album.releaseDate;
                album.primaryGenreName = updateAlbum.primaryGenreName ? updateAlbum.primaryGenreName : album.primaryGenreName;
                album.url = updateAlbum.url ? updateAlbum.url : album.url;
            }
            res.send({ msg: 'Album updated', album })
        })

    } else {
        res.status(400).json({ msg: `No member with the ID of ${req.params.albumsId}` })
    }

})

const albumsData = [
    {
        albumId: "10",
        artistName: "Beyoncé",
        collectionName: "Lemonade",
        artworkUrl100: "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
        releaseDate: "2016-04-25T07:00:00Z",
        primaryGenreName: "Pop",
        url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
    },
    {
        albumId: "11",
        artistName: "Beyoncé",
        collectionName: "Dangerously In Love",
        artworkUrl100: "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "Pop",
        url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
    },

    {
        albumId: "12",
        artistName: "Beyoncé",
        collectionName: "She knows",
        artworkUrl100: "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "R&B",
        url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
    }
];












// so the homework is PUT DELETE and filter by Genre