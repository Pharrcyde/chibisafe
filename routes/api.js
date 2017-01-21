const config = require('../config.js')
const routes = require('express').Router()
const uploadController = require('../controllers/uploadController')
const albumsController = require('../controllers/albumsController')
const tokenController = require('../controllers/tokenController')

routes.get ('/check', (req, res, next) => {
	return res.json({ 
		private: config.private,
		maxFileSize: config.uploads.maxSize
	})
})

routes.get  ('/uploads', (req, res, next) => uploadController.list(req, res))
routes.post ('/upload', (req, res, next) => uploadController.upload(req, res, next))
routes.post ('/upload/delete', (req, res, next) => uploadController.delete(req, res, next))
routes.post ('/upload/:albumid', (req, res, next) => uploadController.upload(req, res, next))

routes.get  ('/album/:id', (req, res, next) => uploadController.list(req, res, next))
routes.get  ('/albums', (req, res, next) => albumsController.list(req, res, next))
routes.get  ('/albums/:sidebar', (req, res, next) => albumsController.list(req, res, next))
routes.post ('/albums', (req, res, next) => albumsController.create(req, res, next))
routes.post ('/albums/delete', (req, res, next) => albumsController.delete(req, res, next))
routes.post ('/albums/rename', (req, res, next) => albumsController.rename(req, res, next))
routes.get  ('/albums/test', (req, res, next) => albumsController.test(req, res, next))

routes.get  ('/tokens', (req, res, next) => tokenController.list(req, res))
routes.post ('/tokens/verify', (req, res, next) => tokenController.verify(req, res))
routes.post ('/tokens/change', (req, res, next) => tokenController.change(req, res))

module.exports = routes