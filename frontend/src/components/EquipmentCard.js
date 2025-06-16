import React from 'react';

function EquipmentCard({ equipment }) {
  return (
    <div className="equipment-card card">
      <div className="equipment-image">
        <img src={equipment.imageUrl} alt={equipment.name} />
      </div>
      <div className="equipment-details">
        <h3>{equipment.name}</h3>
        <p className="equipment-category">{equipment.category}</p>
        <p className="equipment-description">{equipment.description}</p>
        {equipment.price && <p className="equipment-price">Price: LKR {equipment.price.toLocaleString()}</p>}
        {equipment.condition && <p className="equipment-condition">Condition: {equipment.condition}</p>}

        <div className="seller-info">
          <h4>Seller Contact:</h4>
          <p><strong>{equipment.sellerName}</strong></p>
          <p>Phone: <a href={`tel:${equipment.sellerPhone}`}>{equipment.sellerPhone}</a></p>
          {equipment.sellerEmail && <p>Email: <a href={`mailto:${equipment.sellerEmail}`}>{equipment.sellerEmail}</a></p>}
          {equipment.sellerSocialMedia && (
            <p>Social: <a href={equipment.sellerSocialMedia} target="_blank" rel="noopener noreferrer">View Profile</a></p>
          )}
        </div>
        <button className="btn btn-primary contact-seller-btn">Contact Seller</button>
      </div>
    </div>
  );
}

export default EquipmentCard;