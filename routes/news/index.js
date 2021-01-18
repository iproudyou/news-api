const axios = require('axios');

const newsModel = require('../../models/news/');

exports.getAllNews = async (req, res) => {
    try {
        const news = await newsModel.getAll();
        if (!news) {
            return res.status(400).send()
        }

        return res.status(200).json({
            success: true,
            data: news
        })

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
        }

        return res.status(200).json({
            success: true,
            data: news
        })
    } catch (err) {
        return res.status(500).send()
    }
}

exports.createNews = async (req, res) => {
    try {
        const baseUrl = "https://newsapi.org/v2/";
        const endPoint = "top-headlines";
        const country = "us";
        const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
        const apiKey = process.env.NEWS_API_KEY;

        const url = (category) => {
            return baseUrl + endPoint + "?" + "country=" + country + "&" + "category=" + category + "&" + "apiKey=" + apiKey;
        } 

        const createArticles = async (articles, category) => {
            for (let article of articles) {
                if (!article.url || !article.urlToImage || !article.content) {
                    continue;
                }
                const existedUrl = await newsModel.getByUrl(article.url);
                if (!existedUrl) {
                    const news = {
                        url: article.url,
                        category,
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
            }
        }

        for (let category of categories) {
            const newUrl = url(category);
            const result = await axios.get(newUrl);
            const articles = result.data.articles;

            if (articles.length > 0) {
                await createArticles(articles, category);
            }
        }

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
        }

        return res.status(200).json({
            success: true,
            data: news
        })

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
        }

        return res.status(200).json({
            success: true,
            data: deleted.deletedCount
        })
    } catch (err) {
        return res.status(500).send()
    }
}

