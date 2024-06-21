import { Property } from '../components/PropertyCard';

export const saveProperty = (property: Property) => ({
    type: 'SAVE_PROPERTY',
    payload: property,
});

export const unsaveProperty = (propertyId: number) => ({
    type: 'UNSAVE_PROPERTY',
    payload: propertyId,
});
