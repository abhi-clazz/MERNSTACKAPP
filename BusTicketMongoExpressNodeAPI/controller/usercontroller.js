const User = require('../models/User')


exports.AddUser = async (req, res, next) => {
    const user = new User(
        {
            username:req.body.username,
            password:req.body.password,
            mobile:req.body.mobile,
            email:req.body.email
            
        })
        try{
            const saveUser=await user.save();
            res.json(saveUser);
        }
        catch(err)
        {
            res.json(err)
    }
    
}
