//@Libs
import { Component } from 'react';
//@Components
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
//@Styles
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'John Smith',
					salary: 2000,
					increase: false,
					rise: true,
					id: 1,
				},
				{
					name: 'Max Bogdanov',
					salary: 3000,
					increase: true,
					rise: false,
					id: 2,
				},
				{
					name: 'Mariya Belova',
					salary: 3500,
					increase: false,
					rise: false,
					id: 3,
				},
				{
					name: 'John Sena',
					salary: 900,
					increase: false,
					rise: false,
					id: 4,
				},
			],
			term: '',
			filter: 'all',
		};
		this.maxId = 5;
	}

	deleteEmployee = (id) => {
		this.setState(({ data }) => {
			const newData = data.filter((item) => item.id !== id);

			return {
				data: newData,
			};
		});
	};

	addEmployee = (name, salary) => {
		if (!name || !salary) {
			return;
		}

		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			return {
				data: [...data, newItem],
			};
		});
	};

	toggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	searchEmployee = (employeesData, term) => {
		if (term.length === 0) {
			return employeesData;
		}

		return employeesData.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onSearch = (term) => {
		this.setState({ term });
	};

	filterEmployeesList = (employeesData, filter) => {
		switch (filter) {
			case 'rise':
				return employeesData.filter((item) => item.rise);
			case 'moreThen1000':
				return employeesData.filter((item) => item.salary > 1000);
			default:
				return employeesData;
		}
	};

	onFilter = (filter) => {
		this.setState({ filter });
	};

	changeSalary = (salary, employeeName) => {
		this.setState(({ data }) => ({
			data: data.map((employee) => {
				if (employee.name === employeeName) {
					return { ...employee, salary };
				}
				return employee;
			}),
		}));
	};

	render() {
		const { data, term, filter } = this.state;

		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;

		const visibleData = this.filterEmployeesList(
			this.searchEmployee(data, term),
			filter
		);

		return (
			<div className='app'>
				<AppInfo employeesCount={employees} increased={increased} />

				<div className='search-panel'>
					<SearchPanel onSearch={this.onSearch} />
					<AppFilter filter={filter} onFilter={this.onFilter} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteEmployee}
					onToggleProp={this.toggleProp}
					changeSalary={this.changeSalary}
				/>
				<EmployeesAddForm onAdd={this.addEmployee} />
			</div>
		);
	}
}

export default App;
