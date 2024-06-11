// components/TaxForm.js
import { useState } from 'react';
import styles from './Itax.module.css';

const Itax = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    pin: '',
    income: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.form1}>
        <h4 className={styles.kra}>KRA payments Form</h4>
        <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>KRA PIN:</label>
        <input type="text" name="pin" value={formData.pin} onChange={handleChange} required />
      </div>
      <div>
        <label>Annual Income:</label>
        <input type="number" name="income" value={formData.income} onChange={handleChange} required />
      </div>
      <button type="submit">Calculate Tax</button>
    </form>
    </div>
    
  );
};

export default Itax;
