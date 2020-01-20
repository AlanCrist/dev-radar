const Dev = require("../models/Dev")
const parseString = require("../utils/parseStringAsArray")

module.exports = {
    async index(req, res) {

        const { latitude, longitude, techs } = req.query;

        const techsArray = parseString(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [latitude, longitude],
                    },
                    $maxDistance: 10000,
                },
            }
        })

        return res.json({ devs })
    }
}