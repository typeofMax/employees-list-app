import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, changeSalary }) => {
	if (!data.length) {
		return (
			<ul className='app-list list-group'>
				<li className='list-group-item d-flex justify-content-between'>
					Сотрудники не найдены
				</li>
			</ul>
		);
	}
	const listItem = data.map((item) => {
		const { id, ...props } = item;

		return (
			<EmployeesListItem
				key={id}
				{...props}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) =>
					onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
				}
				changeSalary={changeSalary}
			/>
		);
	});

	return <ul className='app-list list-group'>{listItem}</ul>;
};

export default EmployeesList;
