const isLogged = (req,res) => {
    const {admin, logged} = req.session
    res.json({response:true, logged, admin})
};

export default isLogged