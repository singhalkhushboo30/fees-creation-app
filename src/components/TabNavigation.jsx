const TabNavigation = ({ activeTab, onTabChange }) => {
    const tabs = Array.from({ length: 8 }, (_, i) => `Sem ${i + 1}`);
    return (
      <div className="tab-navigation">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={activeTab === idx + 1 ? 'active' : ''}
            onClick={() => onTabChange(idx + 1)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default TabNavigation;
  