const jwt=require('jsonwebtoken');
const authmiddleware=(allowedrole)=>{
    return(req,res,next)=>{
        let token=req.headers.authorisation.split(" ")[1];
        if(!token){
            res.status(400).json({msg:"token not found, please login"});

        }
        else{
            var decoded=jwt.verify(token,process.env.JWT_SECRET);
            if(decoded){
                if(allowedrole.includes(decodedrole)){
                    req.body.userid=decoded.userid;
                    next();
                }
                else{
                    res.status(403).json({msg:"unauthorised"});
                }
               
            }
        }
    }
}

module.exports=authmiddleware;