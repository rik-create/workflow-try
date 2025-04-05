import React from 'react';
import MapView from './components/MapView';
import StatusLegend from './components/StatusLegend';
import ZoomInButton from './components/ZoomInButton';
import ZoomOutButton from './components/ZoomOutButton';
import PanControl from './components/PanControl';
import SearchInput from './components/SearchInput';
import SearchButton from './components/SearchButton';
import FilterDropdown from './components/FilterDropdown';
import LotInfoPanel from './components/LotInfoPanel';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Cemetery Admin Panel</h1>
        <div className="search-container">
          <SearchInput />
          <SearchButton />
        </div>
      </header>
      <main className="app-main">
        <aside className="app-sidebar">
          <StatusLegend />
          <FilterDropdown />
        </aside>
        <section className="map-container">
          <MapView />
          <div className="map-controls">
            <ZoomInButton />
            <ZoomOutButton />
            <PanControl />
          </div>
        </section>
        <LotInfoPanel />
      </main>
    </div>
  );
};

export default App;
