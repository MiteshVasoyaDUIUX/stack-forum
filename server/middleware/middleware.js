const notFound = (req, res, next) =>{
    const error = new Error('Not Found ' + req.originalUrl);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) =>{
    res.json({
        message : err.message,
        error : process.env.NODE_ENV == 'production' ? '' : err.stack,
    });
}

module.exports = {
    notFound,
    errorHandler
}
