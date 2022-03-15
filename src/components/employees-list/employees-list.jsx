import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
    const listItem = data.map((item) => {
        const { id, ...props } = item;

        return (
            <EmployeesListItem
                key={id}
                {...props}
                onDelete={() => onDelete(id)}
            />
        );
    });

    return <ul className='app-list list-group'>{listItem}</ul>;
};

export default EmployeesList;
