import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, changeSalary }) => {
    const listItem = data.map((item) => {
        const { id, ...props } = item;

        return (
            <EmployeesListItem
                key={id}
                {...props}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute('data-toggle')
                    )
                }
                changeSalary={changeSalary}
            />
        );
    });

    return <ul className='app-list list-group'>{listItem}</ul>;
};

export default EmployeesList;