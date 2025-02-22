function Home() {
  return (
    <div>
      <header className="bg-cover bg-center vh-100 w-100" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div className="d-flex align-items-center justify-content-center h-100 bg-dark bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold">Gönül Rahatlığı Rehberine Hoş Geldiniz</h1>
            <ul className="list-unstyled lead">
              <li>Ürünlerini satın alırken, ürünlerin üretildiği şirketlerin politikalarını sorgulayın.</li>
              <li>Boykot ürünleri servis etmeyen ve kullanmayan işletmeleri web sitemizden sorgulayabilir ve destek olabilirsiniz.</li>
              <li>Sizde boykota destek veriyor ve ürünlerini satmıyorsanız bizimle <a href="/oneri-sikayet" className="text-decoration-underline">iletişime</a> geçin ve listemizde yerinizi alın.</li>
            </ul>
            <div className="mt-4">
              <input type="text" className="form-control rounded-pill" placeholder="İşletme ara" style={{ padding: '0.5rem 1rem' }} />
              <button className="btn btn-primary mt-2 rounded-pill" style={{ padding: '0.5rem 1rem' }}>Ara</button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 w-100">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h3 fw-bold">Features</h2>
            <p className="text-muted">Explore the amazing features of our website</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="h5 fw-bold mb-3">Feature One</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="h5 fw-bold mb-3">Feature Two</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="h5 fw-bold mb-3">Feature Three</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;