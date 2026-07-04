
// ─────────────────────────────────────────────────────────────────
//  YOUR TASK: Complete both routes below
//
//  POST /students
//    - Read name, rollNo, grade, percentage from req.body
//    - Create and save a new Student document
//    - On success → status 200, { message: 'Student added successfully' }
//    - On failure → status 400, { error: err.message }
//
//  GET /students
//    - Fetch all students from DB
//    - On success → status 200, array of students
//    - On failure → status 400, { error: err.message }
// ─────────────────────────────────────────────────────────────────

const express = require('express');
const router = express.Router();
const Student = require('../model/student');

// POST /students
router.post('/', async (req, res) => {
  try {
    const { name, rollNo, grade, percentage } = req.body;

    const student = new Student({
      name,
      rollNo,
      grade,
      percentage
    });

    await student.save();

    res.status(200).json({ message: 'Student added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
//PATCH /students/:id
router.patch('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const { grade } = req.body;

    console.log('studentId:', studentId);
    console.log('grade:', grade);

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { grade },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student Id Not Found' });
    }

    return res.status(200).json({
      message: 'Student updated successfully',
      student: updatedStudent
    });
  } catch (error) {
    console.log('PATCH error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});
//DELETE /students/:id
router.put('/:id', async (req,res)=>{
  let Id = req.params.id;

  const stud = Student.findById(Id);
  if(!stud){
    res.status(404).json({message:'Cound Not Find ID'})
  }
  await Student.findByIdAndDelete(Id);
  res.status(200).json({message:'ITEM DELETED'});
})

module.exports = router;