const axios = require('axios');
const newsModel = require('../../models/news/');

exports.getAllNews = async (req, res) => {
    try {
        const news = await newsModel.getAll()

        if (!news) {
            return res.status(400).send()
        } else {
            return res.status(200).json({
                success: true,
                data: news
            })
        }
    } catch (err) {
        return res.status(500).send()
    }
}

exports.getNews = async (req, res) => {
    try {
        const id = req.params.id
        const news = await newsModel.getById(id)

        if (!news) {
            return res.status(400).send()
        } else {
            return res.status(200).json({
                success: true,
                data: news
            })
        }
    } catch (err) {
        return res.status(500).send()
    }
}

exports.createNews = async (req, res) => {
    try {
        const baseUrl = 'https://newsapi.org/v2/';
        const endPoint = "top-headlines";
        const country = 'us';
        const apiKey = process.env.NEWS_API_KEY;

        const url = baseUrl + endPoint + "?" + "country=" + country + "&" + "apiKey=" + apiKey;

        const result = await axios.get(url);

        result.data.articles.filter(article => article.url.length > 0)
            .forEach(async article => {
                const existedUrl = article.url && await newsModel.getByUrl(article.url);
                if (!existedUrl) {
                    const news = {
                        url: article.url,
                        source: article.source.name || "",
                        author: article.author || "",
                        publishedAt: article.publishedAt || "",
                        title: article.title || "",
                        description: article.description || "",
                        content: article.content || "",
                        urlToImage: article.urlToImage || "",
                    }
                    await newsModel.create(news);
                } 
        })

        return res.status(201);
    } catch (err) {
        return res.status(500).send()
    }
}

exports.updateNews = async (req, res) => {
    try {
        const id = req.params.id
        const updated = req.body

        const news = await newsModel.updateById(id, updated)

        if (!news) {
            return res.status(400).send()
        } else {
            return res.status(200).json({
                success: true,
                data: news
            })
        }
    } catch (err) {
        return res.status(500).send()
    }
}

exports.deleteNews = async (req, res) => {
    try {
        const id = req.params.id

        const deleted = await newsModel.removeById(id)

        if (deleted.deletedCount === 0) {
            return res.status(400).send()
        } else {
            return res.status(200).json({
                success: true,
                data: deleted.deletedCount
            })
        }
    } catch (err) {
        return res.status(500).send()
    }
}

