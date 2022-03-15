import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Smith', salary: 2000, increase: false, id: 1 },
                { name: 'Max Bogdanov', salary: 3000, increase: false, id: 2 },
                { name: 'Mariya Belova', salary: 3500, increase: false, id: 3 },
            ],
        };
        this.maxId = 4;
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
            id: this.maxId++,
        };

        this.setState(({ data }) => {
            return {
                data: [...data, newItem],
            };
        });
    };

    render() {
        return (
            <div className='app'>
                <AppInfo />

                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteEmployee}
                />
                <EmployeesAddForm onAdd={this.addEmployee} />
            </div>
        );
    }
}

export default App;
