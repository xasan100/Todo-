import React, { Component } from 'react'
import { Button, Container, Box, FlexCon, Input } from './styayle.js'
const data = [
    { id: 1, age: 21, address: 'Tashkent', job: 'Front-end Developer', name: 'Rakhimjonov Davronbek' },
    { id: 2, age: 23, address: 'Tashkent', job: 'Front-end Developer', name: 'Komil Muhammadiyev' },
    { id: 3, age: 20, address: 'Tashkent', job: 'Front-end Developer', name: 'Mahkamov Tohirbek' },
    { id: 4, age: 28, address: 'Tashkent', job: 'Front-end Developer', name: 'Nuraliev Zuhriddin' },
    { id: 5, age: 24, address: 'Tashkent', job: 'Front-end Developer', name: 'Dilshodbek Boymamatov' },
    { id: 6, age: 21, address: 'Tashkent', job: 'Front-end Developer', name: 'Muhharam Ozodboyeva' },
    { id: 7, age: 22, address: 'Tashkent', job: 'Front-end Developer', name: 'Azimov Umarbek' },
    { id: 8, age: 22, address: 'Tashkent', job: 'Front-end Developer', name: 'Abdurazzaqov Hasanboy' },
    { id: 9, age: 20, address: 'Tashkent', job: 'Front-end Developer', name: 'Davlyatov MuhammadAli' },
    { id: 10, age: 21, address: 'Tashkent', job: 'Front-end Developer', name: 'Zohidova Ruqiya' },
    { id: 11, age: 20, address: 'Tashkent', job: 'Front-end Developer', name: 'Abduhamidov Nurbek' },
    { id: 12, age: 21, address: 'Tashkent', job: 'Front-end Developer', name: 'Nizamov Sardorbek' },
];

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data,
            selected: null,
        }
        this.nameInput = React.createRef();
        this.addressInput = React.createRef();
        this.jobInput = React.createRef();
        this.ageInput = React.createRef();
    }

    onChangeId = ({ target }) => {
        let res = data.filter(value => value.id.toString().includes(target.value))
        this.setState({ data: res })
    }
    onChangeName = ({ target }) => {
        let res = data.filter(value => value.name.toLowerCase().includes(target.value.toLowerCase()))
        this.setState({ data: res })
    }
    delete = (value) => {
        let res = this.state.data.filter(vl => vl.id !== value.id)
        this.setState({ data: res })
    }
    onSave = () => {
        let res = this.state.data.map((val) =>
            val.id === this.state.selected?.id ?
                {
                    id: this.state.selected.id,
                    name: this.nameInput.current.value,
                    age: this.ageInput.current.value,
                    job: this.jobInput.current.value,
                    address: this.addressInput.current.value,
                }
                : val
        )
        this.setState({ data: res, selected: null })
    }

    render() {
        console.log(this.state.selected);
        return (
            <Container>
                <h2>Students of G4</h2>
                <FlexCon>
                    <p>Filter by :</p>
                    <Input placeholder='ID' onChange={(e) => this.onChangeId(e)} />
                    <p>or</p>
                    <Input placeholder='Name' onChange={(e) => this.onChangeName(e)} />
                </FlexCon>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Adress</th>
                            <th>Job</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, ind) => {
                            return (
                                <tr>
                                    {this.state.selected?.id == value.id ? (
                                        <>
                                            <td>{value.id}</td>
                                            <td>
                                                <Input
                                                    ref={this.nameInput}
                                                    width='150px'
                                                    defaultValue={value.name}
                                                />
                                            </td>
                                            <td>
                                                <Input
                                                    ref={this.ageInput}
                                                    width='30px'
                                                    defaultValue={value.age}
                                                />
                                            </td>
                                            <td>
                                                <Input
                                                    ref={this.addressInput}
                                                    width=''
                                                    defaultValue={value.address}
                                                />
                                            </td>
                                            <td>
                                                <Input
                                                    ref={this.jobInput}
                                                    width='130px'
                                                    defaultValue={value.job}
                                                />
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{ind + 1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.age}</td>
                                            <td>{value.address}</td>
                                            <td>{value.job}</td>
                                        </>
                                    )}
                                    <td className='td'>
                                        {this.state.selected ? (
                                            <>
                                                <Button color="green" borderColor="green" onClick={(value) => this.onSave(value)}>Save</Button>
                                                <Button
                                                    color="blue"
                                                    borderColor="blue"
                                                    onClick={() => this.setState({ selected: null })}>
                                                    Cancel
                                                </Button>
                                            </>
                                        ) : (
                                            <Button
                                                color="orange" borderColor="orange"
                                                onClick={() => this.setState({ selected: value })}>
                                                Edit
                                            </Button>
                                        )}
                                    </td>
                                    <td>
                                        <Button color="red" borderColor="red" onClick={(e) => this.delete(value)}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default Table