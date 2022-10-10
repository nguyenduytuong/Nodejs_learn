
class NewsController {
    index(req , res){
        res.render('news');
    }
}
const newsController = new  NewsController()
export { newsController };