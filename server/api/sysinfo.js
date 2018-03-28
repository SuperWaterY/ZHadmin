var express = require('express')
var router = express.Router()

var sysinfo = require('../schema/schemas').sysinfo

router.get('/sysinfo',function(req , res){
    sysinfo.find({}).sort({'_id':-1}).exec(function(error, data){
        if(error){
            console.log('数据获取失败')
        }else{
            res.json({
                status:'ok',
                message:'文章列表读取成功！',
                data:data
            })
        }
    })    

})
router.post('/sysinfo',function(req , res, next){
    // console.log(req.body)
    var one = new sysinfo( {
        sysinfo: req.body.sysinfo,
        partname: req.body.partname,
        exampart: req.body.exampart,
        fund: req.body.fund
    })
    one.save()
    res.json(
        {
            status:'ok',
            message:'成功！',
            data0: req.body
        }
    )
    
   
})

module.exports = router