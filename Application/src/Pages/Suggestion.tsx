import React, { useState } from 'react';

function Suggestion() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4">Öneri & Şikayet</h1>
      <p>Boykot ürünleri satan işletmelerin listeden kaldırıması için ya da web sitemizin daha iyiye gitmesi için önerileriniz varsa lütfen bizlerle iletişime geçin. Şikayet konusuna göre ekte dosya gönderebilirsiniz.Tüm fikirleniz değerlidir.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='p-2' htmlFor="name">Ad ve Soyad</label>
          <input
            type="text"
            className="form-control form-control-sm rounded-pill"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label className='p-2' htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control form-control-sm rounded-pill"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label className='p-2' htmlFor="subject">Konu Başlığı</label>
          <input
            type="text"
            className="form-control form-control-sm rounded-pill"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label className='p-2' htmlFor="message">Açıklama</label>
          <textarea
            className="form-control form-control-sm rounded"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={3}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 rounded-pill p-2">Gönder</button>
      </form>
    </div>
  );
}

export default Suggestion;