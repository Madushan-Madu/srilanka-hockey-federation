import React, { useState, useEffect } from 'react';
import EquipmentCard from '../components/EquipmentCard';
import { getEquipmentListings } from '../services/api';

function EquipmentsPage() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Hockey Sticks',
    'Goalkeeper Gear',
    'Kits',
    'Training Tools',
    'Accessories',
    'Other',
  ];

  useEffect(() => {
    const fetchEquipment = async () => {
      setLoading(true);
      try {
        const data = await getEquipmentListings(filterCategory === 'All' ? '' : filterCategory);
        setEquipment(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch equipment. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [filterCategory]); // Re-fetch when filterCategory changes

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAndSearchedEquipment = equipment.filter((item) => {
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="equipments-page container">
      <h1 className="text-center">Official Equipment Listings</h1>
      <p className="text-center description-text">Browse equipment available from our community and suppliers. Contact sellers directly for purchases.</p>

      <div className="equipment-filters">
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${filterCategory === cat || (filterCategory === '' && cat === 'All') ? 'btn-filter-active' : 'btn-filter-inactive'}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search equipment..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {loading && <p className="text-center">Loading equipment...</p>}
      {error && <p className="text-center error-message">{error}</p>}

      {!loading && filteredAndSearchedEquipment.length === 0 && !error && (
        <p className="text-center">No equipment listings found for the selected criteria.</p>
      )}

      <div className="equipment-grid">
        {filteredAndSearchedEquipment.map((item) => (
          <EquipmentCard key={item._id} equipment={item} />
        ))}
      </div>
    </div>
  );
}

export default EquipmentsPage;