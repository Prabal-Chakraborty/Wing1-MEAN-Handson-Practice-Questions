const mongoose = require('mongoose');
const Course = require('./src/models/courses');

mongoose
  .connect('mongodb://127.0.0.1:27017/learning-app-easy')
  .then(async () => {
    console.log('MongoDB connected');

    await Course.deleteMany({});

    const courses = [
      {
        courseName: 'Angular Basics',
        courseDept: 'UI',
        description: 'Learn angular fundamentals properly',
        duration: 25,
        isApplied: false,
        isRated: false,
        noOfRatings: 0,
        rating: 0
      },
      {
        courseName: 'Node.js API',
        courseDept: 'WD',
        description: 'Build backend apis with node',
        duration: 30,
        isApplied: true,
        isRated: false,
        noOfRatings: 4,
        rating: 4.5
      },
      {
        courseName: 'Machine Learning Intro',
        courseDept: 'AI',
        description: 'Understand machine learning concepts',
        duration: 40,
        isApplied: true,
        isRated: true,
        noOfRatings: 8,
        rating: 4.2
      },
      {
        courseName: 'Data Science Toolkit',
        courseDept: 'DS',
        description: 'Work with data science tools',
        duration: 35,
        isApplied: false,
        isRated: false,
        noOfRatings: 2,
        rating: 3.5
      },
      {
        courseName: 'Cloud Computing Core',
        courseDept: 'CC',
        description: 'Study cloud computing services',
        duration: 28,
        isApplied: true,
        isRated: false,
        noOfRatings: 5,
        rating: 4.0
      },
      {
        courseName: 'Computer Security',
        courseDept: 'CS',
        description: 'Learn computer security basics',
        duration: 22,
        isApplied: false,
        isRated: false,
        noOfRatings: 1,
        rating: 5.0
      },
      {
        courseName: 'Graphic Design Pro',
        courseDept: 'GD',
        description: 'Master graphic design workflow',
        duration: 18,
        isApplied: true,
        isRated: true,
        noOfRatings: 10,
        rating: 4.8
      },
      {
        courseName: 'UI Design System',
        courseDept: 'UI',
        description: 'Create scalable design systems',
        duration: 20,
        isApplied: false,
        isRated: false,
        noOfRatings: 3,
        rating: 4.1
      }
    ];

    await Course.insertMany(courses);

    console.log('Dummy courses inserted successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error while seeding data:', error);
    process.exit(1);
  });