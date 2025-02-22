import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Business {
  id: number;
  name: string;
  address: string;
  type: string;
  subtype: string;
  location: string;
  logo: string;
}

const initialBusinesses: Business[] = [];

const AdminPanel = () => {
  const [businesses, setBusinesses] = useState<Business[]>(initialBusinesses);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);

  const handleDelete = (id: number) => {
    setBusinesses(businesses.filter(business => business.id !== id));
  };

  const handleEdit = (business: Business) => {
    setEditingBusiness(business);
  };

  const handleSubmit = (values: Business, { resetForm }: any) => {
    if (editingBusiness) {
      setBusinesses(businesses.map(business => (business.id === editingBusiness.id ? values : business)));
      setEditingBusiness(null);
    } else {
      setBusinesses([...businesses, { ...values, id: Date.now() }]);
    }
    resetForm();
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4">Admin Paneli</h1>
      <Formik
        initialValues={editingBusiness || { id: 0, name: '', address: '', type: '', subtype: '', location: '', logo: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Ad gerekli'),
          address: Yup.string().required('Adres gerekli'),
          type: Yup.string().required('Tür gerekli'),
          subtype: Yup.string().required('Alt tür gerekli'),
          location: Yup.string().required('Konum gerekli'),
          logo: Yup.string().required('Logo gerekli'),
        })}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Ad</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="address">Adres</label>
            <Field name="address" type="text" className="form-control" />
            <ErrorMessage name="address" component="div" className="text-danger" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="type">Tür</label>
            <Field name="type" type="text" className="form-control" />
            <ErrorMessage name="type" component="div" className="text-danger" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="subtype">Alt Tür</label>
            <Field name="subtype" type="text" className="form-control" />
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
          <button type="submit" className="btn btn-primary mt-3">
            {editingBusiness ? 'Güncelle' : 'Ekle'}
          </button>
        </Form>
      </Formik>

      <h2 className="mt-5">İşletmeler</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Adres</th>
            <th>Tür</th>
            <th>Alt Tür</th>
            <th>Konum</th>
            <th>Logo</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map(business => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.address}</td>
              <td>{business.type}</td>
              <td>{business.subtype}</td>
              <td>{business.location}</td>
              <td><img src={business.logo} alt={business.name} style={{ width: '50px' }} /></td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(business)}>Düzenle</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(business.id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;