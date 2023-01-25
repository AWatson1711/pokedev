import { React, useState } from 'react';
import Nav from './Nav';

const Test2 = () => {
    const [students, setStudents] = useState([
        {id: 1, name: 'Toto', html: 0, css: 0, js: 0},
        {id: 2, name: 'Mathieu', html: 20, css: 20, js: 20},
        {id: 3, name: 'Victoire', html: 15, css: 17, js: 13},
        {id: 4, name: 'Mohamed', html: 16, css: 8, js: 14},
        {id: 5, name: 'Andrew', html: 20, css: 18, js: 17}
    ]);
      
    const [studentName, setStudentName] = useState('');
    const [studentHtml, setStudentHtml] = useState();
    const [studentCss, setStudentCss] = useState();
    const [studentJs, setStudentJs] = useState();

    const onChangeName = (e) => {
        setStudentName(e.target.value)
    }


    const deleteStudent = (id) => {
        const newStudents = [...students];
        const newStudentsFilter = newStudents.filter(student => student.id !== id)
        setStudents(newStudentsFilter)
        
        
    };

    const updateStudent = (student) => {

        setStudentName(student.name)
        setStudentHtml(student.html)
        setStudentCss(student.css)
        setStudentJs(student.js)
        
    };
    const formUpdate = () => {
        // let studentId = students[students.length - 1].id +1;
        const newStudents = [...students];
        newStudents.fill({ name: studentName, html: studentHtml, css: studentCss, js: studentJs})
        setStudents(newStudents)
    }

    const formSubmit = () => {
        let studentId = students[students.length - 1].id +1;
        const newStudents = [...students];
        newStudents.push({id:  studentId, name: studentName, html: studentHtml, css: studentCss, js: studentJs})
        setStudents(studentName)
    }

    return (
        <div>
            <header>
                <h1>Page test 2</h1>
                <Nav/>
            </header>
            <main>
                <section>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='6'>Notes des etudiants</th>
                        </tr>
                        <tr>
                            <th>Nom</th>
                            <th>Html</th>
                            <th>Css</th>
                            <th>Js</th>
                            <th>Moyenne</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                            {students.map((student)=>{
                                return <tr key={student.id}>
                                            <td>{student.name}</td> 
                                            <td>{student.html}</td> 
                                            <td>{student.css}</td> 
                                            <td>{student.js}</td> 
                                            <td>{Math.round((student.html + student.css + student.js )/3)}</td>
                                            <td><button onClick={()=>{deleteStudent(student.id)}}>X</button></td>
                                            <td><button onClick={()=>{updateStudent(student)}}>O</button></td>
                                        </tr>

                            })}

                    </tbody>
                </table>
                </section>
                <section>
                    <h2>Formulaire d'update</h2>
                    <form onSubmit={(e) => {e.preventDefault(); formUpdate()} }>
                        <input value={studentName} onChange={onChangeName} type="text" name="name" id="name" placeholder='Votre nom' />
                        <br />
                        <input value={studentHtml} onChange={(e) => {setStudentHtml(parseFloat(e.target.value))}} type="number" id='html' placeholder='Note Html' />
                        <br />
                        <input value={studentCss} onChange={(e) => {setStudentCss(parseFloat(e.target.value))}} type="number" placeholder='Note Css' />
                        <br />
                        <input value={studentJs} onChange={(e) => {setStudentJs(parseFloat(e.target.value))}} type="number" placeholder='Note Js' />
                        <br />
                        <input type="Submit" value='Update' />
                    </form>
                </section>
                <section>
                    <h2>Formulaire d'ajout</h2>
                    <form onSubmit={(e) => {e.preventDefault(); formSubmit()} }>
                        <input onChange={onChangeName} type="text" name="name" id="name" placeholder='Votre nom' />
                        <br />
                        <input onChange={(e) => {setStudentHtml(parseFloat(e.target.value))}} type="number" id='html' placeholder='Note Html' />
                        <br />
                        <input onChange={(e) => {setStudentCss(parseFloat(e.target.value))}} type="number" placeholder='Note Css' />
                        <br />
                        <input onChange={(e) => {setStudentJs(parseFloat(e.target.value))}} type="number" placeholder='Note Js' />
                        <br />
                        <input type="Submit" value='Envoyer' />
                    </form>
                </section>
                
            </main>
        </div>
    );
};

export default Test2;