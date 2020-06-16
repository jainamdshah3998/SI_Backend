var db=require('../dbconnec');
var flat={
    getAllFlat:function(callback){
        return db.query('select * from flat',callback);
    },
    addFlat:function(item,callback){
        return db.query("insert into flat(flatName,secretaryPhoneNumber,numberOfFloor) values(?,?,?)",[item.flatName,item.secretaryPhoneNumber,item.numberOfFloor],callback);
    },
    deleteFlat:function(flatName,secretaryPhoneNumber,callback){
        return db.query("delete from flat where flatName=? and secretaryPhoneNumber=?",[flatName,secretaryPhoneNumber],callback);
    },
    getFlatById:function(flatName,secretaryPhoneNumber,callback){
        return db.query("select * from flat where flatName=? and secretaryPhoneNumber=?",[flatName,secretaryPhoneNumber],callback);
    },
    updateFlatById:function(flatName,secretaryPhoneNumber,item,callback){
        return db.query("update flat set numberOfFloor=?,flatName=? where secretaryPhoneNumber=? and flatName=?",[item.numberOfFloor,item.flatName,secretaryPhoneNumber,flatName],callback);
    },
    getFlatBySecretaryPhoneNumber:function(secretaryPhoneNumber,callback){
        return db.query('select * from flat where secretaryPhoneNumber=?',[secretaryPhoneNumber],callback);
    }

};
module.exports=flat;
//flatName,secretaryPhoneNumber,numberOfFloor