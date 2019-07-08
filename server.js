const logger = require('./middleware/logger')

const express = require("express")
const bodyParser = require("body-parser")



//initialize express
const app = express();
app.use(bodyParser.json())

//Listening on port 3001
app.listen(3001, () => console.log("this is running on  port 3001"))


//Router
app.use('/albums', require('./routes/albums'))

//initialize middleware
app.use(logger)

// creating endpoints
app.get("/", (req, res) => {
    res.send("Hello world")
})




app.post("/albums", (req, res) => {
    const newAlbum = req.body;
    albumsData.push(newAlbum)
    res.send("this is the post")
})

//update album

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
        res.status(400).json({ msg: `No album with the ID of ${req.params.albumsId}` })
    }

})


//delete an album

app.delete("/albums/:albumsId", (req, res) => {
    const found = albumsData.some(album => album.albumId === req.params.albumsId)
    if (found) {
        res.send({
            msg: "Album Deleted",
            albumsData: albumsData.filter(album => album.albumId !== req.params.albumsId)
        })
    } else {
        res.status(400).json({ msg: `No album with the ID of ${req.params.albumsId}` })
    }

})