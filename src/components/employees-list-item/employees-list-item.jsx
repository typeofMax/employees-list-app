import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            stared: false,
        };
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase,
        }));
    };

    onStared = () => {
        this.setState(({ stared }) => ({
            stared: !stared,
        }));
    };

    render() {
        const { increase, stared } = this.state;

        let classes = 'list-group-item d-flex justify-content-between';

        if (increase) {
            classes += ' increase';
        }
        if (stared) {
            classes += ' like';
        }

        return (
            <li className={classes}>
                <span className='list-group-item-label' onClick={this.onStared}>{this.props.name}</span>
                <input
                    type='text'
                    className='list-group-item-input'
                    defaultValue={this.props.salary + '$'}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-cookie btn-sm '
                        onClick={this.onIncrease}
                    >
                        <i className='fas fa-cookie'></i>
                    </button>

                    <button type='button' className='btn-trash btn-sm '>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;
