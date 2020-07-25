var notice=require('../models/notice');
var express=require('express');
var router=express.Router();


router.get('/:secretaryPhoneNumber?',function(req,res,next)
{
    console.log(req.params.secretaryPhoneNumber);
    notice.getNotice(req.params.secretaryPhoneNumber,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
);

router.post('/',function(req,res,next)
{
    notice.insertNotice(req.body,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
);

router.put('/:id',function(req,res,next)
{
    notice.updateNotice(req.params.id,req.body,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
);

router.delete('/:id',function(req,res,next)
{
    notice.deleteNotice(req.params.id,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
);

module.exports=router;  