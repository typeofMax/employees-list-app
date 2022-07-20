//@Libs
import { Component } from 'react';
//@Styles
import './employees-list-item.css';

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			salary: props.salary,
		};
	}

	onChangeSalary = (e) => {
		const newSalary = e.target.value.slice(0, -1);

		this.setState(() => ({
			salary: newSalary,
		}));

		this.props.changeSalary(newSalary, this.props.name);
	};

	render() {
		const { name, increase, rise, onDelete, onToggleProp } = this.props;

		let classes = 'list-group-item d-flex justify-content-between';

		if (increase) {
			classes += ' increase';
		}
		if (rise) {
			classes += ' like';
		}

		return (
			<li className={classes}>
				<span
					className='list-group-item-label'
					data-toggle='rise'
					onClick={onToggleProp}
				>
					{name}
				</span>
				<input
					type='text'
					className='list-group-item-input'
					defaultValue={this.state.salary + '$'}
					onChange={this.onChangeSalary}
				/>
				<div className='d-flex justify-content-center align-items-center'>
					<button
						type='button'
						className='btn-cookie btn-sm '
						data-toggle='increase'
						onClick={onToggleProp}
					>
						<i className='fas fa-cookie'></i>
					</button>

					<button
						type='button'
						className='btn-trash btn-sm '
						onClick={onDelete}
					>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-star'></i>
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;
