exports.Hello = (req,res) => {
    res.status(200).json({status:"Success",data:"Hello from Controller"})
}

exports.HelloPost = (req,res) => {
    res.status(200).json({status:"Success",data:"Hello Post Request"});
}

