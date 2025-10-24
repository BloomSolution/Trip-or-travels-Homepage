
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Car, Utensils, Camera, X, Menu } from 'lucide-react';

// Filter Sidebar Component
const FilterSidebar = ({ filters, onFilterChange, onReset, isOpen, onClose }) => {
  const handleFilterChange = (category, value) => {
    onFilterChange(category, value);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 md:z-0
        w-72 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-red-600">
            <div>
              <div className="text-lg font-semibold">Filter</div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={onReset} 
                className="text-sm text-gray-600 hover:text-red-600"
              >
                ↻ Reset
              </button>
              <button 
                onClick={onClose}
                className="lg:hidden text-gray-600 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Number of Nights */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Number of Nights</h3>
            {[3, 4, 5].map(night => (
              <label key={night} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                <input
                  type="checkbox"
                  checked={filters.nights.includes(night)}
                  onChange={() => handleFilterChange('nights', night)}
                  className="mr-3 w-4 h-4 accent-red-600"
                />
                <span className="text-gray-700">{night} Nights</span>
              </label>
            ))}
          </div>

          {/* Category */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Category</h3>
            {['Honeymoon', 'Family', 'Adventure'].map(cat => (
              <label key={cat} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => handleFilterChange('category', cat)}
                  className="mr-3 w-4 h-4 accent-red-600"
                />
                <span className="text-gray-700">{cat}</span>
              </label>
            ))}
          </div>

          {/* Destination */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Destination</h3>
            {['Maldives', 'Mauritius', 'Male'].map(dest => (
              <label key={dest} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                <input
                  type="checkbox"
                  checked={filters.destination.includes(dest)}
                  onChange={() => handleFilterChange('destination', dest)}
                  className="mr-3 w-4 h-4 accent-red-600"
                />
                <span className="text-gray-700">{dest}</span>
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Price</h3>
            {[
              'Rs 45001-50000',
              'Rs 51000-55000',
              'Rs 55001-60000',
              'Rs 61001-65000',
              'Rs 65001-70000',
              'Rs 70001-75000',
              'Rs 75001-80000',
              'Rs 80001-85000'
            ].map(range => (
              <label key={range} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                <input
                  type="checkbox"
                  checked={filters.priceRange.includes(range.split(' ')[1])}
                  onChange={() => handleFilterChange('priceRange', range.split(' ')[1])}
                  className="mr-3 w-4 h-4 accent-red-600"
                />
                <span className="text-gray-700 text-sm">{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterSidebar;
