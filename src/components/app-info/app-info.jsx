import './app-info.css';

const AppInfo = (props) => {
	return (
		<div className='app-info'>
			<h1 className='app-title'>Учет сотрудников в компании N</h1>
			<h2 className='app-subtitle'>
				Общее число сотрудников: {props.employeesCount}
			</h2>
			<h2 className='app-subtitle'>Премию получат: {props.increased}</h2>
		</div>
	);
};

export default AppInfo;
