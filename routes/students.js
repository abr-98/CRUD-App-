const express = require("express");

const  student_Act = require("../controllers/students"); 

const router = express.Router();

router.get('/', student_Act.getStudents);
router.get('/:roll', student_Act.getspecStudent);
router.post('/', student_Act.createstudent);
router.patch('/:roll', student_Act.updatestudent);
router.delete('/:roll', student_Act.deletestudent);

module.exports=router;