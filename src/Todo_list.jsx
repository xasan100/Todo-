import React, { Component } from 'react'
import "./Todo_list"
import { Conhero, Container1 } from './Todo_list'

export default class Todo_list extends Component {
    render() {

        const onEdit=()=>{

        }   
        return (
            <Container1>


                <Conhero>
                    <table border={0} style={{ borderCollapse: 'collapse' }}>
                        <thead >
                            <tr className='tr_one'>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>Address</th>
                                <th>STATUS</th>
                                <th>NICNAME</th>
                                <th>UNIV</th>
                                <th>JOB</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id='bor'>
                                <td>1</td>
                                <td>Sardorbek Muhtarov</td>
                                <td>26</td>
                                <td>Namangan,Uzbekistan</td>
                                <td>Student</td>
                                <td>Ali</td>
                                <td>sejong</td>
                                <td>Devloper</td>
                               <button>Edit</button>
                            </tr>

                            <tr id='bor'>
                                <td>1</td>
                                <td>Sardorbek Muhtarov</td>
                                <td>26</td>
                                <td>Namangan,Uzbekistan</td>
                                <td>Student</td>
                                <td>Ali</td>
                                <td>sejong</td>
                                <td>Devloper</td>
                                <button>Edit</button>
                            </tr>

                            <tr id='bor'>
                                <td>1</td>
                                <td>Sardorbek Muhtarov</td>
                                <td>26</td>
                                <td>Namangan,Uzbekistan</td>
                                <td>Student</td>
                                <td>Ali</td>
                                <td>sejong</td>
                                <td>Devloper</td>
                                <button>Edit</button>
                            </tr>

                            <tr id='bor'>
                                <td>1</td>
                                <td>Sardorbek Muhtarov</td>
                                <td>26</td>
                                <td>Namangan,Uzbekistan</td>
                                <td>Student</td>
                                <td>Ali</td>
                                <td>sejong</td>
                                <td>Devloper</td>
                                <button onClick={() => onEdit()}>Edit</button>
                            </tr>
                        {/* </tbody> */}
                    </table>
                </Conhero>
            </Container1>
        )
    }
}
