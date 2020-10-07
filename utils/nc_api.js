import nc from 'next-connect';

export default {
    onError : (err, req, res, next) =>{
        //logger.log(err);
        res.status(500).end('Error Handler :' + err.toString());
        // OR: you may want to continue
        //next()
    },
    onNoMatch : (req, res) => {
        res.status(404).end('page is not found... or is it')
    }
}