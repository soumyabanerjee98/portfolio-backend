const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');

router.get("/", async (req, res) => {
   try{
    const prj = await Projects.find();
    res.json(prj);
   }
   catch{
    (err) => {res.json(err);}
   } 
});
router.get("/:projectId", async (req, res) => {
    try{
        const spc_prj = await Projects.findOne({
            projectId: req.params.projectId
        });
        res.json(spc_prj);
    }
    catch{
        (err) => {res.json(err);}
    }
});
router.post("/", async (req, res) => {
    const prj_1 = new Projects({
        projectId: req.body.projectId,
        projectName: req.body.projectName,
        projectDetails: req.body.projectDetails,
        projectLink: req.body.projectLink
    });
    try{
        const savedPrj = await prj_1.save();
        res.json(savedPrj);
    }
    catch{
        (err) => {res.json(err);}
    }
    
});
router.delete("/:projectId", async (req, res) => {
    try{
        const del_prj = await Projects.remove({
            projectId : req.params.projectId
        });
        res.json(del_prj);
    }
    catch{
        (err) => {res.json(err);}
    }
});
router.patch("/:projectId", async (req, res) => {
    try{
        const upd_prj = await Projects.updateOne({projectId : req.params.projectId}, {
            $set: { 
                projectId: req.body.projectId,
                projectName: req.body.projectName,
                projectDetails: req.body.projectDetails,
                projectLink: req.body.projectLink
            }
        })
        res.json(upd_prj);
    }
    catch{
        (err) => {res.json(err);}
    }
})

module.exports = router;