import React, { useState, useContext, createContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AdminPanel.css';

// Create a context for authentication
const AuthContext = createContext({ isAuthenticated: false, login: () => {}, logout: () => {} });

interface Business {
  id: number;
  name: string;
  city: string;
  district: string;
  neighborhood: string;
  address: string;
  type: string;
  subtype: string;
  location: string;
  logo: string;
}

const initialBusinesses: Business[] = [];

const cities = [
  { name: 'İstanbul', districts: [
    { name: 'Kadıköy', neighborhoods: ['Moda', 'Fenerbahçe', 'Bostancı'] },
    { name: 'Beşiktaş', neighborhoods: ['Etiler', 'Levent', 'Ortaköy'] }
  ]},
  { name: 'Ankara', districts: [
    { name: 'Çankaya', neighborhoods: ['Kızılay', 'Bahçelievler', 'Ayrancı'] },
    { name: 'Keçiören', neighborhoods: ['Etlik', 'Aktepe', 'Ovacık'] }
  ]}
];

const types = {
  Restaurant: ['Dönerci', 'Kebapçı', 'Balıkçı'],
  Cafe: ['Kahve Çeşitleri', 'Pastane', 'Çay Bahçesi'],
  Market: ['Süpermarket', 'Bakkal', 'Organik Market']
};

const AdminPanel = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [businesses, setBusinesses] = useState<Business[]>(initialBusinesses);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (id: number) => {
    setBusinesses(businesses.filter(business => business.id !== id));
  };

  const handleEdit = (business: Business) => {
    setEditingBusiness(business);
    setShowForm(true);
  };

  const handleSubmit = (values: Business, { resetForm }: any) => {
    if (editingBusiness) {
      setBusinesses(businesses.map(business => (business.id === editingBusiness.id ? values : business)));
      setEditingBusiness(null);
    } else {
      setBusinesses([...businesses, { ...values, id: Date.now() }]);
    }
    resetForm();
    setShowForm(false);
  };

  const filteredBusinesses = businesses.filter(business => {
    return (
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.subtype.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (!isAuthenticated) {
    return <div>Access Denied. Please log in to access the Admin Panel.</div>;
  }

  return (
    <div className="container mt-5">
      <h3 className="display-6">Admin Paneli</h3>
      <button className="btn btn-primary mb-3" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Formu Gizle' : 'Yeni İşletme Ekle'}
      </button>
      {showForm && (
        <div className="mb-5">
          <Formik
            initialValues={editingBusiness || { id: 0, name: '', city: '', district: '', neighborhood: '', address: '', type: '', subtype: '', location: '', logo: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Ad gerekli'),
              city: Yup.string().required('Şehir gerekli'),
              district: Yup.string().required('İlçe gerekli'),
              neighborhood: Yup.string().required('Mahalle gerekli'),
              address: Yup.string().required('Adres gerekli'),
              type: Yup.string().required('Tür gerekli'),
              subtype: Yup.string().required('Alt tür gerekli'),
              location: Yup.string().required('Konum gerekli'),
              logo: Yup.string().required('Logo gerekli'),
            })}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Ad</label>
                  <Field name="name" type="text" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="city">Şehir</label>
                  <Field as="select" name="city" className="form-control" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue('city', e.target.value);
                    setFieldValue('district', '');
                    setFieldValue('neighborhood', '');
                  }}>
                    <option value="">Şehir seçin</option>
                    {cities.map(city => (
                      <option key={city.name} value={city.name}>{city.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="city" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="district">İlçe</label>
                  <Field as="select" name="district" className="form-control" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue('district', e.target.value);
                    setFieldValue('neighborhood', '');
                  }}>
                    <option value="">İlçe seçin</option>
                    {values.city && cities.find(city => city.name === values.city)?.districts.map(district => (
                      <option key={district.name} value={district.name}>{district.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="district" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="neighborhood">Mahalle</label>
                  <Field as="select" name="neighborhood" className="form-control">
                    <option value="">Mahalle seçin</option>
                    {values.district && cities.find(city => city.name === values.city)?.districts.find(district => district.name === values.district)?.neighborhoods.map(neighborhood => (
                      <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="neighborhood" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="address">Adres</label>
                  <Field name="address" type="text" className="form-control" />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="type">Tür</label>
                  <Field as="select" name="type" className="form-control" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue('type', e.target.value);
                    setFieldValue('subtype', '');
                  }}>
                    <option value="">Tür seçin</option>
                    {Object.keys(types).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="type" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="subtype">Alt Tür</label>
                  <Field as="select" name="subtype" className="form-control">
                    <option value="">Alt tür seçin</option>
                    {values.type && types[values.type as keyof typeof types].map(subtype => (
                      <option key={subtype} value={subtype}>{subtype}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="subtype" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="location">Konum</label>
                  <Field name="location" type="text" className="form-control" />
                  <ErrorMessage name="location" component="div" className="text-danger" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="logo">Dükkan Logosu</label>
                  <Field name="logo" type="text" className="form-control" />
                  <ErrorMessage name="logo" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-success mt-3">
                  {editingBusiness ? 'Güncelle' : 'Ekle'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}

      <h2 className="mt-5">İşletmeler</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Arama"
          className="form-control form-control-sm mb-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Şehir</th>
            <th>İlçe</th>
            <th>Mahalle</th>
            <th>Adres</th>
            <th>Tür</th>
            <th>Alt Tür</th>
            <th>Konum</th>
            <th>Logo</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {filteredBusinesses.map(business => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.city}</td>
              <td>{business.district}</td>
              <td>{business.neighborhood}</td>
              <td>{business.address}</td>
              <td>{business.type}</td>
              <td>{business.subtype}</td>
              <td>{business.location}</td>
              <td><img src={business.logo} alt={business.name} style={{ width: '50px' }} /></td>
              <td>
                <i className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(business)}>Düzenle</i>
                <i className="btn btn-danger btn-sm" onClick={() => handleDelete(business.id)}>Sil</i >
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;