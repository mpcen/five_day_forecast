import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {	
	function cityExists(cityData) {
		return cityData.city.name == action.payload.data.city.name;
	}

	function filterCities(cityData) {
		return cityData.city.name != action.payload.data.city.name;
	}

	switch(action.type) {
		case FETCH_WEATHER:			
			if(action.payload.data.cod != '404') {				
				if(state.find(cityExists)) {					
					const filteredCities = state.filter(filterCities);
					
					return [action.payload.data, ...filteredCities];
				}
				else {
					return [action.payload.data, ...state];
				}				
			}
	}

	return state;
}