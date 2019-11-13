const cohort = process.argv[2]
const values = [`${cohort}`]

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name = $1
ORDER BY teacher
`;

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(result => {
    console.log(`${result.cohort} : ${result.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));