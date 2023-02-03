const { verify } = require('../auth/utils');

const checkAuthHeader = async (req, res, next) => {
    const authorization = req.get('authorization');

    if (authorization) {
        const token = authorization.split(' ')[1];
        console.log(token);

        try {
            const user = await verify(token);
            req.user = user;
            next();
        } catch (error) {
            // res.status(401);
            next(new Error('UnAuthorized...'));
        }
    } else {
        res.status(401);
        next(new Error('UnAuthorized...'));
    }

}

const checkAuthurizationHeader = async (req, res, next) => {
    const authorization = req.get('authorization');

    if (authorization) {
        const token = authorization.split(' ')[1];
        console.log(token);

        try {
            const user = await verify(token);
            req.user = user;
            return next();
        } catch (error) {
            console.log(error);
        }
    }
        res.status(401);
        next(new Error('UnAuthorized...'));
  

}

const notFound = (req, res, next) => {
    const error = new Error('Not Found ' + req.originalUrl);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    res.json({
        message: err.message,
        error: process.env.NODE_ENV == 'production' ? '' : err.stack,
    });
}

module.exports = {
    notFound,
    errorHandler,
    checkAuthHeader,
    checkAuthurizationHeader
}
