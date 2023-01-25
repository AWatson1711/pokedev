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

    return (
        <div>
            <header>
                <h1>Page test 2</h1>
                <Nav/>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>html</th>
                            <th>css</th>
                            <th>js</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {students.map((student)=>{
                                const studentDisplay =  
                                <tr>
                                    <tr>
                                        <td>
                                            {student.id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {student.name}
                                        </td>
                                    </tr>
                                    <tr>
                                            {student.html}
                                    </tr>
                                    <tr>
                                        <td>
                                            {student.css}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {student.js}
                                        </td>
                                    </tr>
                                </tr>
                                


                                return studentDisplay;
                                        
                            })}
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Test2;