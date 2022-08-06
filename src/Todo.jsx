import React, { Component } from 'react'
import { data } from './mock'
import "./styayle.js"
import { ConInput, Container } from './styayle.js'
export default class Todo extends Component {

    state = {
        data,
        select: 'id',
        selected: null
    }
    render() {

        const InputRef = React.createRef('')

        const onChangeId = ({ target }) => {

            let res = data.filter(value => `${value.id}`.includes(target.value));
            this.setState({ data: res.length ? res : data });
        }
        const onOption = ({ target }) => {
            if (this.state.select === 'id') {
                let res = data.filter(value => `${value.id}`.includes(target.value));
                this.setState({ data: res.length ? res : data });
            } else {
                let res = data.filter(value => `${value.name.toLocaleLowerCase()}`.includes(target.value.toLocaleLowerCase()));
                this.setState({ data: res.length ? res : data });
            }
        }

        const onEdit = (value) => {
            this.setState({ selected: value })
        }
        const onSave = ({ target }) => {
            let res = this.state.data.map((value => value.id === this.state.selected?.id ? { ...value, name: InputRef.current.value } : value))
            this.setState({ data: res, selected: null })
        }
        const onCansel = ({value}) => {
            this.setState({ selected: null })
        }
        const onDelete = (id) => {
            let res = this.state.data.filter((value => value.id !== id))
            this.setState({ data: res, })

        }

        return (
            <Container>
                    <h1>Students List</h1>
                   <ConInput>
                    <input onChange={onOption} type="text" placeholder='text' />
                    <select name="name" id="" onChange={(e) => this.setState({ select: e.target.value })} >
                        <option value="id">Id</option>
                        <option value="name">Name</option>
                    </select>

                   </ConInput>
                    {this.state.data.map((value) => {
                        return (<table> 
                            {value.id}
                            {value.Address}
                            {value.Status}
                            {value.Nickname}
                            {value.Univ}
                            {value.Job}
                            {this.state.selected?.id === value.id ?
                                <input
                                    defaultValue={this.state.selected.name} type="text" name='' id='' />
                                : value.name
                            }
                            {this.state.selected?.id === value.id ? (
                                <>
                                    <button onClick={onSave}>Save</button>
                                    <button onClick={onCansel}>Cansel</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => onEdit(value)}>Edit</button>
                                    <button onClick={() => onDelete(value.id)}>Delete</button>
                                </>

                            )}
                        </table>)
                    })}
            </Container>
        )
    }
}
