var db=require('../dbconnec');
var block={
    getAllBlock:function(callback){
        return db.query('select * from block',callback);
    },
    addBlock:function(item,callback){
        return db.query("insert into block(blockNumber,flatName,secretaryPhoneNumber) values(?,?,?)",[item.blockNumber,item.flatName,item.secretaryPhoneNumber],callback);
    },
    deleteBlock:function(id,secretaryPhoneNumber,callback){
        return db.query("delete from block where flatName=? and secretaryPhoneNumber=?",[id,secretaryPhoneNumber],callback);
    },
    getBlockById:function(id,secretaryPhoneNumber,callback){
        return db.query("select * from block where flatName=? and secretaryPhoneNumber=?",[id,secretaryPhoneNumber],callback);
    },
    updateBlockById:function(id,secretaryPhoneNumber,item,callback){
        return db.query("update block set blockNumber=? where secretaryPhoneNumber=? and flatName=?",[item.blockNumber,secretaryPhoneNumber,id],callback);
    }

};
module.exports=block;
//blockNumber,flatName,secretaryPhoneNumber