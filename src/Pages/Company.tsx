const generateRandomBusinesses = (count: number) => {
  const businesses = [];
  for (let i = 0; i < count; i++) {
    businesses.push({
      id: i,
      name: `İşletme ${i + 1}`,
      address: `Adres ${i + 1}`,
      type: `Tür ${i % 5 + 1}`,
      subtype: `Alt Tür ${i % 3 + 1}`,
      location: `Konum ${i % 10 + 1}`,
      logo: `https://via.placeholder.com/150?text=Logo+${i + 1}`
    });
  }
  return businesses;
};

const businesses = generateRandomBusinesses(64);

function Company() {
  return (
    <div className="container mt-5">
      <h1 className="display-4">İşletmeler</h1>
      <div className="row">
        {businesses.map(business => (
          <div key={business.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={business.logo} className="card-img-top" alt={business.name} />
              <div className="card-body">
                <h5 className="card-title">{business.name}</h5>
                <p className="card-text">{business.address}</p>
                <p className="card-text"><small className="text-muted">{business.type} - {business.subtype}</small></p>
                <p className="card-text"><small className="text-muted">{business.location}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Company;