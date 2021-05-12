const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async () => {
    const {data: page} = await axios.get('https://www.horariodebrasilia.org/')
    const $ = cheerio.load(page)

    return $('#relogio').text()
}