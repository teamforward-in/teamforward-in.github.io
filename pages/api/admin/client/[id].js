import nc from 'next-connect';
import DBUtils from '../../../../utils/db';
import APIUtils from '../../../../utils/nc_api';

const clientHandler = nc({onNoMatch : APIUtils.onNoMatch, onError: APIUtils.onError })
  //.use(someMiddleware())
  .get(async (req, res) => {
    let queryResults = [];
    //throw new Error('oh no!');
    // execute will internally call prepare and query
    await DBUtils.getConnection().then(async (con) => {
        const [rows, fields] = await con.execute('SELECT * FROM client where client_id = ?',[req.query.id]);
        queryResults = [...rows];
    });
    if (queryResults.length == 0){
        res.status(404).json({error : 'No match found for ' + req.query.id})
    }else{
        res.json(queryResults[0]);
    }
});
 
export default clientHandler;
