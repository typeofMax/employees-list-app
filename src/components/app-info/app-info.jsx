//@Libs
import { Component } from 'react';
import cn from 'classnames';
//@Styles
import './app-info.css';
//@Images
import write from '../../assets/icons/writing.png';

class AppInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { companyName: '' };
	}

	changeCompanyName = (name) => {
		this.setState(() => ({ companyName: name }));
	};

	render() {
		return (
			<div className='app-info'>
				<div className='app-title'>
					<h1 className='app-title__text'>Учет сотрудников в компании </h1>
					<input
						className={cn('app-title__company',{'nofill-pulse': !this.state.companyName})}
						type='text'
						placeholder='Введите название...'
						value={this.state.companyName}
						onChange={(e) => this.changeCompanyName(e.target.value)}
					/>
					{this.state.companyName ? null : <img src={write} alt='' />}
				</div>
				<h2 className='app-subtitle'>
					Общее число сотрудников: {this.props.employeesCount}
				</h2>
				<h2 className='app-subtitle'>Премию получат: {this.props.increased}</h2>
			</div>
		);
	}
}

export default AppInfo;
