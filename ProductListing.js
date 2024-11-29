import React from 'react';
import PlantCard from './PlantCard';

const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 20, image: 'fiddle-leaf-fig.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, image: 'snake-plant.jpg' },
    { id: 3, name: 'Pothos', price: 10, image: 'pothos.jpg' },
    { id: 4, name: 'Spider Plant', price: 12, image: 'spider-plant.jpg' },
    { id: 5, name: 'ZZ Plant', price: 18, image: 'zz-plant.jpg' },
    { id: 6, name: 'Peace Lily', price: 25, image: 'peace-lily.jpg' },
];

const ProductListing = ({ addToCart }) => {
    return (
        <div className="product-listing">
            {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductListing;s