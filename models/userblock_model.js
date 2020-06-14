var db=require('../dbconnec');
var userblock={
    getAllUserBlock:function(callback){
        return db.query('select * from userblock',callback);
    },
    addUserBlock:function(item,callback){
        return db.query("insert into userblock(userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber) values(?,?,?,?)",[item.userPhoneNumber,item.blockNumber,item.flatName,item.secretaryPhoneNumber],callback);
    },
    deleteUserBlock:function(userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber,callback){
        return db.query("delete from userblock where userPhoneNumber=? and blockNumber=? and flatName=? and secretaryPhoneNumber=?",[userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber],callback);
    },
    getUserBlockById:function(blockNumber,flatName,secretaryPhoneNumber,callback){
        return db.query("select * from userblock where blockNumber=? and flatName=? and secretaryPhoneNumber=?",[blockNumber,flatName,secretaryPhoneNumber],callback);
    },
    updateUserBlockById:function(blockNumber,flatName,secretaryPhoneNumber,item,callback){
        return db.query("update userblock set userPhoneNumber=? where blockNumber=? and flatName=? and secretaryPhoneNumber=?",[item.userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber],callback);
    }

};
module.exports=userblock;
//userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber