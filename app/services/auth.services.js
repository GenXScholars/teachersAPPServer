
async function  login(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password){
       res.status(404).json({
           message: "username or password cannot be empty"
       })
    }
    const teacher = await Teacher.findOne({username});
    if(teacher){
     bcrypt.compare(password, teacher.password).then((result) => {
       if(result){
              //teacher password in the token so we pick only the email and id
      const body = { _id : teacher._id };
      //Sign the JWT token and populate the payload with the teacher email and id
      const token = jwt.sign({ teacher : body }, config.SECRET, { expiresIn: 60 });
      //Send back the token to the teacher
       res.status(200).json({
          teacher:omitPassword(teacher._doc),
          token
         })
       } 
     })      
    } else {
        res.status(404).json({
            message: "username or password inccorect"
        })
    }
}

async function  adminLogin(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    console.log("password" + req.body.password);
    console.log("username" + req.body.username);
    if(!username || !password){
       res.status(404).json({
           message: "username or password cannot be empty"
       })
    }
    const admin = await Admin.findOne({username});
    if(admin){
     bcrypt.compare(password, admin.password).then((result) => {
         console.log(result);
       if(result){
              //admin password in the token so we pick only the email and id
      const body = { _id : admin._id };
      //Sign the JWT token and populate the payload with the admin email and id
      const token = jwt.sign({ admin : body }, config.SECRET, { expiresIn: 60 });
      //Send back the token to the admin
       res.status(200).json({
          admin:omitPassword(admin._doc),
          token
         })
       } 
     })      
    } else {
        res.status(404).json({
            message: "username or password inccorect"
        })
    }
}



module.exports = {
    register,
    verify,
    login,
    adminRegister,
    adminVerify,
    adminLogin
}