import { Property } from '../components/PropertyCard';

interface Action {
    type: string;
    payload: any;
}

const savedPropertiesReducer = (state: Property[] = [], action: Action) => {
    switch (action.type) {
        case 'SAVE_PROPERTY':
            return [...state, action.payload];
        case 'UNSAVE_PROPERTY':
            return state.filter(property => property.id !== action.payload);
        default:
            return state;
    }
};

export default savedPropertiesReducer;
