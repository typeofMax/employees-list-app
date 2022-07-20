//@Libs
import { Component } from 'react';
//@Styles
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onAdd = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        });
    };

    render() {
        const { name, salary } = this.state;

        return (
            <div className='app-add-form'>
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onAdd} className='add-form d-flex'>
                    <input
                        name='name'
                        type='text'
                        className='form-control new-post-label'
                        placeholder='Как его зовут?'
                        onChange={this.onChangeValue}
                        value={name}
                    />
                    <input
                        name='salary'
                        type='number'
                        className='form-control new-post-label'
                        placeholder='З/П в $?'
                        onChange={this.onChangeValue}
                        value={salary}
                    />

                    <button type='submit' className='btn btn-outline-light'>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
