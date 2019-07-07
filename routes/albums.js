const express = require("express")
const albumsData = require('../AlbumData')


const router = express.Router();


router.get("/", (req, res) => {
    res.send(albumsData)
})

router.get("/:albumsId", (req, res) => {
    const found = albumsData.some(album => album.albumId === req.params.albumsId)
    if (found) {
        res.send(albumsData.find(album => album.albumId === req.params.albumsId))
    } else {
        res.status(400).json({ msg: `No album with the ID of ${req.params.albumsId}` })
    }

})

module.exports = router