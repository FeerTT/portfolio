import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import isEmail from 'validator/lib/isEmail';

const ContactForm = () => {
  const {t} = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Message: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};


  if (formData.Email.trim().length === 0) {
    errors.email = t('errorCorreo');
  } else if (!isEmail(formData.Email)) {
    errors.email = t('emailError');
  }


  if (formData.Name.trim().length === 0) {
    errors.name = t('errorName');
  } else if (formData.Name.length > 30) {
    errors.name = t('errorNameLong');
  }


  if (Object.keys(errors).length > 0) {
    setModalMessage(t('errorForm'));
    setModalVisible(true);

    setEmailError(errors.email || '');
    setNameError(errors.name || '');
    setTimeout(() => {
      setModalVisible(false);
      setNameError('');
      setEmailError('')
    }, 5000);

    return;
  }
    try {
        await axios.post('/api/enviarEmail', formData);
        setModalMessage(t('modalExito'));
        setModalVisible(true);
        setFormData({
            Name: '',
            Email: '',
            Phone: '',
            Message: '',
        });
        
        } catch (error) {
        console.error('Error al enviar el mensaje', error);
        setModalMessage(t('modalError'));
        setModalVisible(true);
        
        }
        
    };
    const closeModal = () => {
        setModalVisible(false);
        setModalMessage('');
      };
    
  return (
    <div id="container" className="flex items-center justify-center">
      <div id="contact-wrap" className="p-8 shadow-md rounded-md">
        <div id="contact-area">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder={t('nombre')}
              value={formData.Name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            {nameError && <p className='mb-5' style={{ color: 'red', backgroundColor: 'dark', padding: '8px', borderRadius: '4px' }}>{nameError}</p>}
            
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder={t('email')}
              value={formData.Email}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            {emailError && <p className='mb-5' style={{ color: 'red', backgroundColor: 'dark', padding: '8px', borderRadius: '4px' }}>{emailError}</p>}

            <input
              type="text"
              name="Phone"
              id="Phone"
              placeholder={t('telefono')}
              value={formData.Phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />

            <textarea
              name="Message"
              rows="5"
              id="Message"
              placeholder={t('mensaje')}
              value={formData.Message}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />

            <button type="submit"
              name="submit"
              value="Enviar"
              className="botonInput">
              
            {t('enviar')}</button>
          </form>
        </div>
      </div>
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button className="modal-close" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
