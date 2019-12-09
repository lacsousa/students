import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {

  async index(req, res) {
    const students = await Student.findAll();

    return res.json(students);
  }

  async store(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      age: Yup.number()
        .integer()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const studentExists = await Student.findOne({ where: { email: req.body.email } });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }
    
    const student = await Student.create(req.body);

    return res.json(student);
  }
}

export default new StudentController();
