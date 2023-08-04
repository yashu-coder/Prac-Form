import regDb from '../model/reqDb.js'

function addRegistration(req,res){
    new regDb(req.body).save().then(
        (addData)=>{
           
            console.log('data save successfully',addData);
            res.json({
                success: true,
                message: 'Data Saved Successfully',
                data: {
                    ...addData

                }
            })
        }
    ).catch((err)=>{
        console.log(err);
    })

}

function veiwRegistration(req,res){
    regDb.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((err)=>{
        console.log(err);
    })
    
}

function filterRegistration(req,res){
    regDb.find(req.body).then(
        (data)=>{
            res.json(data)
        }
    ).catch((err)=>{
        console.log(err);
        res.json({
            "err": err
        })
    })
    
}

function updateRegistration(req,res){
    regDb.updateMany(req.body.filter,req.body.data).then(
        (data)=>{
            res.json(data)
        }
    ).catch((err)=>{
        console.log(err);
        res.json({
            "err": err
        })
    })
    
}

export {addRegistration, veiwRegistration,filterRegistration,updateRegistration};