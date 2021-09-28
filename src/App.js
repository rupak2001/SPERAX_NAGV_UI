import React, { useState } from 'react';
import Docpg from './docpg'
import Docxplorer from './docXplorer';

function App() {
	var [changetoDoc_ini, changetoDoc_up] = useState(<Docpg pageChange = {(id)=>{changeToDocs(id)}}/>)

	var changeToDocs = (id) => {
		changetoDoc_up(<Docxplorer prevID = {id.target.id} />)
	}
	return (
		<div className="App">
			{changetoDoc_ini}
		</div>
	);
}

export default App;
