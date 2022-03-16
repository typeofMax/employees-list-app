import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {
            name: 'all',
            label: 'Все сотрудники',
        },
        {
            name: 'rise',
            label: 'На повышение',
        },
        {
            name: 'moreThen1000',
            label: 'З/П больше 1000$',
        },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const activeBtn = name === props.filter;
        const clazz = activeBtn ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                key={name}
                type='button'
                className={`btn ${clazz}`}
                onClick={() => props.onFilter(name)}
            >
                {label}
            </button>
        );
    });

    return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
