const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())
app.listen(3001, () => console.log("this is running on  port 3001"))


//endpoints
app.get("/", (req, res) => {
    res.send("Hello world")
})


app.get("/albums", (req, res) => {
    res.send(albumsData)
})

app.get("/albums/:albumsId", (req, res) => {
    console.log(req.params)
    const id = (req.params.albumsId)
    const singleAlbum = albumsData.find(album => {
        console.log(id)
        return album.albumId === id
    })
    res.send(singleAlbum)
})

app.post("/albums", (req, res) => {

    console.log(req.body)
    const newAlbum = req.body;
    albumsData.push(newAlbum)
    res.send("this is the post")
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
    }
];
