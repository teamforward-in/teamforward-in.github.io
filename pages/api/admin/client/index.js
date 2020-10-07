import nc from 'next-connect';
import DBUtils from '../../../../utils/db';
import APIUtils from '../../../../utils/nc_api';

const clientsHandler = nc({onNoMatch : APIUtils.onNoMatch, onError: APIUtils.onError })
  //.use(someMiddleware())
  .get(async (req, res) => {
    let queryResults = [];
    //throw new Error('oh no!');
    // execute will internally call prepare and query
    await DBUtils.getConnection().then(async (con) => {
        const [rows, fields] = await con.execute('SELECT * FROM client',[]);
        queryResults = [...rows];
    });
    res.json(queryResults);
  });
 
export default clientsHandler;
