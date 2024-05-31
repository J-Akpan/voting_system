// const voterModel = require('../models/Voters')



async function getAllVoters(req, res){
    try {
        const voters = await VotersModel.findAll()
        res.status(200).json(voters)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports ={
    getAllVoters
}