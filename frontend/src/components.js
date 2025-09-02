import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Login Page Component
export const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login - in real app would validate credentials
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-100 to-primary-200">
        <div className="flex-1 flex items-center justify-center p-8">
          <img 
            src="https://images.pexels.com/photos/5475760/pexels-photo-5475760.jpeg" 
            alt="Professional woman using laptop"
            className="max-w-full max-h-full object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full space-y-8">
          {/* Language Selector */}
          <div className="flex justify-end">
            <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none cursor-pointer">
              <option>TR</option>
              <option>EN</option>
            </select>
          </div>

          {/* Logo */}
          <div className="text-center">
            <img 
              src="https://uzmanlio.com/images/logo.png" 
              alt="Uzmanlio Logo"
              className="h-12 mx-auto mb-2"
            />
            <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          {/* Welcome Message */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Hoş geldiniz!</h2>
            <p className="text-gray-600 text-sm">
              Korvo hesabınız yok mu? 
              <a href="#" className="text-primary-600 hover:text-primary-700 ml-1">
                Hemen ücretsiz hesap oluşturun
              </a>
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="E-posta adresi"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              GİRİŞ YAP
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                Şifremi unuttum?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Title Edit Modal Component
const TitleEditModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: 'Kıdemli Dijital Pazarlama Uzmanı',
    description: 'Dijital pazarlama alanında uzman'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Unvan güncellendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Unvan Düzenle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Unvan *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="Örn: Kıdemli Dijital Pazarlama Uzmanı"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Unvan hakkında kısa açıklama..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Education Edit Modal Component
const EducationEditModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    institution: 'İstanbul Teknik Üniversitesi',
    degree: 'lisans',
    field: 'Bilgisayar Mühendisliği',
    startDate: '2016-09-01',
    endDate: '2020-06-01',
    current: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Eğitim güncellendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Eğitim Düzenle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kurum *</label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => setFormData({...formData, institution: e.target.value})}
              placeholder="Örn: İstanbul Teknik Üniversitesi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Derece *</label>
            <select
              value={formData.degree}
              onChange={(e) => setFormData({...formData, degree: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            >
              <option value="">Derece seçin</option>
              <option value="lisans">Lisans</option>
              <option value="yuksek-lisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
              <option value="on-lisans">Ön Lisans</option>
              <option value="sertifika">Sertifika Programı</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alan *</label>
            <input
              type="text"
              value={formData.field}
              onChange={(e) => setFormData({...formData, field: e.target.value})}
              placeholder="Örn: Bilgisayar Mühendisliği"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Tarihi *</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bitiş Tarihi</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={formData.current}
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="currentEdit"
              checked={formData.current}
              onChange={(e) => setFormData({...formData, current: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="currentEdit" className="ml-2 block text-sm text-gray-700">
              Halen devam ediyor
            </label>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Certification Edit Modal Component
const CertificationEditModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Google Analytics Sertifikası',
    issuer: 'Google',
    date: '2023-01-15',
    expiryDate: '2025-01-15'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sertifika güncellendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Sertifika Düzenle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sertifika Adı *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Örn: Google Analytics Sertifikası"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Veren Kurum *</label>
            <input
              type="text"
              value={formData.issuer}
              onChange={(e) => setFormData({...formData, issuer: e.target.value})}
              placeholder="Örn: Google"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alınma Tarihi *</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Geçerlilik Süresi</label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// CreateService Component (Original CreateEvent version for Hizmetlerim)
const CreateService = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    platform: '',
    eventType: 'online',
    meetingType: '', // 1-1 Özel or Grup
    price: '',
    maxAttendees: '',
    category: '',
    isOfflineEvent: false,
    selectedClients: []
  });

  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [clientSearchTerm, setClientSearchTerm] = useState('');

  // Mock clients data (in real app, this would come from your backend)
  const availableClients = [
    { id: 1, name: 'Ayşe Demir', email: 'ayse.demir@email.com' },
    { id: 2, name: 'Mehmet Kaya', email: 'mehmet.kaya@email.com' },
    { id: 3, name: 'Fatma Özkan', email: 'fatma.ozkan@email.com' },
    { id: 4, name: 'Ali Yılmaz', email: 'ali.yilmaz@email.com' },
    { id: 5, name: 'Zeynep Şahin', email: 'zeynep.sahin@email.com' }
  ];

  const filteredClients = availableClients.filter(client =>
    client.name.toLowerCase().includes(clientSearchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(clientSearchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleClientSelect = (clientId) => {
    const client = availableClients.find(c => c.id === clientId);
    if (eventData.meetingType === '1-1') {
      // Single selection for 1-1 events
      setEventData(prev => ({
        ...prev,
        selectedClients: [client]
      }));
    } else {
      // Multiple selection for group events
      setEventData(prev => ({
        ...prev,
        selectedClients: prev.selectedClients.some(c => c.id === clientId)
          ? prev.selectedClients.filter(c => c.id !== clientId)
          : [...prev.selectedClients, client]
      }));
    }
  };

  const handleRemoveClient = (clientId) => {
    setEventData(prev => ({
      ...prev,
      selectedClients: prev.selectedClients.filter(c => c.id !== clientId)
    }));
  };

  const handleAddNewClient = (newClientData) => {
    // Simulate adding new client
    const newClient = {
      id: Date.now(), // Temporary ID
      name: `${newClientData.name} ${newClientData.surname}`,
      email: newClientData.email
    };
    
    // Add to available clients list
    availableClients.push(newClient);
    
    // Auto-select the new client
    if (eventData.meetingType === '1-1') {
      setEventData(prev => ({
        ...prev,
        selectedClients: [newClient]
      }));
    } else {
      setEventData(prev => ({
        ...prev,
        selectedClients: [...prev.selectedClients, newClient]
      }));
    }
    
    setShowAddClientModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hizmet oluşturuldu:', eventData);
    // Here you would typically send the data to your backend
  };

  // Show date/time section only for grup events (not 1-1)
  const showDateTimeSection = eventData.meetingType === 'grup';

  // Show meeting type field only for Online or Hibrit
  const showMeetingType = eventData.eventType === 'online' || eventData.eventType === 'hybrid';
  
  // Show platform and location fields based on event type
  const showPlatform = eventData.eventType === 'online' || eventData.eventType === 'hybrid';
  const showLocation = eventData.eventType === 'offline' || eventData.eventType === 'hybrid';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/dashboard/hizmetlerim"
          className="text-gray-500 hover:text-gray-700"
        >
          ← Geri
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Yeni Hizmet Oluştur</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Bilgiler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hizmet Başlığı *
              </label>
              <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleInputChange}
                placeholder="Örn: Dijital Pazarlama Danışmanlığı"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hizmet Açıklaması
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Hizmet hakkında detaylı bilgi verin..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori *
              </label>
              <select
                name="category"
                value={eventData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Kategori seçin</option>
                <option value="teknoloji">Teknoloji</option>
                <option value="pazarlama">Pazarlama</option>
                <option value="tasarim">Tasarım</option>
                <option value="is-gelistirme">İş Geliştirme</option>
                <option value="kisisel-gelisim">Kişisel Gelişim</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hizmet Kanalı *
              </label>
              <select
                name="eventType"
                value={eventData.eventType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="online">Online</option>
                <option value="offline">Yüz Yüze</option>
                <option value="hybrid">Hibrit</option>
              </select>
            </div>

            {/* Meeting Type - Only visible for Online or Hibrit */}
            {showMeetingType && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hizmet Türü *
                </label>
                <select
                  name="meetingType"
                  value={eventData.meetingType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Hizmet türü seçin</option>
                  <option value="1-1">1-1 Özel</option>
                  <option value="grup">Grup</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Date and Time - Only visible for Grup events */}
        {showDateTimeSection && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tarih ve Saat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarih *
                </label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Başlangıç Saati *
                </label>
                <input
                  type="time"
                  name="time"
                  value={eventData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Platform and Location */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Platform ve Konum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Platform - Only visible for Online or Hibrit */}
            {showPlatform && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform {eventData.eventType !== 'hybrid' ? '*' : ''}
                </label>
                <select
                  name="platform"
                  value={eventData.platform}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={eventData.eventType === 'online'}
                >
                  <option value="">Platform seçin</option>
                  <option value="zoom">Zoom</option>
                  <option value="google-meet">Google Meet</option>
                  <option value="microsoft-teams">Microsoft Teams</option>
                  <option value="jitsi">Jitsi</option>
                </select>
              </div>
            )}
            
            {/* Location - Only visible for Yüz Yüze or Hibrit */}
            {showLocation && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konum {eventData.eventType !== 'hybrid' ? '*' : ''}
                </label>
                <input
                  type="text"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                  placeholder="Hizmet konumu (adres)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={eventData.eventType === 'offline'}
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maksimum Katılımcı
              </label>
              <input
                type="number"
                name="maxAttendees"
                value={eventData.maxAttendees}
                onChange={handleInputChange}
                placeholder="50"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Süre (dakika)
              </label>
              <input
                type="number"
                name="duration"
                value={eventData.duration}
                onChange={handleInputChange}
                placeholder="120"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fiyat (₺)
              </label>
              <input
                type="number"
                name="price"
                value={eventData.price}
                onChange={handleInputChange}
                placeholder="199"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Offline Event Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="isOfflineEvent"
                name="isOfflineEvent"
                checked={eventData.isOfflineEvent}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="isOfflineEvent" className="ml-2 block text-sm text-gray-700">
                Bu hizmet online sistem dışında gerçekleşti
              </label>
            </div>

            {/* Client Information - Only visible when isOfflineEvent is true */}
            {eventData.isOfflineEvent && (
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Danışan Bilgileri</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Danışan Seç *
                  </label>
                  
                  {/* Search Input */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Danışan adı veya e-posta ile ara..."
                      value={clientSearchTerm}
                      onChange={(e) => setClientSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-10"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                  </div>

                  {/* Selected Clients Display */}
                  {eventData.selectedClients.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 mb-2">Seçili Danışanlar:</p>
                      <div className="flex flex-wrap gap-2">
                        {eventData.selectedClients.map((client) => (
                          <span
                            key={client.id}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                          >
                            {client.name}
                            <button
                              type="button"
                              onClick={() => handleRemoveClient(client.id)}
                              className="ml-1 text-primary-600 hover:text-primary-800"
                            >
                              ✕
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dropdown */}
                  {(clientSearchTerm || eventData.selectedClients.length === 0) && (
                    <div className="border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                      {filteredClients.length > 0 ? (
                        <>
                          {filteredClients.map((client) => (
                            <div
                              key={client.id}
                              onClick={() => handleClientSelect(client.id)}
                              className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                                eventData.selectedClients.some(c => c.id === client.id)
                                  ? 'bg-primary-50 text-primary-700'
                                  : ''
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-primary-600 text-sm font-medium">
                                    {client.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{client.name}</p>
                                  <p className="text-xs text-gray-500">{client.email}</p>
                                </div>
                                {eventData.selectedClients.some(c => c.id === client.id) && (
                                  <span className="ml-auto text-primary-600">✓</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className="px-4 py-3 text-gray-500 text-sm">
                          Aradığınız kriterlere uygun danışan bulunamadı.
                        </div>
                      )}
                      
                      {/* Add Client Option */}
                      <div
                        onClick={() => setShowAddClientModal(true)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-t border-gray-200 bg-gray-25"
                      >
                        <div className="flex items-center text-primary-600">
                          <span className="mr-2">+</span>
                          <span className="text-sm font-medium">Danışan Ekle</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {eventData.isOfflineEvent && eventData.selectedClients.length === 0 && (
                    <p className="text-red-500 text-sm mt-1">En az bir danışan seçmelisiniz.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/dashboard/hizmetlerim"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Hizmet Oluştur
          </button>
        </div>
      </form>
      
      {/* Add Client Modal */}
      {showAddClientModal && (
        <AddCustomerModal 
          onClose={() => setShowAddClientModal(false)}
          onAdd={handleAddNewClient}
        />
      )}
    </div>
  );
};

// CreateEvent Component - Updated with new requirements
const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    service: '', // Changed: Now uses service/package dropdown instead of title
    date: '',
    time: '',
    duration: '',
    location: '',
    platform: '',
    eventType: 'online',
    meetingType: '', // 1-1 Özel or Grup
    price: '',
    maxAttendees: '',
    category: '',
    status: 'onay-bekliyor', // New: Etkinlik Durumu field
    selectedClients: [],
    paymentType: 'online', // New: Payment section
    isRecurring: false, // New: Recurring checkbox
    recurringType: 'haftalık' // New: Haftalık or Aylık
  });

  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [clientSearchTerm, setClientSearchTerm] = useState('');

  // Mock services and packages data (from Hizmetlerim and Paketlerim)
  const availableServices = [
    // Services from Hizmetlerim
    { id: 1, name: 'Dijital Pazarlama Eğitimi - Birebir', type: 'service', price: 500 },
    { id: 2, name: 'Dijital Pazarlama Eğitimi - Grup', type: 'service', price: 200 },
    { id: 3, name: 'Kurumsal Web Sitesi', type: 'service', price: 15000 },
    { id: 4, name: 'E-ticaret Sitesi', type: 'service', price: 25000 },
    { id: 5, name: 'SEO Danışmanlığı', type: 'service', price: 3000 },
    { id: 6, name: 'Sosyal Medya Yönetimi', type: 'service', price: 2500 },
    // Packages from Paketlerim 
    { id: 7, name: 'Dijital Pazarlama Paketi', type: 'package', price: 5000, appointments: 10 },
    { id: 8, name: 'Web Geliştirme Danışmanlığı', type: 'package', price: 8000, appointments: 15 },
    { id: 9, name: 'Kapsamlı SEO Paketi', type: 'package', price: 12000, appointments: 20 }
  ];

  // Mock clients data with package information  
  const availableClients = [
    { id: 1, name: 'Ayşe Demir', email: 'ayse.demir@email.com', packages: [7, 9] },
    { id: 2, name: 'Mehmet Kaya', email: 'mehmet.kaya@email.com', packages: [8] },
    { id: 3, name: 'Fatma Özkan', email: 'fatma.ozkan@email.com', packages: [7] },
    { id: 4, name: 'Ali Yılmaz', email: 'ali.yilmaz@email.com', packages: [] },
    { id: 5, name: 'Zeynep Şahin', email: 'zeynep.sahin@email.com', packages: [9] }
  ];

  const filteredClients = availableClients.filter(client =>
    client.name.toLowerCase().includes(clientSearchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(clientSearchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceChange = (e) => {
    const serviceId = parseInt(e.target.value);
    const selectedService = availableServices.find(s => s.id === serviceId);
    
    setEventData(prev => ({
      ...prev,
      service: e.target.value,
      price: selectedService ? selectedService.price : ''
    }));
  };

  const handleClientSelect = (clientId) => {
    const client = availableClients.find(c => c.id === clientId);
    if (eventData.meetingType === '1-1') {
      setEventData(prev => ({
        ...prev,
        selectedClients: [client]
      }));
    } else {
      setEventData(prev => ({
        ...prev,
        selectedClients: prev.selectedClients.some(c => c.id === clientId)
          ? prev.selectedClients.filter(c => c.id !== clientId)
          : [...prev.selectedClients, client]
      }));
    }
  };

  const handleRemoveClient = (clientId) => {
    setEventData(prev => ({
      ...prev,
      selectedClients: prev.selectedClients.filter(c => c.id !== clientId)
    }));
  };

  const handleAddNewClient = (newClientData) => {
    const newClient = {
      id: Date.now(),
      name: `${newClientData.name} ${newClientData.surname}`,
      email: newClientData.email,
      packages: []
    };
    
    availableClients.push(newClient);
    
    if (eventData.meetingType === '1-1') {
      setEventData(prev => ({
        ...prev,
        selectedClients: [newClient]
      }));
    } else {
      setEventData(prev => ({
        ...prev,
        selectedClients: [...prev.selectedClients, newClient]
      }));
    }
    
    setShowAddClientModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Etkinlik oluşturuldu:', eventData);
  };

  // Show meeting type field for Online or Hibrit
  const showMeetingType = eventData.eventType === 'online' || eventData.eventType === 'hybrid';
  
  // Show platform and location fields based on event type  
  const showPlatform = eventData.eventType === 'online' || eventData.eventType === 'hybrid';
  const showLocation = eventData.eventType === 'offline' || eventData.eventType === 'hybrid';

  // Check if selected client has packages (for Paketten Tahsil Et option)
  const hasPackageClient = eventData.selectedClients.some(client => 
    client.packages && client.packages.length > 0
  );
  
  // Show price field only if not "Paketten Tahsil Et"
  const showPriceField = eventData.paymentType !== 'paketten-tahsil';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/dashboard/events"
          className="text-gray-500 hover:text-gray-700"
        >
          ← Geri
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Yeni Etkinlik Oluştur</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Bilgiler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Changed: Etkinlik Başlığı now shows dropdown of services/packages */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etkinlik Başlığı *
              </label>
              <select
                name="service"
                value={eventData.service}
                onChange={handleServiceChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Hizmet veya Paket Seçin</option>
                <optgroup label="Hizmetlerim">
                  {availableServices.filter(s => s.type === 'service').map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Paketlerim">
                  {availableServices.filter(s => s.type === 'package').map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Removed: Etkinlik Açıklaması field */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori *
              </label>
              <select
                name="category"
                value={eventData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Kategori seçin</option>
                <option value="teknoloji">Teknoloji</option>
                <option value="pazarlama">Pazarlama</option>
                <option value="tasarim">Tasarım</option>
                <option value="is-gelistirme">İş Geliştirme</option>
                <option value="kisisel-gelisim">Kişisel Gelişim</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etkinlik Kanalı *
              </label>
              <select
                name="eventType"
                value={eventData.eventType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="online">Online</option>
                <option value="offline">Yüz Yüze</option>
                <option value="hybrid">Hibrit</option>
              </select>
            </div>

            {/* Meeting Type - Only visible for Online or Hibrit */}
            {showMeetingType && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Türü *
                </label>
                <select
                  name="meetingType"
                  value={eventData.meetingType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Etkinlik türü seçin</option>
                  <option value="1-1">1-1 Özel</option>
                  <option value="grup">Grup</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Changed: Date and Time - Now available for both event types */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tarih ve Saat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tarih *
              </label>
              <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Başlangıç Saati *
              </label>
              <input
                type="time"
                name="time"
                value={eventData.time}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* New: Recurring options when Paketten Tahsil Et is selected */}
            {eventData.paymentType === 'paketten-tahsil' && (
              <>
                <div className="md:col-span-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isRecurring"
                      name="isRecurring"
                      checked={eventData.isRecurring}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isRecurring" className="ml-2 block text-sm text-gray-700">
                      Tekrarla
                    </label>
                  </div>
                </div>

                {eventData.isRecurring && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tekrar Sıklığı *
                    </label>
                    <select
                      name="recurringType"
                      value={eventData.recurringType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="haftalık">Haftalık</option>
                      <option value="aylık">Aylık</option>
                    </select>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Platform and Location */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Platform ve Konum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Platform - Only visible for Online or Hibrit */}
            {showPlatform && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform {eventData.eventType !== 'hybrid' ? '*' : ''}
                </label>
                <select
                  name="platform"
                  value={eventData.platform}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={eventData.eventType === 'online'}
                >
                  <option value="">Platform seçin</option>
                  <option value="zoom">Zoom</option>
                  <option value="google-meet">Google Meet</option>
                  <option value="microsoft-teams">Microsoft Teams</option>
                  <option value="jitsi">Jitsi</option>
                </select>
              </div>
            )}
            
            {/* Location - Only visible for Yüz Yüze or Hibrit */}
            {showLocation && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konum {eventData.eventType !== 'hybrid' ? '*' : ''}
                </label>
                <input
                  type="text"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                  placeholder="Etkinlik konumu (adres)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={eventData.eventType === 'offline'}
                />
              </div>
            )}

            {/* New: Etkinlik Durumu field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etkinlik Durumu *
              </label>
              <select
                name="status"
                value={eventData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="onay-bekliyor">Onay Bekliyor</option>
                <option value="yaklasan">Yaklaşan</option>
                <option value="tamamlandi">Tamamlandı</option>
                <option value="iptal-edildi">İptal Edildi</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maksimum Katılımcı
              </label>
              <input
                type="number"
                name="maxAttendees"
                value={eventData.maxAttendees}
                onChange={handleInputChange}
                placeholder="50"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Süre (dakika)
              </label>
              <input
                type="number"
                name="duration"
                value={eventData.duration}
                onChange={handleInputChange}
                placeholder="120"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Changed: Danışan Bilgileri always visible (removed offline checkbox) */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-md font-medium text-gray-900 mb-4">Danışan Bilgileri</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Danışan Seç *
                </label>
                
                {/* Search Input */}
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Danışan adı veya e-posta ile ara..."
                    value={clientSearchTerm}
                    onChange={(e) => setClientSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-10"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>

                {/* Selected Clients Display */}
                {eventData.selectedClients.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Seçili Danışanlar:</p>
                    <div className="flex flex-wrap gap-2">
                      {eventData.selectedClients.map((client) => (
                        <span
                          key={client.id}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                        >
                          {client.name}
                          <button
                            type="button"
                            onClick={() => handleRemoveClient(client.id)}
                            className="ml-1 text-primary-600 hover:text-primary-800"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown */}
                {(clientSearchTerm || eventData.selectedClients.length === 0) && (
                  <div className="border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                    {filteredClients.length > 0 ? (
                      <>
                        {filteredClients.map((client) => (
                          <div
                            key={client.id}
                            onClick={() => handleClientSelect(client.id)}
                            className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                              eventData.selectedClients.some(c => c.id === client.id)
                                ? 'bg-primary-50 text-primary-700'
                                : ''
                            }`}
                          >
                            <div className="flex items-center">
                              <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-primary-600 text-sm font-medium">
                                  {client.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{client.name}</p>
                                <p className="text-xs text-gray-500">{client.email}</p>
                                {client.packages && client.packages.length > 0 && (
                                  <p className="text-xs text-green-600">
                                    {client.packages.length} aktif paket
                                  </p>
                                )}
                              </div>
                              {eventData.selectedClients.some(c => c.id === client.id) && (
                                <span className="ml-auto text-primary-600">✓</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-sm">
                        Aradığınız kriterlere uygun danışan bulunamadı.
                      </div>
                    )}
                    
                    {/* Add Client Option */}
                    <div
                      onClick={() => setShowAddClientModal(true)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-t border-gray-200 bg-gray-25"
                    >
                      <div className="flex items-center text-primary-600">
                        <span className="mr-2">+</span>
                        <span className="text-sm font-medium">Danışan Ekle</span>
                      </div>
                    </div>
                  </div>
                )}

                {eventData.selectedClients.length === 0 && (
                  <p className="text-red-500 text-sm mt-1">En az bir danışan seçmelisiniz.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* New: Payment Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Ödeme</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ödeme Şekli *
              </label>
              <select
                name="paymentType"
                value={eventData.paymentType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="online">Online</option>
                <option value="havale-eft">Havale / EFT</option>
                <option value="paketten-tahsil" disabled={!hasPackageClient}>
                  Paketten Tahsil Et {!hasPackageClient && '(Seçili danışanda paket yok)'}
                </option>
              </select>
              {eventData.paymentType === 'paketten-tahsil' && !hasPackageClient && (
                <p className="text-red-500 text-sm mt-1">
                  Seçili danışanın aktif paketi bulunmuyor.
                </p>
              )}
            </div>
            
            {/* Price - Only visible if not Paketten Tahsil Et */}
            {showPriceField && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fiyat (₺)
                </label>
                <input
                  type="number"
                  name="price"
                  value={eventData.price}
                  onChange={handleInputChange}
                  placeholder="199"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/dashboard/events"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Etkinlik Oluştur
          </button>
        </div>
      </form>
      
      {/* Add Client Modal */}
      {showAddClientModal && (
        <AddCustomerModal 
          onClose={() => setShowAddClientModal(false)}
          onAdd={handleAddNewClient}
        />
      )}
    </div>
  );
};

// CreatePackage Component
const CreatePackage = () => {
  const [packageData, setPackageData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    platform: '',
    eventType: 'online',
    meetingType: '', // 1-1 Özel or Grup
    price: '',
    maxAttendees: '',
    category: '',
    appointmentCount: '1', // New field for number of appointments
    isOfflineEvent: false,
    selectedClients: []
  });

  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [clientSearchTerm, setClientSearchTerm] = useState('');

  // Mock clients data (in real app, this would come from your backend)
  const availableClients = [
    { id: 1, name: 'Ayşe Demir', email: 'ayse.demir@email.com' },
    { id: 2, name: 'Mehmet Kaya', email: 'mehmet.kaya@email.com' },
    { id: 3, name: 'Fatma Özkan', email: 'fatma.ozkan@email.com' },
    { id: 4, name: 'Ali Yılmaz', email: 'ali.yilmaz@email.com' },
    { id: 5, name: 'Zeynep Şahin', email: 'zeynep.sahin@email.com' }
  ];

  const filteredClients = availableClients.filter(client =>
    client.name.toLowerCase().includes(clientSearchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(clientSearchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPackageData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleClientSelect = (clientId) => {
    const client = availableClients.find(c => c.id === clientId);
    if (packageData.meetingType === '1-1') {
      // Single selection for 1-1 events
      setPackageData(prev => ({
        ...prev,
        selectedClients: [client]
      }));
    } else {
      // Multiple selection for group events
      setPackageData(prev => ({
        ...prev,
        selectedClients: prev.selectedClients.some(c => c.id === clientId)
          ? prev.selectedClients.filter(c => c.id !== clientId)
          : [...prev.selectedClients, client]
      }));
    }
  };

  const handleRemoveClient = (clientId) => {
    setPackageData(prev => ({
      ...prev,
      selectedClients: prev.selectedClients.filter(c => c.id !== clientId)
    }));
  };

  const handleAddNewClient = (newClientData) => {
    // Simulate adding new client (in real app, this would make an API call)
    const newClient = {
      id: Date.now(), // Temporary ID
      name: `${newClientData.name} ${newClientData.surname}`,
      email: newClientData.email
    };
    
    // Add to available clients list
    availableClients.push(newClient);
    
    // Auto-select the new client
    if (packageData.meetingType === '1-1') {
      setPackageData(prev => ({
        ...prev,
        selectedClients: [newClient]
      }));
    } else {
      setPackageData(prev => ({
        ...prev,
        selectedClients: [...prev.selectedClients, newClient]
      }));
    }
    
    setShowAddClientModal(false);
  };

  const showMeetingType = packageData.eventType === 'online' || packageData.eventType === 'hybrid';
  const showLocation = packageData.eventType === 'offline' || packageData.eventType === 'hybrid';
  const showPlatform = packageData.eventType === 'online' || packageData.eventType === 'hybrid';
  const showDateTime = packageData.meetingType === 'grup';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paket oluşturuldu:', packageData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Yeni Paket Ekle</h1>
          <p className="text-gray-600 mt-1">Danışanlarınız için paket oluşturun</p>
        </div>
        <Link 
          to="/dashboard/services"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Geri dön
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Bilgiler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paket Adı *
              </label>
              <input
                type="text"
                name="title"
                value={packageData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Paket adı"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Açıklama *
              </label>
              <textarea
                name="description"
                value={packageData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Paket açıklaması"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori *
              </label>
              <select
                name="category"
                value={packageData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Kategori seçin</option>
                <option value="egitim">Eğitim</option>
                <option value="danismanlik">Danışmanlık</option>
                <option value="workshop">Workshop</option>
                <option value="mentorluk">Mentorlük</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etkinlik Kanalı *
              </label>
              <select
                name="eventType"
                value={packageData.eventType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="online">Online</option>
                <option value="offline">Yüz Yüze</option>
                <option value="hybrid">Hibrit</option>
              </select>
            </div>

            {/* Meeting Type - Only visible for Online or Hibrit */}
            {showMeetingType && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Türü *
                </label>
                <select
                  name="meetingType"
                  value={packageData.meetingType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Etkinlik türü seçin</option>
                  <option value="1-1">1-1 Özel</option>
                  <option value="grup">Grup</option>
                </select>
              </div>
            )}

            {/* Date and Time - Only visible for Group */}
            {showDateTime && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tarih *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={packageData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Saat *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={packageData.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </>
            )}

            {/* Location - Only visible for Yüz Yüze or Hibrit */}
            {showLocation && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konum {packageData.eventType !== 'hybrid' ? '*' : ''}
                </label>
                <input
                  type="text"
                  name="location"
                  value={packageData.location}
                  onChange={handleInputChange}
                  placeholder="Etkinlik konumu (adres)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={packageData.eventType !== 'hybrid'}
                />
              </div>
            )}

            {/* Platform - Only visible for Online or Hibrit */}
            {showPlatform && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform {packageData.eventType !== 'hybrid' ? '*' : ''}
                </label>
                <select
                  name="platform"
                  value={packageData.platform}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={packageData.eventType !== 'hybrid'}
                >
                  <option value="">Platform seçin</option>
                  <option value="google-meet">Google Meets</option>
                  <option value="zoom">Zoom</option>
                  <option value="microsoft-teams">Microsoft Teams</option>
                  <option value="jitsi">Jitsi</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fiyat *
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="price"
                  value={packageData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="0"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">₺</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Süre
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="duration"
                  value={packageData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="60"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">dakika</span>
                </div>
              </div>
            </div>

            {/* Randevu Adedi - New field specific to packages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Randevu Adedi *
              </label>
              <input
                type="number"
                name="appointmentCount"
                value={packageData.appointmentCount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="1"
                min="1"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Bu pakette kaç randevu bulunacağını belirtin
              </p>
            </div>

            {packageData.meetingType === 'grup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maksimum Katılımcı
                </label>
                <input
                  type="number"
                  name="maxAttendees"
                  value={packageData.maxAttendees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="10"
                />
              </div>
            )}
          </div>
        </div>

        {/* Offline Event Checkbox */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isOfflineEvent"
              name="isOfflineEvent"
              checked={packageData.isOfflineEvent}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="isOfflineEvent" className="ml-2 block text-sm text-gray-700">
              Bu paket online sistem dışında gerçekleşti
            </label>
          </div>
        </div>

        {/* Client Information - Only visible if offline checkbox is selected */}
        {packageData.isOfflineEvent && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Danışan Bilgileri</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Danışan Seç *
                </label>
                
                {/* Search Input */}
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Danışan adı veya e-posta ile ara..."
                    value={clientSearchTerm}
                    onChange={(e) => setClientSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-10"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>

                {/* Selected Clients Display */}
                {packageData.selectedClients.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Seçili Danışanlar:</p>
                    <div className="flex flex-wrap gap-2">
                      {packageData.selectedClients.map((client) => (
                        <span
                          key={client.id}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                        >
                          {client.name}
                          <button
                            type="button"
                            onClick={() => handleRemoveClient(client.id)}
                            className="ml-1 text-primary-600 hover:text-primary-800"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown */}
                {(clientSearchTerm || packageData.selectedClients.length === 0) && (
                  <div className="border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                    {filteredClients.length > 0 ? (
                      <>
                        {filteredClients.map((client) => (
                          <div
                            key={client.id}
                            onClick={() => handleClientSelect(client.id)}
                            className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                              packageData.selectedClients.some(c => c.id === client.id)
                                ? 'bg-primary-50 text-primary-700'
                                : ''
                            }`}
                          >
                            <div className="flex items-center">
                              <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-primary-600 text-sm font-medium">
                                  {client.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{client.name}</p>
                                <p className="text-xs text-gray-500">{client.email}</p>
                              </div>
                              {packageData.selectedClients.some(c => c.id === client.id) && (
                                <span className="ml-auto text-primary-600">✓</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-sm">
                        Aradığınız kriterlere uygun danışan bulunamadı.
                      </div>
                    )}
                    
                    {/* Add Client Option */}
                    <div
                      onClick={() => setShowAddClientModal(true)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-t border-gray-200 bg-gray-25"
                    >
                      <div className="flex items-center text-primary-600">
                        <span className="mr-2">+</span>
                        <span className="text-sm font-medium">Danışan Ekle</span>
                      </div>
                    </div>
                  </div>
                )}

                {packageData.isOfflineEvent && packageData.selectedClients.length === 0 && (
                  <p className="text-red-500 text-sm mt-1">En az bir danışan seçmelisiniz.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/dashboard/services"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Paketi Oluştur
          </button>
        </div>
      </form>

      {/* Add Client Modal */}
      {showAddClientModal && (
        <AddCustomerModal 
          onClose={() => setShowAddClientModal(false)}
          onAdd={handleAddNewClient}
        />
      )}
    </div>
  );
};



// Dashboard Component
export const Dashboard = ({ onLogout }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Anasayfa', href: '/dashboard', icon: '🏠' },
    { name: 'Profil Bilgileri', href: '/dashboard/profile', icon: '👤' },
    { name: 'Uzmanlık Bilgileri', href: '/dashboard/expertise', icon: '🎓' },
    { name: 'Hizmetlerim', href: '/dashboard/services', icon: '🛠️' },
    { name: 'Takvim', href: '/dashboard/calendar', icon: '📅' },
    { name: 'Etkinlikler', href: '/dashboard/events', icon: '🎯' },
    { name: 'Blog', href: '/dashboard/blog', icon: '📝' },
    { name: 'Testler ve Formlar', href: '/dashboard/forms', icon: '📋' },
    { name: 'Müşteriler', href: '/dashboard/customers', icon: '👥' },
    { name: 'Ödemeler', href: '/dashboard/payments', icon: '💳' },
    { name: 'Pazarlama', href: '/dashboard/marketing', icon: '📢' },
    { name: 'Raporlar', href: '/dashboard/reports', icon: '📊' },
    { name: 'Hesap Ayarları', href: '/dashboard/settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex-shrink-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <img 
            src="https://uzmanlio.com/images/logo.png" 
            alt="Uzmanlio Logo"
            className="h-8"
          />
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <nav className="mt-8 px-4 pb-20">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-2 transition-colors ${
                location.pathname === item.href
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-white">
          <button
            onClick={onLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <span className="mr-3 text-lg">🚪</span>
            Çıkış Yap
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
                >
                  ☰
                </button>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ara..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                </div>

                {/* Booking URL */}
                <div className="hidden md:flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg border">
                  <span className="text-primary-600 text-sm">📅</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Randevu URL'niz:</span>
                    <div className="flex items-center space-x-2">
                      <a
                        href="https://uzmanlio.com/ahmet-yilmaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                        title="URL'yi yeni sekmede aç"
                      >
                        uzmanlio.com/ahmet-yilmaz
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('https://uzmanlio.com/ahmet-yilmaz');
                          alert('URL panoya kopyalandı!');
                        }}
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                        title="URL'yi Kopyala"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-500 hover:text-gray-700">
                  <span className="text-xl">🔔</span>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
                
                <div className="flex items-center space-x-3">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                  <span className="text-sm font-medium text-gray-700">Ahmet Yılmaz</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<CreateEvent />} />
            <Route path="/etkinlikler/olustur" element={<CreateEvent />} />
            <Route path="/hizmet/olustur" element={<CreateService />} />
            <Route path="/packages/create" element={<CreatePackage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/create" element={<BlogCreate />} />
            <Route path="/blog/edit/:id" element={<BlogEdit />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/forms/create" element={<FormCreate />} />
            <Route path="/forms/edit/:id" element={<FormEdit />} />
            <Route path="/forms/:id/responses" element={<FormResponses />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

// Dashboard Home Component
const DashboardHome = () => {
  const stats = [
    { name: 'Toplam Gelir', value: '₺42,890', change: '+12.5%', trend: 'up' },
    { name: 'Aktif Müşteriler', value: '1,247', change: '+8.2%', trend: 'up' },
    { name: 'Bu Ay Satış', value: '156', change: '+23.1%', trend: 'up' },
    { name: 'Tamamlanan Etkinlikler', value: '23', change: '+5.4%', trend: 'up' },
  ];

  const recentEvents = [
    { name: 'WordPress ile Web Tasarım', date: '25 Haziran', attendees: 45, status: 'Tamamlandı' },
    { name: 'Dijital Pazarlama Stratejileri', date: '28 Haziran', attendees: 32, status: 'Yaklaşan' },
    { name: 'React Geliştirme Bootcamp', date: '2 Temmuz', attendees: 78, status: 'Yaklaşan' },
  ];

  // Upcoming appointments data
  const upcomingAppointments = [
    { id: 1, customerName: 'Ayşe Demir', date: '2024-06-30', time: '14:00', service: 'SEO Danışmanlığı' },
    { id: 2, customerName: 'Mehmet Kaya', date: '2024-07-01', time: '10:30', service: 'Web Tasarım Konsültasyonu' },
    { id: 3, customerName: 'Fatma Özkan', date: '2024-07-02', time: '16:00', service: 'Dijital Pazarlama' },
    { id: 4, customerName: 'Ali Yılmaz', date: '2024-07-03', time: '09:00', service: 'React Geliştirme' },
    { id: 5, customerName: 'Zeynep Şahin', date: '2024-07-03', time: '13:30', service: 'E-ticaret Danışmanlığı' }
  ];

  const [showVacationModal, setShowVacationModal] = useState(false);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Hoş geldiniz, Ahmet!</h1>
        <p className="text-primary-100 text-lg">İşiniz harika gözüküyor. İşte son durumunuz.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Yaklaşan Randevular</h3>
          <div className="space-y-4">
            {upcomingAppointments.slice(0, 5).map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{appointment.customerName}</p>
                  <p className="text-sm text-gray-600">{appointment.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(appointment.date).toLocaleDateString('tr-TR')}
                  </p>
                  <p className="text-sm text-gray-600">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İşlemler</h3>
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://uzmanlio-panel.preview.emergentagent.com/dashboard/etkinlikler/olustur"
              className="p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors text-left block"
            >
              <div className="text-2xl mb-2">📅</div>
              <p className="font-medium text-gray-900">Yeni Etkinlik</p>
              <p className="text-sm text-gray-600">Etkinlik oluştur</p>
            </a>
            <a 
              href="https://uzmanlio-panel.preview.emergentagent.com/dashboard/customers"
              className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left block"
            >
              <div className="text-2xl mb-2">👤</div>
              <p className="font-medium text-gray-900">Yeni Danışan</p>
              <p className="text-sm text-gray-600">Danışan ekle</p>
            </a>
            <button 
              onClick={() => setShowVacationModal(true)}
              className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-left"
            >
              <div className="text-2xl mb-2">🌴</div>
              <p className="font-medium text-gray-900">Tatil Moduna Al</p>
              <p className="text-sm text-gray-600">Takvimi kapat</p>
            </button>
            <a 
              href="https://uzmanlio-panel.preview.emergentagent.com/dashboard/calendar"
              className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left block"
            >
              <div className="text-2xl mb-2">📅</div>
              <p className="font-medium text-gray-900">Takvim</p>
              <p className="text-sm text-gray-600">Takvimi görüntüle</p>
            </a>
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Etkinlikler</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{event.name}</p>
                <p className="text-sm text-gray-600">{event.date} • {event.attendees} katılımcı</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                event.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {event.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Vacation Mode Modal */}
      {showVacationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Tatil Moduna Al</h3>
              <button 
                onClick={() => setShowVacationModal(false)} 
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            {/* Information Box */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="text-blue-500 text-xl">ℹ️</span>
                </div>
                <p className="text-sm text-blue-800">
                  Bu özellik mevcut randevularınızı etkilemez ancak takviminizi yeni randevulara kapatır.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bitiş Tarihi
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 pt-6">
              <button
                onClick={() => setShowVacationModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
              <button
                onClick={() => {
                  console.log('Tatil modu etkinleştirildi');
                  setShowVacationModal(false);
                }}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Etkinleştir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Events Component
const Events = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const events = [
    {
      id: 1,
      title: 'WordPress ile Web Tasarım Masterclass',
      date: '2024-06-25',
      time: '19:00',
      duration: 180,
      attendees: 45,
      maxAttendees: 50,
      price: 299,
      status: 'completed', // tamamlandı
      eventType: 'online',
      meetingType: 'grup',
      platform: 'zoom',
      consultee: null
    },
    {
      id: 2,
      title: 'Dijital Pazarlama Stratejileri',
      date: '2024-06-28',
      time: '20:00',
      duration: 120,
      attendees: 32,
      maxAttendees: 60,
      price: 199,
      status: 'approved', // onaylandı (yaklaşan)
      eventType: 'online',
      meetingType: 'grup',
      platform: 'google-meet',
      consultee: null
    },
    {
      id: 3,
      title: 'React Geliştirme Bootcamp',
      date: '2024-07-02',
      time: '18:30',
      duration: 240,
      attendees: 78,
      maxAttendees: 100,
      price: 599,
      status: 'pending', // onay bekliyor
      eventType: 'hybrid',
      meetingType: 'grup',
      platform: 'microsoft-teams',
      location: 'İstanbul Teknik Park',
      consultee: null
    },
    {
      id: 4,
      title: 'Birebir SEO Danışmanlığı',
      date: '2024-06-30',
      time: '14:00',
      duration: 60,
      attendees: 1,
      maxAttendees: 1,
      price: 500,
      status: 'approved', // onaylandı (yaklaşan)
      eventType: 'online',
      meetingType: '1-1',
      platform: 'zoom',
      consultee: { name: 'Ayşe Demir' }
    },
    {
      id: 5,
      title: 'E-ticaret Workshop',
      date: '2024-06-20',
      time: '16:00',
      duration: 150,
      attendees: 25,
      maxAttendees: 30,
      price: 350,
      status: 'cancelled', // iptal edildi
      eventType: 'offline',
      meetingType: 'grup',
      location: 'Beşiktaş Konferans Salonu',
      consultee: null
    }
  ];

  const tabs = [
    { id: 'all', name: 'Tümü', count: events.length },
    { id: 'pending', name: 'Onay Bekliyor', count: events.filter(e => e.status === 'pending').length },
    { id: 'approved', name: 'Yaklaşan', count: events.filter(e => e.status === 'approved').length },
    { id: 'completed', name: 'Tamamlandı', count: events.filter(e => e.status === 'completed').length },
    { id: 'cancelled', name: 'İptal Edildi', count: events.filter(e => e.status === 'cancelled').length },
  ];

  const filteredEvents = activeTab === 'all' ? events : events.filter(e => e.status === activeTab);

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { text: 'Onay Bekliyor', color: 'bg-yellow-100 text-yellow-800' },
      approved: { text: 'Onaylandı', color: 'bg-blue-100 text-blue-800' },
      completed: { text: 'Tamamlandı', color: 'bg-green-100 text-green-800' },
      cancelled: { text: 'İptal Edildi', color: 'bg-red-100 text-red-800' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const handleApprove = (eventId) => {
    console.log('Etkinlik onaylandı:', eventId);
    // Here you would update the event status in your backend
  };

  const handleReject = (eventId) => {
    console.log('Etkinlik reddedildi:', eventId);
    // Here you would update the event status in your backend
  };

  const handleJoin = (eventId) => {
    console.log('Etkinliğe katıl:', eventId);
    // Here you would handle joining the event
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowEditModal(true);
  };

  const handleDelete = (eventId) => {
    if (window.confirm('Bu etkinliği silmek istediğinizden emin misiniz?')) {
      console.log('Etkinlik silindi:', eventId);
      // Here you would delete the event from your backend
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Etkinlikler</h1>
        <Link 
          to="/dashboard/etkinlikler/olustur"
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          + Yeni Etkinlik
        </Link>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Etkinlik Listesi</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredEvents.map((event) => (
            <div key={event.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      event.eventType === 'online' ? 'bg-blue-100 text-blue-800' : 
                      event.eventType === 'offline' ? 'bg-green-100 text-green-800' : 
                      'bg-primary-100 text-primary-800'
                    }`}>
                      {event.eventType === 'online' ? 'Online' : 
                       event.eventType === 'offline' ? 'Yüz Yüze' : 'Hibrit'}
                    </span>
                    {event.meetingType === '1-1' && event.consultee ? (
                      <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                        {event.consultee.name}
                      </span>
                    ) : event.meetingType === '1-1' ? (
                      <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                        1-1 Özel
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 flex items-center space-x-6 text-sm text-gray-600">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                    <span>⏱️ {event.duration} dk</span>
                    {event.meetingType === 'grup' ? (
                      <span>👥 {event.attendees}/{event.maxAttendees}</span>
                    ) : event.consultee ? (
                      <span>👤 {event.consultee.name}</span>
                    ) : (
                      <span>👤 Birebir</span>
                    )}
                    <span>💰 ₺{event.price}</span>
                    {event.platform && <span>🔗 {event.platform}</span>}
                    {event.location && <span>📍 {event.location}</span>}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Action Buttons - Left side */}
                  <div className="flex items-center space-x-2">
                    {/* Approve/Reject buttons for non-completed events */}
                    {event.status !== 'completed' && event.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleApprove(event.id)}
                          className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                          title="Onayla"
                        >
                          ✓
                        </button>
                        <button 
                          onClick={() => handleReject(event.id)}
                          className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
                          title="Reddet"
                        >
                          ✗
                        </button>
                      </>
                    )}
                    
                    {/* Join button for approved events */}
                    {event.status === 'approved' && (
                      <button 
                        onClick={() => handleJoin(event.id)}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded text-sm hover:bg-primary-200 transition-colors"
                      >
                        Katıl
                      </button>
                    )}
                  </div>
                  
                  {/* Status Badge and Settings - Right side */}
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(event.status)}
                    <button 
                      onClick={() => handleEdit(event)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      ⚙️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Event Modal */}
      {showEditModal && selectedEvent && (
        <EventEditModal 
          event={selectedEvent} 
          onClose={() => setShowEditModal(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

// Event Edit Modal Component
const EventEditModal = ({ event, onClose, onDelete }) => {
  const [formData, setFormData] = useState({
    title: event.title || '',
    description: event.description || '',
    date: event.date || '',
    time: event.time || '',
    duration: event.duration || '',
    location: event.location || '',
    platform: event.platform || '',
    eventType: event.eventType || 'online',
    meetingType: event.meetingType || '',
    price: event.price || '',
    maxAttendees: event.maxAttendees || '',
    category: event.category || '',
    isOfflineEvent: event.isOfflineEvent || false,
    selectedClients: event.selectedClients || []
  });

  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [clientSearchTerm, setClientSearchTerm] = useState('');

  // Mock clients data (in real app, this would come from your backend)
  const availableClients = [
    { id: 1, name: 'Ayşe Demir', email: 'ayse.demir@email.com' },
    { id: 2, name: 'Mehmet Kaya', email: 'mehmet.kaya@email.com' },
    { id: 3, name: 'Fatma Özkan', email: 'fatma.ozkan@email.com' },
    { id: 4, name: 'Ali Yılmaz', email: 'ali.yilmaz@email.com' },
    { id: 5, name: 'Zeynep Şahin', email: 'zeynep.sahin@email.com' }
  ];

  const filteredClients = availableClients.filter(client =>
    client.name.toLowerCase().includes(clientSearchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(clientSearchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleClientSelect = (clientId) => {
    const client = availableClients.find(c => c.id === clientId);
    if (formData.meetingType === '1-1') {
      // Single selection for 1-1 events
      setFormData(prev => ({
        ...prev,
        selectedClients: [client]
      }));
    } else {
      // Multiple selection for group events
      setFormData(prev => ({
        ...prev,
        selectedClients: prev.selectedClients.some(c => c.id === clientId)
          ? prev.selectedClients.filter(c => c.id !== clientId)
          : [...prev.selectedClients, client]
      }));
    }
  };

  const handleRemoveClient = (clientId) => {
    setFormData(prev => ({
      ...prev,
      selectedClients: prev.selectedClients.filter(c => c.id !== clientId)
    }));
  };

  const handleAddNewClient = (newClientData) => {
    // Simulate adding new client (in real app, this would make an API call)
    const newClient = {
      id: Date.now(), // Temporary ID
      name: `${newClientData.name} ${newClientData.surname}`,
      email: newClientData.email
    };
    
    // Add to available clients list
    availableClients.push(newClient);
    
    // Auto-select the new client
    if (formData.meetingType === '1-1') {
      setFormData(prev => ({
        ...prev,
        selectedClients: [newClient]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        selectedClients: [...prev.selectedClients, newClient]
      }));
    }
    
    setShowAddClientModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Etkinlik güncellendi:', formData);
    onClose();
  };

  const handleDeleteClick = () => {
    onDelete(event.id);
    onClose();
  };

  // Show meeting type field only for Online or Hibrit
  const showMeetingType = formData.eventType === 'online' || formData.eventType === 'hybrid';
  
  // Show date/time section only if Grup is selected
  const showDateTime = formData.meetingType === 'grup';
  
  // Determine which location fields to show
  const showPlatform = formData.eventType === 'online' || formData.eventType === 'hybrid';
  const showLocation = formData.eventType === 'offline' || formData.eventType === 'hybrid';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Etkinlik Düzenle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Temel Bilgiler</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Başlığı *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Açıklaması
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Kategori seçin</option>
                  <option value="teknoloji">Teknoloji</option>
                  <option value="pazarlama">Pazarlama</option>
                  <option value="tasarim">Tasarım</option>
                  <option value="is-gelistirme">İş Geliştirme</option>
                  <option value="kisisel-gelisim">Kişisel Gelişim</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Kanalı *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="online">Online</option>
                  <option value="offline">Yüz Yüze</option>
                  <option value="hybrid">Hibrit</option>
                </select>
              </div>

              {/* Meeting Type - Only visible for Online or Hibrit */}
              {showMeetingType && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü *
                  </label>
                  <select
                    name="meetingType"
                    value={formData.meetingType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Hizmet türü seçin</option>
                    <option value="1-1">1-1 Özel</option>
                    <option value="grup">Grup</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Date and Time - Only visible if Grup is selected */}
          {showDateTime && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Tarih ve Saat</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tarih *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required={showDateTime}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Başlangıç Saati *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required={showDateTime}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Süre (dakika)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="120"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Platform and Location */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Platform ve Konum</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Platform - Only visible for Online or Hibrit */}
              {showPlatform && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform
                  </label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Platform seçin</option>
                    <option value="zoom">Zoom</option>
                    <option value="google-meet">Google Meet</option>
                    <option value="microsoft-teams">Microsoft Teams</option>
                    <option value="jitsi">Jitsi</option>
                  </select>
                </div>
              )}
              
              {/* Location - Only visible for Yüz Yüze or Hibrit */}
              {showLocation && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konum
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Etkinlik konumu (adres)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maksimum Katılımcı
                </label>
                <input
                  type="number"
                  name="maxAttendees"
                  value={formData.maxAttendees}
                  onChange={handleInputChange}
                  placeholder="50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Süre (dakika)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="120"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fiyat (₺)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="199"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Offline Event Checkbox */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isOfflineEventEdit"
                name="isOfflineEvent"
                checked={formData.isOfflineEvent}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="isOfflineEventEdit" className="ml-2 block text-sm text-gray-700">
                Bu etkinlik online sistem dışında gerçekleşti
              </label>
            </div>
          </div>

          {/* Client Information - Only visible if offline checkbox is selected */}
          {formData.isOfflineEvent && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Danışan Bilgileri</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Danışan Seç *
                  </label>
                  
                  {/* Search Input */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Danışan adı veya e-posta ile ara..."
                      value={clientSearchTerm}
                      onChange={(e) => setClientSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-10"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                  </div>

                  {/* Selected Clients Display */}
                  {formData.selectedClients.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 mb-2">Seçili Danışanlar:</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.selectedClients.map((client) => (
                          <span
                            key={client.id}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                          >
                            {client.name}
                            <button
                              type="button"
                              onClick={() => handleRemoveClient(client.id)}
                              className="ml-1 text-primary-600 hover:text-primary-800"
                            >
                              ✕
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dropdown */}
                  {(clientSearchTerm || formData.selectedClients.length === 0) && (
                    <div className="border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                      {filteredClients.length > 0 ? (
                        <>
                          {filteredClients.map((client) => (
                            <div
                              key={client.id}
                              onClick={() => handleClientSelect(client.id)}
                              className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                                formData.selectedClients.some(c => c.id === client.id)
                                  ? 'bg-primary-50 text-primary-700'
                                  : ''
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-primary-600 text-sm font-medium">
                                    {client.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{client.name}</p>
                                  <p className="text-xs text-gray-500">{client.email}</p>
                                </div>
                                {formData.selectedClients.some(c => c.id === client.id) && (
                                  <span className="ml-auto text-primary-600">✓</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className="px-4 py-3 text-gray-500 text-sm">
                          Aradığınız kriterlere uygun danışan bulunamadı.
                        </div>
                      )}
                      
                      {/* Add Client Option */}
                      <div
                        onClick={() => setShowAddClientModal(true)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-t border-gray-200 bg-gray-25"
                      >
                        <div className="flex items-center text-primary-600">
                          <span className="mr-2">+</span>
                          <span className="text-sm font-medium">Danışan Ekle</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.isOfflineEvent && formData.selectedClients.length === 0 && (
                    <p className="text-red-500 text-sm mt-1">En az bir danışan seçmelisiniz.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Appointment Notes - Read Only */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Randevu Notu</h4>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {event.appointmentNotes || "Müşteri bu etkinlik için özel isteklerini belirtmiş: 'Lütfen React Hooks konusuna özel olarak odaklanılmasını istiyorum. Özellikle useState ve useEffect konularında detaylı örnekler görmek istiyorum. Ayrıca real-world projelerden örnekler de olursa çok memnun olurum.'"}
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">* Bu alan müşteri siparişi sırasında doldurulur</p>
            </div>
          </div>

          {/* Files - Read Only */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Dosyalar</h4>
            <div className="space-y-3">
              {event.files && event.files.length > 0 ? (
                event.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <span className="text-blue-600">
                          {file.type === 'pdf' ? '📄' : 
                           file.type === 'doc' ? '📝' : 
                           file.type === 'image' ? '🖼️' : '📎'}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size} • {file.uploadDate}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.open(file.url, '_blank')}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                    >
                      İndir
                    </button>
                  </div>
                ))
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <span className="text-blue-600">📄</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Etkinlik_Gereksinimleri.pdf</p>
                        <p className="text-xs text-gray-500">245 KB • 20.06.2024</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                    >
                      İndir
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <span className="text-green-600">📝</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Müşteri_Notları.docx</p>
                        <p className="text-xs text-gray-500">89 KB • 18.06.2024</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                    >
                      İndir
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <span className="text-primary-600">🖼️</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Referans_Tasarımlar.zip</p>
                        <p className="text-xs text-gray-500">1.2 MB • 17.06.2024</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                    >
                      İndir
                    </button>
                  </div>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-3 italic">* Dosyalar müşteri siparişi sırasında yüklenir</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleDeleteClick}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              🗑️ Sil
            </button>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Güncelle
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Customers Component
const Customers = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUploadTooltip, setShowUploadTooltip] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    {
      id: 1,
      name: 'Ayşe Demir',
      email: 'ayse.demir@email.com',
      phone: '+90 532 123 4567',
      lastAppointment: '2024-06-20',
      lastAppointmentTime: '14:00'
    },
    {
      id: 2,
      name: 'Mehmet Kaya',
      email: 'mehmet.kaya@email.com',
      phone: '+90 533 987 6543',
      lastAppointment: '2024-06-18',
      lastAppointmentTime: '16:30'
    },
    {
      id: 3,
      name: 'Fatma Özkan',
      email: 'fatma.ozkan@email.com',
      phone: '+90 534 456 7890',
      lastAppointment: '2024-06-15',
      lastAppointmentTime: '10:00'
    }
  ];

  const formatDateWithDay = (dateStr, time) => {
    const date = new Date(dateStr);
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = days[date.getDay()];
    const formattedDate = date.toLocaleDateString('tr-TR');
    return `${formattedDate} ${dayName} ${time}`;
  };

  const handleDownloadList = () => {
    // Generate CSV content
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Ad,Soyad,E-posta,Telefon,Son Randevu,Saat\n"
      + customers.map(customer => {
          const [name, surname] = customer.name.split(' ');
          return `${name},${surname || ''},${customer.email},${customer.phone},${customer.lastAppointment},${customer.lastAppointmentTime}`;
        }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "danisanlar_listesi.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      console.log('CSV dosyası yüklendi:', file.name);
      // Here you would process the CSV file
      alert('CSV dosyası başarıyla yüklendi!');
    } else {
      alert('Lütfen geçerli bir CSV dosyası seçin.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Danışanlar</h1>
        <div className="flex items-center space-x-3">
          {/* Download Button */}
          <button
            onClick={handleDownloadList}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            📥 İndir
          </button>
          
          {/* Bulk Upload Button with Info Icon Inside */}
          <div className="relative">
            <label className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center space-x-2">
              <span>📤 Toplu Yükle</span>
              <button
                type="button"
                onMouseEnter={() => setShowUploadTooltip(true)}
                onMouseLeave={() => setShowUploadTooltip(false)}
                className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-200 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                i
              </button>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            {showUploadTooltip && (
              <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg z-10 max-w-xs">
                <div className="whitespace-normal">
                  Danışan listesini indirerek aynı formatta doldurduktan sonra toplu şekilde listenizi güncelleyebilirsiniz.
                </div>
                <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
          
          {/* Add Customer Button */}
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Danışan Ekle
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Toplam Danışan</p>
              <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Danışan Listesi</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Danışan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İletişim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Son Randevu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-medium">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDateWithDay(customer.lastAppointment, customer.lastAppointmentTime)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => {
                        setSelectedCustomer(customer);
                        setShowNotesModal(true);
                      }}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                    >
                      📝 Notları Göster
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddModal && (
        <AddCustomerModal onClose={() => setShowAddModal(false)} />
      )}

      {/* Notes Modal */}
      {showNotesModal && selectedCustomer && (
        <NotesModal 
          customer={selectedCustomer}
          onClose={() => {
            setShowNotesModal(false);
            setSelectedCustomer(null);
          }}
        />
      )}
    </div>
  );
};

// Add Customer Modal Component
const AddCustomerModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yeni danışan eklendi:', formData);
    
    // If onAdd callback is provided, call it (for use in CreateEvent/EditEvent)
    if (onAdd) {
      onAdd(formData);
    } else {
      // Default behavior for regular customer management
      // Here you would typically send the data to your backend
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Yeni Danışan Ekle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ad *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Danışan adı"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Soyad *</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder="Danışan soyadı"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="danisan@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numarası *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+90 5XX XXX XX XX"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// NotesModal Component - Shows customer notes and allows platform user to add/update notes
const NotesModal = ({ customer, onClose }) => {
  const [newNote, setNewNote] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filePreview, setFilePreview] = useState('');

  // Mock customer notes and files data (sorted by newest first)
  const customerNotes = [
    {
      id: 1,
      content: 'Web sitesi tasarımı için inspirasyon siteleri listesi ekliyorum. Modern ve minimalist tasarım tercih ediyorum.',
      author: 'customer',
      authorName: customer.name,
      date: '2024-07-28',
      time: '14:30',
      files: [
        {
          name: 'inspirasyon_siteler.pdf',
          type: 'pdf',
          size: '2.3 MB',
          url: '#'
        }
      ]
    },
    {
      id: 2,
      content: 'Müşteri portföyündeki referans çalışmaları beğendim. Benzer stil ile devam edebiliriz.',
      author: 'platform',
      authorName: 'Platform Kullanıcısı',
      date: '2024-07-27',
      time: '16:45',
      files: []
    },
    {
      id: 3,
      content: 'Proje için logo dosyalarımı ekliyorum. PNG ve SVG formatlarında mevcut.',
      author: 'customer',
      authorName: customer.name,
      date: '2024-07-26',
      time: '09:15',
      files: [
        {
          name: 'logo.png',
          type: 'image',
          size: '500 KB',
          url: '#'
        },
        {
          name: 'logo.svg',
          type: 'image',
          size: '25 KB',
          url: '#'
        }
      ]
    },
    {
      id: 4,
      content: 'İlk toplantımız çok verimli geçti. İhtiyaçlarım detaylı bir şekilde anlaşıldı.',
      author: 'customer',
      authorName: customer.name,
      date: '2024-07-25',
      time: '11:00',
      files: []
    },
    {
      id: 5,
      content: 'Müşteri ile görüştük. Proje kapsamı ve timeline konusunda anlaştık. Gelecek hafta başlıyoruz.',
      author: 'platform',
      authorName: 'Platform Kullanıcısı',
      date: '2024-07-24',
      time: '13:30',
      files: []
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setFilePreview(e.target.result);
        reader.readAsDataURL(file);
      } else {
        setFilePreview('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() || uploadedFile) {
      const newNoteData = {
        id: Date.now(),
        content: newNote,
        author: 'platform',
        authorName: 'Platform Kullanıcısı',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().split(' ')[0].substring(0, 5),
        files: uploadedFile ? [{
          name: uploadedFile.name,
          type: uploadedFile.type.startsWith('image/') ? 'image' : 'document',
          size: `${(uploadedFile.size / 1024).toFixed(1)} KB`,
          url: '#'
        }] : []
      };
      
      console.log('Yeni not eklendi:', newNoteData);
      
      // Reset form
      setNewNote('');
      setUploadedFile(null);
      setFilePreview('');
    }
  };

  const getFileIcon = (type) => {
    if (type === 'image') return '🖼️';
    if (type === 'pdf') return '📄';
    return '📎';
  };

  const formatDateTime = (date, time) => {
    const dateObj = new Date(date);
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 
                   'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    
    const dayName = days[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    
    return `${day} ${month} ${dayName} ${time}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-4xl p-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl max-h-screen">
          
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-medium">
                  {customer.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{customer.name} - Notlar</h3>
                <p className="text-sm text-gray-500">{customer.email}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          {/* Notes Display Area */}
          <div className="p-6 max-h-96 overflow-y-auto border-b border-gray-200">
            <div className="space-y-4">
              {customerNotes.map((note) => (
                <div key={note.id} className={`flex ${note.author === 'platform' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    note.author === 'platform' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium">
                        {note.author === 'platform' ? '👨‍💼 Siz' : '👤 Müşteri'}
                      </span>
                      <span className={`text-xs ${
                        note.author === 'platform' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {formatDateTime(note.date, note.time)}
                      </span>
                    </div>
                    
                    <p className="text-sm">{note.content}</p>
                    
                    {/* Files */}
                    {note.files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {note.files.map((file, index) => (
                          <div key={index} className={`flex items-center space-x-2 p-2 rounded ${
                            note.author === 'platform' ? 'bg-primary-700' : 'bg-white border'
                          }`}>
                            <span className="text-sm">{getFileIcon(file.type)}</span>
                            <div className="flex-1">
                              <p className={`text-xs font-medium ${
                                note.author === 'platform' ? 'text-white' : 'text-gray-900'
                              }`}>
                                {file.name}
                              </p>
                              <p className={`text-xs ${
                                note.author === 'platform' ? 'text-primary-100' : 'text-gray-500'
                              }`}>
                                {file.size}
                              </p>
                            </div>
                            <button className={`text-xs underline ${
                              note.author === 'platform' ? 'text-primary-100' : 'text-blue-600'
                            }`}>
                              İndir
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Note Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yeni Not Ekle
                </label>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  rows={3}
                  placeholder="Notunuzu buraya yazın..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              {/* File Upload */}
              <div className="flex items-center space-x-4">
                <div>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                  />
                  <label 
                    htmlFor="file-upload"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="mr-2">📎</span>
                    <span className="text-sm">Dosya Ekle</span>
                  </label>
                </div>

                {/* Show uploaded file */}
                {uploadedFile && (
                  <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <span className="text-sm">{getFileIcon(uploadedFile.type.startsWith('image/') ? 'image' : 'document')}</span>
                    <span className="text-sm text-gray-700">{uploadedFile.name}</span>
                    <button 
                      type="button"
                      onClick={() => {
                        setUploadedFile(null);
                        setFilePreview('');
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Image Preview */}
              {filePreview && (
                <div className="mt-2">
                  <img src={filePreview} alt="Preview" className="max-w-xs h-auto rounded-lg" />
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Kapat
                </button>
                <button
                  type="submit"
                  disabled={!newNote.trim() && !uploadedFile}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Not Ekle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Payments Component
const Payments = () => {
  const [showTransferTooltip, setShowTransferTooltip] = useState({});
  const [showRefundTooltip, setShowRefundTooltip] = useState({});

  const payments = [
    {
      id: 1,
      customerName: 'Ayşe Demir',
      amount: 899,
      service: 'Modern Web Geliştirme Danışmanlığı',
      date: '2024-06-20',
      paymentDate: '2024-06-21',
      status: 'completed',
      method: 'Kredi Kartı'
    },
    {
      id: 2,
      customerName: 'Mehmet Kaya',
      amount: 199,
      service: 'SEO Danışmanlığı',
      date: '2024-06-18',
      paymentDate: '2024-06-19',
      status: 'pending',
      method: 'Banka Transferi'
    },
    {
      id: 3,
      customerName: 'Fatma Özkan',
      amount: 599,
      service: 'Dijital Pazarlama Workshop',
      date: '2024-06-15',
      paymentDate: '2024-06-16',
      status: 'refunded',
      method: 'Kredi Kartı'
    },
    {
      id: 4,
      customerName: 'Ali Yılmaz',
      amount: 299,
      service: 'React Geliştirme Danışmanlığı',
      date: '2024-06-10',
      paymentDate: '2024-06-11',
      status: 'completed',
      method: 'Kredi Kartı'
    },
    {
      id: 5,
      customerName: 'Zeynep Kaya',
      amount: 450,
      service: 'E-ticaret Danışmanlığı',
      date: '2024-05-25',
      paymentDate: '2024-05-26',
      status: 'pending',
      method: 'Banka Transferi'
    }
  ];

  // Monthly earnings data for chart
  const monthlyEarnings = [
    { month: 'Ocak', earnings: 3250 },
    { month: 'Şubat', earnings: 4100 },
    { month: 'Mart', earnings: 2800 },
    { month: 'Nisan', earnings: 5200 },
    { month: 'Mayıs', earnings: 4750 },
    { month: 'Haziran', earnings: 6300 }
  ];

  const maxEarnings = Math.max(...monthlyEarnings.map(item => item.earnings));

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { text: 'Tamamlandı', color: 'bg-green-100 text-green-800' },
      pending: { text: 'Bekleyen', color: 'bg-yellow-100 text-yellow-800' },
      refunded: { text: 'İade Edildi', color: 'bg-red-100 text-red-800' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const handleApprove = (paymentId) => {
    console.log('Payment approved:', paymentId);
    // Here you would update the payment status in your backend
  };

  const handleRefund = (paymentId) => {
    console.log('Payment refunded:', paymentId);
    // Here you would process the refund in your backend
  };

  const showTransferTooltipHandler = (id) => {
    setShowTransferTooltip(prev => ({ ...prev, [id]: true }));
  };

  const hideTransferTooltipHandler = (id) => {
    setShowTransferTooltip(prev => ({ ...prev, [id]: false }));
  };

  const showRefundTooltipHandler = (id) => {
    setShowRefundTooltip(prev => ({ ...prev, [id]: true }));
  };

  const hideRefundTooltipHandler = (id) => {
    setShowRefundTooltip(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Ödemeler</h1>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Rapor İndir
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <span className="text-2xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Toplam Gelir</p>
              <p className="text-2xl font-bold text-gray-900">₺{payments.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tamamlanan</p>
              <p className="text-2xl font-bold text-gray-900">{payments.filter(p => p.status === 'completed').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <span className="text-2xl">⏳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Bekleyen</p>
              <p className="text-2xl font-bold text-gray-900">{payments.filter(p => p.status === 'pending').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <span className="text-2xl">↩️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">İade Edildi</p>
              <p className="text-2xl font-bold text-gray-900">{payments.filter(p => p.status === 'refunded').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Earnings Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Aylık Kazançlar</h3>
        <div className="space-y-4">
          {monthlyEarnings.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 text-sm font-medium text-gray-700">
                {item.month}
              </div>
              <div className="flex-1 relative">
                <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                    style={{ width: `${(item.earnings / maxEarnings) * 100}%` }}
                  >
                    <span className="text-white text-sm font-medium">
                      ₺{item.earnings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Son Ödemeler</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Müşteri
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hizmet
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tutar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ödeme Yöntemi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ödeme Tarihi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.customerName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">₺{payment.amount.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.method}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.paymentDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(payment.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {payment.status === 'pending' && (
                        <>
                          {/* Approve Button with Tooltip */}
                          <div className="relative">
                            <button 
                              onClick={() => handleApprove(payment.id)}
                              onMouseEnter={() => showTransferTooltipHandler(payment.id)}
                              onMouseLeave={() => hideTransferTooltipHandler(payment.id)}
                              className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                            >
                              ✓
                            </button>
                            {showTransferTooltip[payment.id] && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                                Hesaba Transfer Et
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-800"></div>
                              </div>
                            )}
                          </div>
                          
                          {/* Refund Button with Tooltip */}
                          <div className="relative">
                            <button 
                              onClick={() => handleRefund(payment.id)}
                              onMouseEnter={() => showRefundTooltipHandler(payment.id)}
                              onMouseLeave={() => hideRefundTooltipHandler(payment.id)}
                              className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
                            >
                              ✗
                            </button>
                            {showRefundTooltip[payment.id] && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                                İade Et
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-800"></div>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                      {payment.status === 'completed' && (
                        <span className="text-sm text-green-600 font-medium">Tamamlandı</span>
                      )}
                      {payment.status === 'refunded' && (
                        <span className="text-sm text-red-600 font-medium">İade Edildi</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Marketing Component - Redesigned with Kupon Kodu and E-Posta Pazarlaması sections
const Marketing = () => {
  const [activeTab, setActiveTab] = useState('kupon');
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Mock coupon data
  const coupons = [
    {
      id: 1,
      code: 'YENI2024',
      type: 'percentage',
      value: 20,
      usageCount: 45,
      maxUsage: 100,
      expiryDate: '2024-12-31',
      status: 'active'
    },
    {
      id: 2,
      code: 'INDIRIM50',
      type: 'amount',
      value: 50,
      usageCount: 23,
      maxUsage: 50,
      expiryDate: '2024-11-30',
      status: 'active'
    },
    {
      id: 3,
      code: 'YAZINDIRIMI',
      type: 'percentage',
      value: 15,
      usageCount: 89,
      maxUsage: 200,
      expiryDate: '2024-09-30',
      status: 'expired'
    }
  ];

  // Mock email marketing data
  const emails = [
    {
      id: 1,
      title: 'Yeni Kurs Duyurusu - React Bootcamp',
      text: 'Yepyeni React Bootcamp kursumuz açıldı! İlk 50 kişiye özel indirim.',
      sendDate: '2024-07-25',
      recipientCount: 1247,
      recipients: 'Tüm Müşteriler'
    },
    {
      id: 2,
      title: 'Yazlık İndirim Kampanyası',
      text: 'Yaz aylarında tüm kurslarımızda %25 indirim fırsatı kaçmaz!',
      sendDate: '2024-07-20',
      recipientCount: 856,
      recipients: 'Aktif Kullanıcılar'
    },
    {
      id: 3,
      title: 'Aylık Bülten - Temmuz 2024',
      text: 'Bu ay gerçekleşen etkinlikler ve yeni içeriklerimiz hakkında...',
      sendDate: '2024-07-15',
      recipientCount: 2103,
      recipients: 'Tüm Müşteriler'
    }
  ];

  const tabs = [
    { id: 'kupon', label: 'Kupon Kodu' },
    { id: 'email', label: 'E-Posta Pazarlaması' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Pazarlama</h1>
        <div className="flex space-x-3">
          {activeTab === 'kupon' && (
            <button 
              onClick={() => setShowCouponModal(true)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + Kupon Oluştur
            </button>
          )}
          {activeTab === 'email' && (
            <button 
              onClick={() => setShowEmailModal(true)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + E-Posta Oluştur
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Kupon Kodu Tab Content */}
        {activeTab === 'kupon' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kupon Kodu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tip
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Değer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kullanım
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Son Kullanma
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durum
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coupons.map((coupon) => (
                    <tr key={coupon.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{coupon.code}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          coupon.type === 'percentage' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {coupon.type === 'percentage' ? 'Yüzde' : 'TL'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {coupon.type === 'percentage' ? `%${coupon.value}` : `${coupon.value} TL`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {coupon.usageCount} / {coupon.maxUsage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {coupon.expiryDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          coupon.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {coupon.status === 'active' ? 'Aktif' : 'Süresi Doldu'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-400 hover:text-gray-600">⚙️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* E-Posta Pazarlaması Tab Content */}
        {activeTab === 'email' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Başlık
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Metin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gönderim Tarihi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gönderilen Kullanıcı
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emails.map((email) => (
                    <tr key={email.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{email.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {email.text}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {email.sendDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{email.recipients}</div>
                        <div className="text-sm text-gray-500">{email.recipientCount.toLocaleString()} kişi</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-400 hover:text-gray-600">⚙️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Create Coupon Modal */}
      {showCouponModal && (
        <CreateCouponModal 
          onClose={() => setShowCouponModal(false)}
        />
      )}

      {/* Create Email Modal */}
      {showEmailModal && (
        <CreateEmailModal 
          onClose={() => setShowEmailModal(false)}
        />
      )}
    </div>
  );
};

// CreateCouponModal Component
const CreateCouponModal = ({ onClose }) => {
  const [couponData, setCouponData] = useState({
    code: '',
    type: 'percentage', // percentage or amount
    value: '',
    maxUsage: '',
    expiryDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCouponData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kupon oluşturuldu:', couponData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Kupon Oluştur</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Coupon Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kupon Kodu *
              </label>
              <input
                type="text"
                name="code"
                value={couponData.code}
                onChange={handleInputChange}
                placeholder="Örn: YENI2024"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Discount Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                İndirim Tipi *
              </label>
              <select
                name="type"
                value={couponData.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="percentage">Yüzde (%)</option>
                <option value="amount">TL İndirim</option>
              </select>
            </div>

            {/* Coupon Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kupon Değeri *
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="value"
                  value={couponData.value}
                  onChange={handleInputChange}
                  placeholder="20"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500">
                    {couponData.type === 'percentage' ? '%' : 'TL'}
                  </span>
                </div>
              </div>
            </div>

            {/* Usage Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kullanım Adedi *
              </label>
              <input
                type="number"
                name="maxUsage"
                value={couponData.maxUsage}
                onChange={handleInputChange}
                placeholder="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Son Kullanma Tarihi *
              </label>
              <input
                type="date"
                name="expiryDate"
                value={couponData.expiryDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// CreateEmailModal Component
const CreateEmailModal = ({ onClose }) => {
  const [emailData, setEmailData] = useState({
    title: '',
    text: '',
    recipientType: 'all', // all or selected
    selectedCustomers: []
  });
  const [showCustomerSelection, setShowCustomerSelection] = useState(false);
  const [customerSearchTerm, setCustomerSearchTerm] = useState('');

  // Mock customer data
  const availableCustomers = [
    { id: 1, name: 'Ayşe Demir', email: 'ayse.demir@email.com' },
    { id: 2, name: 'Mehmet Kaya', email: 'mehmet.kaya@email.com' },
    { id: 3, name: 'Fatma Özkan', email: 'fatma.ozkan@email.com' },
    { id: 4, name: 'Ali Yılmaz', email: 'ali.yilmaz@email.com' },
    { id: 5, name: 'Zeynep Şahin', email: 'zeynep.sahin@email.com' },
    { id: 6, name: 'Okan Aksoy', email: 'okan.aksoy@email.com' },
    { id: 7, name: 'Elif Nur', email: 'elif.nur@email.com' },
    { id: 8, name: 'Can Yılmaz', email: 'can.yilmaz@email.com' }
  ];

  const filteredCustomers = availableCustomers.filter(customer =>
    customer.name.toLowerCase().includes(customerSearchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(customerSearchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecipientTypeChange = (e) => {
    const { value } = e.target;
    setEmailData(prev => ({
      ...prev,
      recipientType: value,
      selectedCustomers: value === 'all' ? [] : prev.selectedCustomers
    }));
    setShowCustomerSelection(value === 'selected');
  };

  const handleCustomerSelect = (customerId) => {
    const customer = availableCustomers.find(c => c.id === customerId);
    setEmailData(prev => ({
      ...prev,
      selectedCustomers: prev.selectedCustomers.some(c => c.id === customerId)
        ? prev.selectedCustomers.filter(c => c.id !== customerId)
        : [...prev.selectedCustomers, customer]
    }));
  };

  const handleRemoveCustomer = (customerId) => {
    setEmailData(prev => ({
      ...prev,
      selectedCustomers: prev.selectedCustomers.filter(c => c.id !== customerId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('E-posta oluşturuldu:', emailData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl max-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">E-Posta Oluştur</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-Posta Başlığı *
              </label>
              <input
                type="text"
                name="title"
                value={emailData.title}
                onChange={handleInputChange}
                placeholder="Örn: Yeni Kurs Duyurusu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-Posta Metni *
              </label>
              <textarea
                name="text"
                value={emailData.text}
                onChange={handleInputChange}
                rows={6}
                placeholder="E-posta içeriğinizi buraya yazın..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Recipient Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alıcılar *
              </label>
              <select
                name="recipientType"
                value={emailData.recipientType}
                onChange={handleRecipientTypeChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="all">Tüm Müşteri Listesi ({availableCustomers.length} kişi)</option>
                <option value="selected">Seçili Müşteriler</option>
              </select>
            </div>

            {/* Customer Selection - Only visible when "selected" is chosen */}
            {showCustomerSelection && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Müşteri Seç
                </label>
                
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Müşteri adı veya e-posta ile ara..."
                    value={customerSearchTerm}
                    onChange={(e) => setCustomerSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-10"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>

                {/* Selected Customers Display */}
                {emailData.selectedCustomers.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Seçili Müşteriler ({emailData.selectedCustomers.length}):</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {emailData.selectedCustomers.map((customer) => (
                        <span
                          key={customer.id}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                        >
                          {customer.name}
                          <button
                            type="button"
                            onClick={() => handleRemoveCustomer(customer.id)}
                            className="ml-1 text-primary-600 hover:text-primary-800"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customer List */}
                <div className="border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer) => (
                      <div
                        key={customer.id}
                        onClick={() => handleCustomerSelect(customer.id)}
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                          emailData.selectedCustomers.some(c => c.id === customer.id)
                            ? 'bg-primary-50 text-primary-700'
                            : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                            <p className="text-xs text-gray-500">{customer.email}</p>
                          </div>
                          {emailData.selectedCustomers.some(c => c.id === customer.id) && (
                            <span className="text-primary-600">✓</span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">
                      Aradığınız kriterlere uygun müşteri bulunamadı.
                    </div>
                  )}
                </div>

                {emailData.recipientType === 'selected' && emailData.selectedCustomers.length === 0 && (
                  <p className="text-red-500 text-sm">En az bir müşteri seçmelisiniz.</p>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reports Component
const Reports = () => {
  const [timePeriod, setTimePeriod] = useState('weekly');
  const [selectedParameter, setSelectedParameter] = useState('gelir');

  // Mock data for different parameters and time periods
  const mockData = {
    daily: {
      gelir: {
        labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        data: [1200, 1900, 1700, 2200, 2800, 1600, 1400],
        color: 'rgb(34, 197, 94)',
        bgColor: 'rgba(34, 197, 94, 0.1)'
      },
      randevu_sayisi: {
        labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        data: [8, 12, 10, 15, 18, 9, 7],
        color: 'rgb(59, 130, 246)',
        bgColor: 'rgba(59, 130, 246, 0.1)'
      },
      musteri_sayisi: {
        labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        data: [6, 9, 8, 11, 14, 7, 5],
        color: 'rgb(168, 85, 247)',
        bgColor: 'rgba(168, 85, 247, 0.1)'
      },
      ziyaret_sayisi: {
        labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        data: [45, 67, 52, 78, 89, 43, 38],
        color: 'rgb(239, 68, 68)',
        bgColor: 'rgba(239, 68, 68, 0.1)'
      }
    },
    weekly: {
      gelir: {
        labels: ['1. Hafta', '2. Hafta', '3. Hafta', '4. Hafta', '5. Hafta', '6. Hafta'],
        data: [8500, 12300, 10800, 15600, 18900, 11200],
        color: 'rgb(34, 197, 94)',
        bgColor: 'rgba(34, 197, 94, 0.1)'
      },
      randevu_sayisi: {
        labels: ['1. Hafta', '2. Hafta', '3. Hafta', '4. Hafta', '5. Hafta', '6. Hafta'],
        data: [54, 78, 65, 89, 105, 72],
        color: 'rgb(59, 130, 246)',
        bgColor: 'rgba(59, 130, 246, 0.1)'
      },
      musteri_sayisi: {
        labels: ['1. Hafta', '2. Hafta', '3. Hafta', '4. Hafta', '5. Hafta', '6. Hafta'],
        data: [42, 61, 48, 71, 85, 58],
        color: 'rgb(168, 85, 247)',
        bgColor: 'rgba(168, 85, 247, 0.1)'
      },
      ziyaret_sayisi: {
        labels: ['1. Hafta', '2. Hafta', '3. Hafta', '4. Hafta', '5. Hafta', '6. Hafta'],
        data: [320, 467, 385, 578, 645, 412],
        color: 'rgb(239, 68, 68)',
        bgColor: 'rgba(239, 68, 68, 0.1)'
      }
    },
    monthly: {
      gelir: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        data: [34500, 42300, 38900, 51200, 67800, 45600],
        color: 'rgb(34, 197, 94)',
        bgColor: 'rgba(34, 197, 94, 0.1)'
      },
      randevu_sayisi: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        data: [210, 287, 245, 334, 412, 298],
        color: 'rgb(59, 130, 246)',
        bgColor: 'rgba(59, 130, 246, 0.1)'
      },
      musteri_sayisi: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        data: [168, 221, 189, 267, 325, 234],
        color: 'rgb(168, 85, 247)',
        bgColor: 'rgba(168, 85, 247, 0.1)'
      },
      ziyaret_sayisi: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        data: [1245, 1678, 1423, 1892, 2340, 1756],
        color: 'rgb(239, 68, 68)',
        bgColor: 'rgba(239, 68, 68, 0.1)'
      }
    }
  };

  const parameterLabels = {
    gelir: 'Gelir',
    randevu_sayisi: 'Randevu Sayısı',
    musteri_sayisi: 'Müşteri Sayısı',
    ziyaret_sayisi: 'Ziyaret Sayısı'
  };

  const parameterUnits = {
    gelir: '₺',
    randevu_sayisi: 'adet',
    musteri_sayisi: 'kişi',
    ziyaret_sayisi: 'ziyaret'
  };

  const currentData = mockData[timePeriod][selectedParameter];

  const chartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: parameterLabels[selectedParameter],
        data: currentData.data,
        borderColor: currentData.color,
        backgroundColor: currentData.bgColor,
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: currentData.color,
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            weight: '500'
          }
        }
      },
      title: {
        display: true,
        text: `${parameterLabels[selectedParameter]} - ${
          timePeriod === 'daily' ? 'Günlük' : 
          timePeriod === 'weekly' ? 'Haftalık' : 'Aylık'
        } Analiz`,
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: currentData.color,
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${parameterLabels[selectedParameter]}: ${context.parsed.y} ${parameterUnits[selectedParameter]}`;
          }
        }
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            weight: '500'
          },
          color: '#6B7280'
        }
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#6B7280',
          callback: function(value) {
            if (selectedParameter === 'gelir') {
              return value >= 1000 ? (value / 1000) + 'K ₺' : value + ' ₺';
            }
            return value + ' ' + parameterUnits[selectedParameter];
          }
        }
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    elements: {
      point: {
        hoverRadius: 8
      }
    }
  };

  // Calculate summary statistics
  const calculateStats = () => {
    const data = currentData.data;
    const total = data.reduce((sum, value) => sum + value, 0);
    const average = Math.round(total / data.length);
    const max = Math.max(...data);
    const min = Math.min(...data);
    const growth = data.length > 1 ? ((data[data.length - 1] - data[0]) / data[0] * 100).toFixed(1) : 0;

    return { total, average, max, min, growth };
  };

  const stats = calculateStats();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Raporlar</h1>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Rapor İndir
        </button>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Parameter Selection */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Parametre:</label>
            <select
              value={selectedParameter}
              onChange={(e) => setSelectedParameter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              <option value="gelir">Gelir</option>
              <option value="randevu_sayisi">Randevu Sayısı</option>
              <option value="musteri_sayisi">Müşteri Sayısı</option>
              <option value="ziyaret_sayisi">Ziyaret Sayısı</option>
            </select>
          </div>

          {/* Time Period Selection */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setTimePeriod('daily')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                timePeriod === 'daily' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Günlük
            </button>
            <button
              onClick={() => setTimePeriod('weekly')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                timePeriod === 'weekly' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Haftalık
            </button>
            <button
              onClick={() => setTimePeriod('monthly')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                timePeriod === 'monthly' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Aylık
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Line Graph */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="h-96">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {selectedParameter === 'gelir' ? `₺${stats.total.toLocaleString('tr-TR')}` : `${stats.total} ${parameterUnits[selectedParameter]}`}
          </div>
          <div className="text-sm text-gray-600 mt-1">Toplam</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {selectedParameter === 'gelir' ? `₺${stats.average.toLocaleString('tr-TR')}` : `${stats.average} ${parameterUnits[selectedParameter]}`}
          </div>
          <div className="text-sm text-gray-600 mt-1">Ortalama</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">
            {selectedParameter === 'gelir' ? `₺${stats.max.toLocaleString('tr-TR')}` : `${stats.max} ${parameterUnits[selectedParameter]}`}
          </div>
          <div className="text-sm text-gray-600 mt-1">En Yüksek</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-red-600">
            {selectedParameter === 'gelir' ? `₺${stats.min.toLocaleString('tr-TR')}` : `${stats.min} ${parameterUnits[selectedParameter]}`}
          </div>
          <div className="text-sm text-gray-600 mt-1">En Düşük</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
          <div className={`text-2xl font-bold ${stats.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stats.growth >= 0 ? '+' : ''}{stats.growth}%
          </div>
          <div className="text-sm text-gray-600 mt-1">Büyüme</div>
        </div>
      </div>

      {/* Additional Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">En Çok Tercih Edilen Hizmetler</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Dijital Pazarlama Danışmanlığı</span>
              <span className="font-medium">127 randevu</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Web Geliştirme Eğitimi</span>
              <span className="font-medium">89 randevu</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">SEO Danışmanlığı</span>
              <span className="font-medium">78 randevu</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Müşteri Segmentleri</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Yeni Müşteriler</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tekrar Eden Müşteriler</span>
              <span className="font-medium">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">VIP Müşteriler</span>
              <span className="font-medium">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Component
const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900">Profil Bilgileri</h1>

      {/* Profile Photo */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profil Fotoğrafı"
            />
            <button className="absolute bottom-0 right-0 bg-primary-600 text-white rounded-full p-2 hover:bg-primary-700 transition-colors">
              📷
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Profil Fotoğrafı</h3>
            <p className="text-gray-600">JPG, PNG veya GIF formatında, maksimum 5MB</p>
            <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
              Fotoğraf Değiştir
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Kişisel Bilgiler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
            <input
              type="text"
              defaultValue="Ahmet"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
            <input
              type="text"
              defaultValue="Yılmaz"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
            <input
              type="email"
              defaultValue="ahmet@korvo.co"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
            <input
              type="tel"
              defaultValue="+90 532 123 4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Hakkımda</label>
            <textarea
              rows={4}
              defaultValue="Dijital pazarlama ve web geliştirme alanında 8 yıllık deneyime sahip bir uzmanım. Modern teknolojiler kullanarak işletmelerin dijital dönüşümüne yardımcı oluyorum."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Güncelle
          </button>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Sosyal Medya</h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">🔗</span>
              Website
            </label>
            <input
              type="url"
              placeholder="https://www.website.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">💼</span>
              LinkedIn
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">🐦</span>
              Twitter
            </label>
            <input
              type="url"
              placeholder="https://twitter.com/..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">📸</span>
              Instagram
            </label>
            <input
              type="url"
              placeholder="https://instagram.com/..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">📺</span>
              YouTube
            </label>
            <input
              type="url"
              placeholder="https://youtube.com/@..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">🎵</span>
              TikTok
            </label>
            <input
              type="url"
              placeholder="https://tiktok.com/@..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2 text-lg">👥</span>
              Facebook
            </label>
            <input
              type="url"
              placeholder="https://facebook.com/..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Güncelle
          </button>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Ödeme Bilgilerim</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hesap Türü *
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">Hesap türü seçin</option>
              <option value="bireysel">Bireysel</option>
              <option value="kurumsal">Kurumsal</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ad Soyad / Şirket Unvanı *
            </label>
            <input
              type="text"
              placeholder="Ahmet Yılmaz veya ABC Şirketi A.Ş."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              IBAN Numarası *
            </label>
            <input
              type="text"
              placeholder="TR32 0001 0000 0000 0000 0000 01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              TCKN / Vergi No *
            </label>
            <input
              type="text"
              placeholder="12345678901 veya 1234567890"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vergi Dairesi
            </label>
            <input
              type="text"
              placeholder="Kadıköy Vergi Dairesi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adres *
            </label>
            <textarea
              rows={3}
              placeholder="Tam adres bilginizi giriniz..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Güncelle
          </button>
        </div>
      </div>
    </div>
  );
};

// Expertise Component
const Expertise = () => {
  const [skills, setSkills] = useState([
    { name: 'Dijital Pazarlama', level: 95 },
    { name: 'Web Geliştirme', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'SEO Optimizasyonu', level: 92 },
    { name: 'İçerik Pazarlama', level: 85 },
  ]);

  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showCertModal, setCertModal] = useState(false);
  const [showExpModal, setExpModal] = useState(false);
  const [showEduModal, setEduModal] = useState(false);
  const [showTitleModal, setTitleModal] = useState(false);
  const [showTitleEditModal, setTitleEditModal] = useState(false);
  const [showEduEditModal, setEduEditModal] = useState(false);
  const [showCertEditModal, setCertEditModal] = useState(false);
  
  // Files state and functionality
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'Google Analytics Sertifikası.pdf', type: 'pdf', size: '245 KB', uploadDate: '2024-01-15' },
    { id: 2, name: 'Diploma_Bilgisayar_Mühendisliği.pdf', type: 'pdf', size: '1.2 MB', uploadDate: '2024-01-10' },
    { id: 3, name: 'Profil_Fotoğrafı.jpg', type: 'image', size: '512 KB', uploadDate: '2024-01-12' }
  ]);
  const [isDragging, setIsDragging] = useState(false);

  // File handling functions
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    uploadFiles(files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    uploadFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const uploadFiles = (files) => {
    const validFiles = files.filter(file => {
      const isValidType = file.type.includes('pdf') || file.type.includes('image');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValidType && isValidSize;
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: file.type.includes('pdf') ? 'pdf' : 'image',
      size: formatFileSize(file.size),
      uploadDate: new Date().toISOString().split('T')[0]
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const deleteFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getFileIcon = (type) => {
    return type === 'pdf' ? '📄' : '🖼️';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900">Uzmanlık Bilgileri</h1>

      {/* Title/Unvan */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Unvan</h3>
          <button 
            onClick={() => setTitleModal(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Unvan Ekle
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <span className="text-lg">👑</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Kıdemli Dijital Pazarlama Uzmanı</h4>
                <p className="text-sm text-gray-600">Unvan</p>
              </div>
            </div>
            <button 
              onClick={() => setTitleEditModal(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              ⚙️
            </button>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Uzmanlık Alanlarım</h3>
          <button 
            onClick={() => setShowSkillModal(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Yeni Alan Ekle
          </button>
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Eğitim</h3>
          <button 
            onClick={() => setEduModal(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Eğitim Ekle
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Bilgisayar Mühendisliği Lisans</h4>
              <p className="text-sm text-gray-600">İstanbul Teknik Üniversitesi • 2016-2020</p>
            </div>
            <button 
              onClick={() => setEduEditModal(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              ⚙️
            </button>
          </div>
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <span className="text-2xl">📚</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Dijital Pazarlama Yüksek Lisans</h4>
              <p className="text-sm text-gray-600">Boğaziçi Üniversitesi • 2020-2022</p>
            </div>
            <button 
              onClick={() => setEduEditModal(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              ⚙️
            </button>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Sertifikalar</h3>
          <button 
            onClick={() => setCertModal(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Sertifika Ekle
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="p-3 bg-primary-100 rounded-lg mr-4">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Google Analytics Sertifikası</h4>
              <p className="text-sm text-gray-600">Google • 2023</p>
            </div>
            <button 
              onClick={() => setCertEditModal(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              ⚙️
            </button>
          </div>
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <span className="text-2xl">📜</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">React Developer Certification</h4>
              <p className="text-sm text-gray-600">Meta • 2023</p>
            </div>
            <button 
              onClick={() => setCertEditModal(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              ⚙️
            </button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Deneyim</h3>
          <button 
            onClick={() => setExpModal(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Deneyim Ekle
          </button>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-primary-500 pl-4">
            <h4 className="font-medium text-gray-900">Kıdemli Dijital Pazarlama Uzmanı</h4>
            <p className="text-sm text-gray-600">TechCorp A.Ş. • 2020 - Devam ediyor</p>
            <p className="text-sm text-gray-700 mt-2">
              Dijital pazarlama stratejilerinin geliştirilmesi ve uygulanması, SEO optimizasyonu ve sosyal medya yönetimi.
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-4">
            <h4 className="font-medium text-gray-900">Web Geliştirici</h4>
            <p className="text-sm text-gray-600">Freelance • 2018 - 2020</p>
            <p className="text-sm text-gray-700 mt-2">
              Müşteriler için modern web siteleri geliştirme, React.js ve Node.js teknolojileri kullanarak.
            </p>
          </div>
        </div>
      </div>

      {/* Dosyalar (Files) Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Dosyalar</h3>
        </div>
        
        {/* Information Box */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="text-blue-500 text-xl">ℹ️</span>
            </div>
            <p className="text-sm text-blue-800">
              Randevu sayfanızda görünmesini istediğiniz sertifika, diploma, resim veya belgeleri bu bölümden yükleyebilirsiniz.
            </p>
          </div>
        </div>

        {/* File Upload Area */}
        <div className="mb-6">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-gray-100 rounded-full">
                <span className="text-3xl">📁</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Dosya Yükle
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  PDF veya resim dosyalarını sürükleyip bırakın veya seçin
                </p>
                <label className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 cursor-pointer transition-colors">
                  <span>Dosya Seç</span>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.gif,.bmp,.webp"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Maksimum dosya boyutu: 10MB. Desteklenen formatlar: PDF, JPG, PNG, GIF
              </p>
            </div>
          </div>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Yüklenen Dosyalar</h4>
            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg">
                      <span className="text-xl">{getFileIcon(file.type)}</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">{file.name}</h5>
                      <p className="text-sm text-gray-600">
                        {file.size} • Yüklendi: {new Date(file.uploadDate).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        // In a real app, this would open the file
                        console.log('Opening file:', file.name);
                      }}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      title="Dosyayı Görüntüle"
                    >
                      👁️
                    </button>
                    <button
                      onClick={() => deleteFile(file.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      title="Dosyayı Sil"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showTitleModal && <TitleModal onClose={() => setTitleModal(false)} />}
      {showTitleEditModal && <TitleEditModal onClose={() => setTitleEditModal(false)} />}
      {showSkillModal && <SkillModal onClose={() => setShowSkillModal(false)} />}
      {showEduModal && <EducationModal onClose={() => setEduModal(false)} />}
      {showEduEditModal && <EducationEditModal onClose={() => setEduEditModal(false)} />}
      {showCertModal && <CertificationModal onClose={() => setCertModal(false)} />}
      {showCertEditModal && <CertificationEditModal onClose={() => setCertEditModal(false)} />}
      {showExpModal && <ExperienceModal onClose={() => setExpModal(false)} />}
    </div>
  );
};

// Calendar Component
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month'); // 'week' or 'month'
  const [selectedSlots, setSelectedSlots] = useState(new Set());
  const [showTooltip, setShowTooltip] = useState(false);
  const [alwaysAvailable, setAlwaysAvailable] = useState(false);

  // Sample appointments data
  const appointments = [
    {
      id: 1,
      title: 'React Danışmanlığı - Ahmet K.',
      date: '2024-06-25',
      time: '14:00',
      duration: 60,
      type: '1-1',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Dijital Pazarlama Workshop',
      date: '2024-06-27',
      time: '19:00',
      duration: 120,
      type: 'group',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'SEO Danışmanlığı - Fatma Y.',
      date: '2024-06-28',
      time: '16:00',
      duration: 90,
      type: '1-1',
      status: 'pending'
    }
  ];

  // Time slots for availability selection - Extended from 07:00 to 06:00 (next day)
  const timeSlots = [
    // Morning hours (07:00 - 11:30)
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    // Afternoon hours (12:00 - 17:30) 
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    // Evening hours (18:00 - 23:30)
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
    // Night/Early morning hours (00:00 - 06:00)
    '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00'
  ];

  const weekDays = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

  // Get days for current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < (startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1); i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  // Get week days
  const getWeekDays = (date) => {
    const week = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const weekDay = new Date(startOfWeek);
      weekDay.setDate(startOfWeek.getDate() + i);
      week.push(weekDay);
    }
    return week;
  };

  const formatDate = (date, format = 'full') => {
    if (!date) return '';
    
    if (format === 'short') {
      return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit' });
    }
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const getAppointmentsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return appointments.filter(apt => apt.date === dateStr);
  };

  const toggleTimeSlot = (day, time) => {
    const slotKey = `${day}-${time}`;
    const newSelected = new Set(selectedSlots);
    
    if (newSelected.has(slotKey)) {
      newSelected.delete(slotKey);
    } else {
      newSelected.add(slotKey);
    }
    
    setSelectedSlots(newSelected);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Takvim</h1>
        <div className="flex items-center space-x-4">
          {/* Calendar Connect Buttons */}
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyUzYuNDggMjIgMTIgMjJzMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJaTTEwIDZIMTRWOEgxMFY2Wk02IDEwSDE4VjE4SDZWMTBaTTggMTJWMTZIMTJWMTJIOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg=="
                alt="Google Calendar"
                className="w-4 h-4"
              />
              <span>Google Calendar</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTMgNFYyMEgxOEw5IDEyTDE4IDRIM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg=="
                alt="Outlook Calendar"
                className="w-4 h-4"
              />
              <span>Outlook</span>
            </button>
          </div>
          
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('week')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                view === 'week' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Haftalık
            </button>
            <button
              onClick={() => setView('month')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                view === 'month' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Aylık
            </button>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => view === 'month' ? navigateMonth(-1) : navigateWeek(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ←
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              {view === 'month' ? formatDate(currentDate) : 
               `${formatDate(getWeekDays(currentDate)[0], 'short')} - ${formatDate(getWeekDays(currentDate)[6], 'short')} ${formatDate(currentDate).split(' ')[1]}`}
            </h2>
            <button
              onClick={() => view === 'month' ? navigateMonth(1) : navigateWeek(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              →
            </button>
          </div>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors text-sm"
          >
            Bugün
          </button>
        </div>

        {/* Month View */}
        {view === 'month' && (
          <div>
            {/* Week Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentDate).map((day, index) => {
                const dayAppointments = getAppointmentsForDate(day);
                const isToday = day && day.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={index}
                    className={`min-h-[100px] p-2 border border-gray-100 rounded-lg ${
                      day ? 'bg-white hover:bg-gray-50' : 'bg-gray-50'
                    } ${isToday ? 'bg-primary-50 border-primary-200' : ''}`}
                  >
                    {day && (
                      <>
                        <div className={`text-sm font-medium mb-1 ${
                          isToday ? 'text-primary-600' : 'text-gray-900'
                        }`}>
                          {day.getDate()}
                        </div>
                        <div className="space-y-1">
                          {dayAppointments.map((apt) => (
                            <div
                              key={apt.id}
                              className={`text-xs p-1 rounded text-white ${
                                apt.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                              }`}
                            >
                              {apt.time} {apt.type === '1-1' ? '👤' : '👥'}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Week View */}
        {view === 'week' && (
          <div>
            <div className="grid grid-cols-8 gap-2">
              {/* Time Column */}
              <div className="space-y-12">
                <div className="h-12"></div> {/* Header space */}
                {timeSlots.filter((_, i) => i % 2 === 0).map((time) => (
                  <div key={time} className="text-xs text-gray-500 text-right pr-2">
                    {time}
                  </div>
                ))}
              </div>
              
              {/* Week Days */}
              {getWeekDays(currentDate).map((day, dayIndex) => {
                const dayAppointments = getAppointmentsForDate(day);
                const isToday = day.toDateString() === new Date().toDateString();
                
                return (
                  <div key={dayIndex} className="space-y-1">
                    {/* Day Header */}
                    <div className={`text-center p-2 rounded-lg ${
                      isToday ? 'bg-primary-100 text-primary-700' : 'bg-gray-50'
                    }`}>
                      <div className="text-xs text-gray-600">{weekDays[dayIndex]}</div>
                      <div className="font-medium">{day.getDate()}</div>
                    </div>
                    
                    {/* Time Slots */}
                    <div className="space-y-1">
                      {timeSlots.map((time) => {
                        const appointment = dayAppointments.find(apt => apt.time === time);
                        return (
                          <div
                            key={time}
                            className={`h-6 rounded border border-gray-100 ${
                              appointment 
                                ? `bg-${appointment.status === 'confirmed' ? 'green' : 'yellow'}-100 border-${appointment.status === 'confirmed' ? 'green' : 'yellow'}-300`
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                          >
                            {appointment && (
                              <div className="text-xs p-1 text-gray-700 truncate">
                                {appointment.type === '1-1' ? '👤' : '👥'} {appointment.title.split(' ')[0]}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Availability Settings */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <h3 className="text-lg font-medium text-gray-900">Müsaitlik Ayarları</h3>
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-200 transition-colors"
            >
              i
            </button>
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap z-10">
                Sisteme eklenen randevular, takvimine otomatik olarak yansıyacaktır.
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          Danışanların randevu oluştururken görüntüleyeceği müsait zamanlarınızı seçin
        </p>

        <div className={`grid grid-cols-1 lg:grid-cols-7 gap-4 ${alwaysAvailable ? 'opacity-50 pointer-events-none' : ''}`}>
          {weekDays.map((day, dayIndex) => (
            <div key={day} className="space-y-3">
              <h4 className="font-medium text-gray-900 text-center">{day}</h4>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {timeSlots.map((time) => {
                  const slotKey = `${dayIndex}-${time}`;
                  const isSelected = selectedSlots.has(slotKey);
                  
                  return (
                    <button
                      key={time}
                      onClick={() => !alwaysAvailable && toggleTimeSlot(dayIndex, time)}
                      disabled={alwaysAvailable}
                      className={`w-full text-xs py-1 px-2 rounded text-center transition-colors ${
                        alwaysAvailable
                          ? 'bg-primary-200 text-primary-800 cursor-not-allowed'
                          : isSelected 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Always Available Info */}
        {alwaysAvailable && (
          <div className="mt-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
            <div className="flex items-center">
              <span className="text-primary-600 mr-2">ℹ️</span>
              <p className="text-sm text-primary-800">
                "Her Zaman Müsaitim" seçeneği aktif. Tüm zaman dilimleri otomatik olarak müsait olarak işaretlenmiştir.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          {/* Always Available Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="alwaysAvailable"
              checked={alwaysAvailable}
              onChange={(e) => setAlwaysAvailable(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="alwaysAvailable" className="ml-2 block text-sm text-gray-700">
              Her Zaman Müsaitim
            </label>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button 
              onClick={() => {
                setSelectedSlots(new Set());
                setAlwaysAvailable(false);
              }}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Sıfırla
            </button>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Kaydet
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Yaklaşan Randevular</h3>
        <div className="space-y-3">
          {appointments.filter(apt => new Date(apt.date) >= new Date()).map((apt) => (
            <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  apt.type === '1-1' ? 'bg-orange-100' : 'bg-blue-100'
                }`}>
                  <span className="text-lg">{apt.type === '1-1' ? '👤' : '👥'}</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{apt.title}</h4>
                  <p className="text-sm text-gray-600">
                    {apt.date} • {apt.time} • {apt.duration} dakika
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {apt.status === 'confirmed' ? 'Onaylandı' : 'Beklemede'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Title Modal Component
const TitleModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Unvan eklendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Unvan Ekle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Unvan *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="Örn: Kıdemli Dijital Pazarlama Uzmanı"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Unvan hakkında kısa açıklama..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Skill Modal Component
const SkillModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    level: 50,
    category: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Beceri eklendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Yeni Beceri Ekle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Beceri Adı *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Örn: React.js"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Kategori seçin</option>
              <option value="technical">Teknik</option>
              <option value="marketing">Pazarlama</option>
              <option value="design">Tasarım</option>
              <option value="management">Yönetim</option>
              <option value="language">Dil</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Seviye: {formData.level}%
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={formData.level}
              onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Bu beceri hakkında detay..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Education Modal Component
const EducationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    current: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Eğitim eklendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Eğitim Ekle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kurum *</label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => setFormData({...formData, institution: e.target.value})}
              placeholder="Örn: İstanbul Teknik Üniversitesi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Derece *</label>
            <select
              value={formData.degree}
              onChange={(e) => setFormData({...formData, degree: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            >
              <option value="">Derece seçin</option>
              <option value="lisans">Lisans</option>
              <option value="yuksek-lisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
              <option value="on-lisans">Ön Lisans</option>
              <option value="sertifika">Sertifika Programı</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alan *</label>
            <input
              type="text"
              value={formData.field}
              onChange={(e) => setFormData({...formData, field: e.target.value})}
              placeholder="Örn: Bilgisayar Mühendisliği"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Tarihi *</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bitiş Tarihi</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={formData.current}
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="current"
              checked={formData.current}
              onChange={(e) => setFormData({...formData, current: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="current" className="ml-2 block text-sm text-gray-700">
              Halen devam ediyor
            </label>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Certification Modal Component
const CertificationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    issuer: '',
    date: '',
    expiryDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sertifika eklendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Sertifika Ekle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sertifika Adı *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Örn: Google Analytics Sertifikası"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Veren Kurum *</label>
            <input
              type="text"
              value={formData.issuer}
              onChange={(e) => setFormData({...formData, issuer: e.target.value})}
              placeholder="Örn: Google"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alınma Tarihi *</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Geçerlilik Süresi</label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Experience Modal Component
const ExperienceModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    skills: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Deneyim eklendi:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Deneyim Ekle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pozisyon *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="Örn: Kıdemli Dijital Pazarlama Uzmanı"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Şirket *</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Örn: TechCorp A.Ş."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Konum</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="Örn: İstanbul, Türkiye"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Tarihi *</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bitiş Tarihi</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                disabled={formData.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="currentJob"
              checked={formData.current}
              onChange={(e) => setFormData({...formData, current: e.target.checked, endDate: e.target.checked ? '' : formData.endDate})}
              className="mr-2"
            />
            <label htmlFor="currentJob" className="text-sm text-gray-700">Halen çalışıyorum</label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Görevlerinizi ve başarılarınızı detaylandırın..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kullanılan Beceriler</label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              placeholder="React, Node.js, MongoDB (virgülle ayırın)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Services Component
const Services = () => {
  const [activeTab, setActiveTab] = useState('hizmetler');
  const [editServiceModal, setEditServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  
  // Mock services data with IDs for management - Updated with CreateService form fields
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Dijital Pazarlama Eğitimi",
      description: "Kapsamlı dijital pazarlama stratejileri ve uygulamaları üzerine birebir danışmanlık hizmeti",
      category: "pazarlama",
      eventType: "online", // Hizmet Kanalı
      meetingType: "1-1",
      platform: "zoom",
      location: "",
      duration: "120", // dakika
      price: "500",
      maxAttendees: "1",
      icon: "🎓",
      iconBg: "bg-primary-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 2,
      title: "E-ticaret Web Sitesi Geliştirme",
      description: "Modern ve kullanıcı dostu e-ticaret web siteleri geliştirme hizmeti",
      category: "teknoloji",
      eventType: "hybrid",
      meetingType: "1-1",
      platform: "google-meet",
      location: "İstanbul Ofis",
      duration: "240",
      price: "25000",
      maxAttendees: "1",
      icon: "💻",
      iconBg: "bg-blue-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 3,
      title: "SEO Danışmanlığı",
      description: "Arama motoru optimizasyonu ve organik trafik artırma stratejileri",
      category: "pazarlama",
      eventType: "online",
      meetingType: "1-1",
      platform: "zoom",
      location: "",
      duration: "90",
      price: "3000",
      maxAttendees: "1",
      icon: "📈",
      iconBg: "bg-green-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 4,
      title: "Psikolojik Danışmanlık",
      description: "Bireysel psikolojik destek ve terapi seansları",
      category: "kisisel-gelisim",
      eventType: "offline",
      meetingType: "1-1",
      platform: "",
      location: "Ankara Kliniği",
      duration: "50",
      price: "400",
      maxAttendees: "1",
      icon: "🧠",
      iconBg: "bg-purple-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 5,
      title: "React.js Eğitimi",
      description: "Modern React.js framework'ü ile web geliştirme eğitimi",
      category: "teknoloji",
      eventType: "online",
      meetingType: "grup",
      platform: "microsoft-teams",
      location: "",
      duration: "180",
      price: "1500",
      maxAttendees: "20",
      icon: "📚",
      iconBg: "bg-yellow-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 6,
      title: "Tasarım Thinking Workshop",
      description: "Yaratıcı problem çözme ve tasarım düşüncesi metodolojileri",
      category: "tasarim",
      eventType: "hybrid",
      meetingType: "grup",
      platform: "zoom",
      location: "İstanbul Workshop Alanı",
      duration: "360",
      price: "200",
      maxAttendees: "15",
      icon: "🎯",
      iconBg: "bg-red-100",
      status: "Aktif",
      isOfflineEvent: false
    }
  ]);

  // Mock packages data with CreatePackage form fields
  const [packages, setPackages] = useState([
    {
      id: 1,
      title: "Dijital Pazarlama Mastery Paketi",
      description: "Kapsamlı dijital pazarlama eğitimi ve danışmanlık paketi. 8 haftalık süreçte markanızı dijital dünyada güçlendirin.",
      category: "danismanlik",
      eventType: "hybrid",
      meetingType: "1-1",
      platform: "zoom",
      location: "İstanbul Ofis",
      duration: "90",
      price: "4500",
      appointmentCount: "8",
      maxAttendees: "1",
      date: "2024-07-01",
      time: "14:00",
      icon: "📈",
      iconBg: "bg-primary-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 2,
      title: "Web Geliştirme Bootcamp",
      description: "Sıfırdan ileri seviye web geliştirme öğrenin. React, Node.js ve modern teknolojiler ile projeler geliştirin.",
      category: "egitim",
      eventType: "online",
      meetingType: "grup",
      platform: "microsoft-teams",
      location: "",
      duration: "240",
      price: "8900",
      appointmentCount: "12",
      maxAttendees: "15",
      date: "2024-07-15",
      time: "19:00",
      icon: "💻",
      iconBg: "bg-blue-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 3,
      title: "Kişisel Gelişim Mentorluk Paketi",
      description: "6 aylık mentorluk programı ile kişisel ve profesyonel hedeflerinize ulaşın. Birebir rehberlik ve destek.",
      category: "mentorluk",
      eventType: "offline",
      meetingType: "1-1",
      platform: "",
      location: "Ankara Danışmanlık Merkezi",
      duration: "60",
      price: "3200",
      appointmentCount: "6",
      maxAttendees: "1",
      date: "",
      time: "",
      icon: "🧠",
      iconBg: "bg-purple-100",
      status: "Aktif",
      isOfflineEvent: false
    },
    {
      id: 4,
      title: "UX/UI Tasarım Workshop Serisi",
      description: "Kullanıcı deneyimi ve arayüz tasarımı konularında uzmanlaşın. Portfolio projelerinizi geliştirin.",
      category: "workshop",
      eventType: "hybrid",
      meetingType: "grup",
      platform: "google-meet",
      location: "İstanbul Tasarım Stüdyosu",
      duration: "180",
      price: "2750",
      appointmentCount: "5",
      maxAttendees: "10",
      date: "2024-08-01",
      time: "13:00",
      icon: "🎨",
      iconBg: "bg-yellow-100",
      status: "Aktif",
      isOfflineEvent: false
    }
  ]);

  const handleEditService = (service) => {
    setSelectedService({...service});
    setEditServiceModal(true);
  };

  const handleDeleteService = (service) => {
    setServiceToDelete(service);
    setDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setServices(services.filter(service => service.id !== serviceToDelete.id));
    setDeleteConfirmation(false);
    setServiceToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteConfirmation(false);
    setServiceToDelete(null);
  };

  const saveServiceChanges = (updatedService) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ));
    setEditServiceModal(false);
    setSelectedService(null);
  };

  return (
    <div className="space-y-6">
      {/* Header with Tab Switch */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => setActiveTab('hizmetler')}
            className={`text-2xl font-bold transition-colors ${
              activeTab === 'hizmetler' 
                ? 'text-gray-900 border-b-2 border-primary-500 pb-1' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Hizmetlerim
          </button>
          <button
            onClick={() => setActiveTab('paketler')}
            className={`text-2xl font-bold transition-colors ${
              activeTab === 'paketler' 
                ? 'text-gray-900 border-b-2 border-primary-500 pb-1' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Paketler
          </button>
        </div>
        
        {activeTab === 'hizmetler' ? (
          <Link 
            to="/dashboard/hizmet/olustur"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Ekle
          </Link>
        ) : (
          <Link 
            to="/dashboard/packages/create"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Ekle
          </Link>
        )}
      </div>

      {/* Description Text */}
      {activeTab === 'hizmetler' && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-gray-700 text-sm">
            Bu bölümden, danışanlarınızın sizden alacağı randevu, eğitim, workshop vb. etkinliklerinizi yönetebilirsiniz.
          </p>
        </div>
      )}

      {/* Hizmetler Tab Content */}
      {activeTab === 'hizmetler' && (
        <>
          {/* Aktif Hizmetlerim - Card Box View */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Aktif Hizmetlerim</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => {
                // Helper functions for display
                const getCategoryDisplay = (cat) => {
                  const categories = {
                    'teknoloji': 'Teknoloji',
                    'pazarlama': 'Pazarlama', 
                    'tasarim': 'Tasarım',
                    'is-gelistirme': 'İş Geliştirme',
                    'kisisel-gelisim': 'Kişisel Gelişim'
                  };
                  return categories[cat] || cat;
                };

                const getChannelDisplay = (eventType) => {
                  const channels = {
                    'online': 'Online',
                    'offline': 'Yüz Yüze',
                    'hybrid': 'Hibrit'
                  };
                  return channels[eventType] || eventType;
                };

                const getPlatformDisplay = (platform) => {
                  const platforms = {
                    'zoom': 'Zoom',
                    'google-meet': 'Google Meet',
                    'microsoft-teams': 'Microsoft Teams',
                    'jitsi': 'Jitsi'
                  };
                  return platforms[platform] || platform || '-';
                };

                const getDurationDisplay = (duration) => {
                  if (!duration) return '-';
                  const hours = Math.floor(duration / 60);
                  const minutes = duration % 60;
                  if (hours > 0) {
                    return minutes > 0 ? `${hours}sa ${minutes}dk` : `${hours}sa`;
                  }
                  return `${minutes}dk`;
                };

                return (
                  <div key={service.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 ${service.iconBg} rounded-full`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEditService(service)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" 
                          title="Düzenle"
                        >
                          ✏️
                        </button>
                        <button 
                          onClick={() => handleDeleteService(service)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" 
                          title="Sil"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    
                    {/* Hizmet Başlığı */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="space-y-3">
                      {/* Kategori */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Kategori:</span>
                        <span className="text-sm font-medium text-gray-900">{getCategoryDisplay(service.category)}</span>
                      </div>

                      {/* Hizmet Kanalı */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Hizmet Kanalı:</span>
                        <span className="text-sm font-medium text-gray-900">{getChannelDisplay(service.eventType)}</span>
                      </div>

                      {/* Platform */}
                      {(service.eventType === 'online' || service.eventType === 'hybrid') && service.platform && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Platform:</span>
                          <span className="text-sm font-medium text-gray-900">{getPlatformDisplay(service.platform)}</span>
                        </div>
                      )}

                      {/* Konum */}
                      {(service.eventType === 'offline' || service.eventType === 'hybrid') && service.location && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Konum:</span>
                          <span className="text-sm font-medium text-gray-900 truncate">{service.location}</span>
                        </div>
                      )}

                      {/* Süre */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Süre:</span>
                        <span className="text-sm font-medium text-gray-900">{getDurationDisplay(parseInt(service.duration))}</span>
                      </div>

                      {/* Fiyat */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Fiyat:</span>
                        <span className="text-lg font-bold text-primary-600">₺{service.price}</span>
                      </div>

                      {/* Durum */}
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-600">Durum:</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">{service.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State - if no services */}
            {/* 
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🛠️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz aktif hizmet yok</h3>
              <p className="text-gray-600 mb-4">İlk hizmetinizi oluşturmak için "+ Ekle" butonuna tıklayın.</p>
            </div>
            */}
          </div>
        </>
      )}

      {/* Edit Service Modal */}
      {editServiceModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Hizmeti Düzenle</h2>
              <button
                onClick={() => setEditServiceModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              saveServiceChanges(selectedService);
            }}>
              <div className="space-y-6">
                {/* Hizmet Başlığı */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Başlığı *
                  </label>
                  <input
                    type="text"
                    value={selectedService.title}
                    onChange={(e) => setSelectedService({...selectedService, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Örn: Dijital Pazarlama Danışmanlığı"
                    required
                  />
                </div>

                {/* Hizmet Açıklaması */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Açıklaması
                  </label>
                  <textarea
                    value={selectedService.description}
                    onChange={(e) => setSelectedService({...selectedService, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Hizmet hakkında detaylı bilgi verin..."
                  />
                </div>

                {/* Kategori and Hizmet Kanalı */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori *
                    </label>
                    <select
                      value={selectedService.category}
                      onChange={(e) => setSelectedService({...selectedService, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Kategori seçin</option>
                      <option value="teknoloji">Teknoloji</option>
                      <option value="pazarlama">Pazarlama</option>
                      <option value="tasarim">Tasarım</option>
                      <option value="is-gelistirme">İş Geliştirme</option>
                      <option value="kisisel-gelisim">Kişisel Gelişim</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Kanalı *
                    </label>
                    <select
                      value={selectedService.eventType}
                      onChange={(e) => setSelectedService({...selectedService, eventType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="online">Online</option>
                      <option value="offline">Yüz Yüze</option>
                      <option value="hybrid">Hibrit</option>
                    </select>
                  </div>
                </div>

                {/* Hizmet Türü - Only visible for Online or Hibrit */}
                {(selectedService.eventType === 'online' || selectedService.eventType === 'hybrid') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      value={selectedService.meetingType}
                      onChange={(e) => setSelectedService({...selectedService, meetingType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Hizmet türü seçin</option>
                      <option value="1-1">1-1 Özel</option>
                      <option value="grup">Grup</option>
                    </select>
                  </div>
                )}

                {/* Platform and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Platform - Only visible for Online or Hibrit */}
                  {(selectedService.eventType === 'online' || selectedService.eventType === 'hybrid') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Platform {selectedService.eventType !== 'hybrid' ? '*' : ''}
                      </label>
                      <select
                        value={selectedService.platform}
                        onChange={(e) => setSelectedService({...selectedService, platform: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required={selectedService.eventType === 'online'}
                      >
                        <option value="">Platform seçin</option>
                        <option value="zoom">Zoom</option>
                        <option value="google-meet">Google Meet</option>
                        <option value="microsoft-teams">Microsoft Teams</option>
                        <option value="jitsi">Jitsi</option>
                      </select>
                    </div>
                  )}

                  {/* Location - Only visible for Yüz Yüze or Hibrit */}
                  {(selectedService.eventType === 'offline' || selectedService.eventType === 'hybrid') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konum {selectedService.eventType !== 'hybrid' ? '*' : ''}
                      </label>
                      <input
                        type="text"
                        value={selectedService.location}
                        onChange={(e) => setSelectedService({...selectedService, location: e.target.value})}
                        placeholder="Hizmet konumu (adres)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required={selectedService.eventType === 'offline'}
                      />
                    </div>
                  )}
                </div>

                {/* Duration, Price, Max Attendees */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Süre (dakika)
                    </label>
                    <input
                      type="number"
                      value={selectedService.duration}
                      onChange={(e) => setSelectedService({...selectedService, duration: e.target.value})}
                      placeholder="120"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fiyat (₺)
                    </label>
                    <input
                      type="number"
                      value={selectedService.price}
                      onChange={(e) => setSelectedService({...selectedService, price: e.target.value})}
                      placeholder="199"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maksimum Katılımcı
                    </label>
                    <input
                      type="number"
                      value={selectedService.maxAttendees}
                      onChange={(e) => setSelectedService({...selectedService, maxAttendees: e.target.value})}
                      placeholder="50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Icon and Icon Background */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      İkon
                    </label>
                    <input
                      type="text"
                      value={selectedService.icon}
                      onChange={(e) => setSelectedService({...selectedService, icon: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="🎓"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      İkon Arkaplan Rengi
                    </label>
                    <select
                      value={selectedService.iconBg}
                      onChange={(e) => setSelectedService({...selectedService, iconBg: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="bg-primary-100">Primary (Yeşil)</option>
                      <option value="bg-blue-100">Mavi</option>
                      <option value="bg-green-100">Yeşil</option>
                      <option value="bg-purple-100">Mor</option>
                      <option value="bg-yellow-100">Sarı</option>
                      <option value="bg-red-100">Kırmızı</option>
                      <option value="bg-pink-100">Pembe</option>
                      <option value="bg-indigo-100">Indigo</option>
                    </select>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durum
                  </label>
                  <select
                    value={selectedService.status}
                    onChange={(e) => setSelectedService({...selectedService, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Pasif">Pasif</option>
                    <option value="Beklemede">Beklemede</option>
                  </select>
                </div>

                {/* Offline Event Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isOfflineEvent"
                    checked={selectedService.isOfflineEvent}
                    onChange={(e) => setSelectedService({...selectedService, isOfflineEvent: e.target.checked})}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isOfflineEvent" className="ml-2 block text-sm text-gray-700">
                    Bu hizmet online sistem dışında gerçekleşti
                  </label>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setEditServiceModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Değişiklikleri Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && serviceToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <span className="text-red-600 text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Hizmeti Sil
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                "<strong>{serviceToDelete.title}</strong>" hizmetini silmek istediğinizden emin misiniz? 
                Bu işlem geri alınamaz.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={cancelDelete}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  İptal
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paketler Tab Content */}
      {activeTab === 'paketler' && (
        <>
          {/* Aktif Paketler Table */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Aktif Paketler</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Müşteri Adı
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      E-Posta
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Telefon
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paket Adı
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Satın Alma Tarihi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Randevu Kullanımı
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Ayşe Demir</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">ayse.demir@email.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">+90 532 123 4567</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Dijital Pazarlama Paketi</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">15 Ocak 2024</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <span className="font-medium text-primary-600">3</span>
                        <span className="text-gray-500">/10</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Mehmet Kaya</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">mehmet.kaya@email.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">+90 545 987 6543</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Web Geliştirme Danışmanlığı</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">22 Ocak 2024</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <span className="font-medium text-primary-600">7</span>
                        <span className="text-gray-500">/15</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Fatma Özkan</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">fatma.ozkan@email.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">+90 555 111 2233</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Eğitim Paketi Premium</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">5 Şubat 2024</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <span className="font-medium text-primary-600">12</span>
                        <span className="text-gray-500">/20</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Aktif Paketler Card View */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Paket Şablonları</h3>
              <Link
                to="/dashboard/packages/create"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
              >
                <span className="mr-2">+</span>
                Yeni Paket Oluştur
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map(packageItem => {
                // Helper functions for package display
                const getCategoryDisplay = (cat) => {
                  const categories = {
                    'egitim': 'Eğitim',
                    'danismanlik': 'Danışmanlık',
                    'workshop': 'Workshop',
                    'mentorluk': 'Mentorlük'
                  };
                  return categories[cat] || cat;
                };

                const getChannelDisplay = (eventType) => {
                  const channels = {
                    'online': 'Online',
                    'offline': 'Yüz Yüze',
                    'hybrid': 'Hibrit'
                  };
                  return channels[eventType] || eventType;
                };

                const getPlatformDisplay = (platform) => {
                  const platforms = {
                    'zoom': 'Zoom',
                    'google-meet': 'Google Meet',
                    'microsoft-teams': 'Microsoft Teams',
                    'jitsi': 'Jitsi'
                  };
                  return platforms[platform] || platform || '-';
                };

                const getDurationDisplay = (duration) => {
                  if (!duration) return '-';
                  const hours = Math.floor(duration / 60);
                  const minutes = duration % 60;
                  if (hours > 0) {
                    return minutes > 0 ? `${hours}sa ${minutes}dk` : `${hours}sa`;
                  }
                  return `${minutes}dk`;
                };

                const getTypeDisplay = (meetingType) => {
                  return meetingType === '1-1' ? '1-1 Özel' : 'Grup';
                };

                return (
                  <div key={packageItem.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 ${packageItem.iconBg} rounded-full`}>
                        <span className="text-2xl">{packageItem.icon}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" 
                          title="Düzenle"
                        >
                          ✏️
                        </button>
                        <button 
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" 
                          title="Sil"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    
                    {/* Paket Adı */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{packageItem.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{packageItem.description}</p>
                    
                    <div className="space-y-3">
                      {/* Kategori */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Kategori:</span>
                        <span className="text-sm font-medium text-gray-900">{getCategoryDisplay(packageItem.category)}</span>
                      </div>

                      {/* Etkinlik Kanalı */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Kanal:</span>
                        <span className="text-sm font-medium text-gray-900">{getChannelDisplay(packageItem.eventType)}</span>
                      </div>

                      {/* Etkinlik Türü */}
                      {(packageItem.eventType === 'online' || packageItem.eventType === 'hybrid') && packageItem.meetingType && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Tür:</span>
                          <span className="text-sm font-medium text-gray-900">{getTypeDisplay(packageItem.meetingType)}</span>
                        </div>
                      )}

                      {/* Platform */}
                      {(packageItem.eventType === 'online' || packageItem.eventType === 'hybrid') && packageItem.platform && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Platform:</span>
                          <span className="text-sm font-medium text-gray-900">{getPlatformDisplay(packageItem.platform)}</span>
                        </div>
                      )}

                      {/* Konum */}
                      {(packageItem.eventType === 'offline' || packageItem.eventType === 'hybrid') && packageItem.location && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Konum:</span>
                          <span className="text-sm font-medium text-gray-900 truncate">{packageItem.location}</span>
                        </div>
                      )}

                      {/* Süre */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Süre:</span>
                        <span className="text-sm font-medium text-gray-900">{getDurationDisplay(parseInt(packageItem.duration))}</span>
                      </div>

                      {/* Randevu Adedi */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Randevu Adedi:</span>
                        <span className="text-sm font-medium text-primary-600">{packageItem.appointmentCount} seans</span>
                      </div>

                      {/* Maksimum Katılımcı - Only for group packages */}
                      {packageItem.meetingType === 'grup' && packageItem.maxAttendees && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Max Katılımcı:</span>
                          <span className="text-sm font-medium text-gray-900">{packageItem.maxAttendees} kişi</span>
                        </div>
                      )}

                      {/* Fiyat */}
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-600">Fiyat:</span>
                        <span className="text-lg font-bold text-primary-600">₺{packageItem.price}</span>
                      </div>

                      {/* Durum */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Durum:</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">{packageItem.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State - if no packages */}
            {packages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📦</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz paket yok</h3>
                <p className="text-gray-600 mb-4">İlk paketinizi oluşturmak için "Yeni Paket Oluştur" butonuna tıklayın.</p>
                <Link
                  to="/dashboard/packages/create"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Yeni Paket Oluştur
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// Settings Component
const Settings = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [currentPlan, setCurrentPlan] = useState('bireysel'); // Current active plan

  const monthlyPrices = {
    bireysel: 500,
    kurumsal: 750,
    seatPrice: 100
  };

  const yearlyPrices = {
    bireysel: 5500, // Monthly equivalent
    birey_yearly: 66000, // Total yearly
    bireysel_discount: 10,
    kurumsal: 6250, // Monthly equivalent  
    kurumsal_yearly: 75000, // Total yearly
    kurumsal_discount: 20,
    seatPrice: 1000 // Yearly seat price
  };

  const getCurrentPrice = (plan) => {
    if (billingPeriod === 'monthly') {
      return monthlyPrices[plan];
    } else {
      return yearlyPrices[plan];
    }
  };

  const getTotalKurumsalPrice = () => {
    const basePrice = getCurrentPrice('kurumsal');
    const seatPrice = billingPeriod === 'monthly' ? monthlyPrices.seatPrice : monthlyPrices.seatPrice; // Use monthly seat price for both
    const additionalSeats = selectedSeats - 1; // First seat included
    return basePrice + (additionalSeats * seatPrice);
  };

  const getKurumsalYearlyTotal = () => {
    const baseYearly = yearlyPrices.kurumsal_yearly;
    const additionalSeats = selectedSeats - 1;
    const additionalYearlySeats = additionalSeats * monthlyPrices.seatPrice * 12;
    return baseYearly + additionalYearlySeats;
  };

  const handlePlanClick = (planType) => {
    if (planType !== currentPlan) {
      // Redirect to uzmanlio.com for non-selected plans
      window.open('https://uzmanlio.com', '_blank');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900">Hesap Ayarları</h1>

      {/* Subscription Plans */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Aboneliklerim</h3>
        
        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yıllık
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bireysel Plan */}
          <div className={`border rounded-xl p-6 relative flex flex-col ${
            currentPlan === 'bireysel' 
              ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-20 bg-primary-50' 
              : 'border-gray-200 cursor-pointer hover:border-gray-300'
          }`}>
            {currentPlan === 'bireysel' && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                  Mevcut Plan
                </span>
              </div>
            )}
            
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-900">Bireysel</h4>
              <div className="mt-2 flex items-baseline">
                {billingPeriod === 'monthly' ? (
                  <span className="text-3xl font-bold text-gray-900">₺{getCurrentPrice('bireysel')}</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-gray-900">₺{getCurrentPrice('bireysel')}</span>
                    <span className="text-sm text-gray-600 ml-1">/ay</span>
                  </>
                )}
                <span className="text-sm text-gray-600 ml-1">
                  {billingPeriod === 'monthly' ? '/ay' : ''}
                </span>
              </div>
              
              {billingPeriod === 'yearly' && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    {yearlyPrices.bireysel_discount}% indirim
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    Yıllık ₺{yearlyPrices.birey_yearly.toLocaleString()}
                  </div>
                </div>
              )}
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Sınırsız Danışan</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Online Randevu</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Randevu Hatırlatıcı</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Kredi Kartı & Havale Online Ödeme</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">1 Ana Kullanıcı</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handlePlanClick('bireysel')}
              className={`w-full py-2 px-4 rounded-lg transition-colors mt-auto ${
                currentPlan === 'bireysel'
                  ? 'bg-primary-600 text-white cursor-default'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              disabled={currentPlan === 'bireysel'}
            >
              {currentPlan === 'bireysel' ? 'Mevcut Plan' : 'Planı Seç'}
            </button>
          </div>

          {/* Kurumsal Plan */}
          <div className={`border rounded-xl p-6 relative flex flex-col ${
            currentPlan === 'kurumsal' 
              ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-20 bg-primary-50' 
              : 'border-gray-200 cursor-pointer hover:border-gray-300'
          }`}>
            {currentPlan === 'kurumsal' && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                  Mevcut Plan
                </span>
              </div>
            )}
            
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-900">Kurumsal</h4>
              <div className="mt-2 flex items-baseline">
                {billingPeriod === 'monthly' ? (
                  <span className="text-3xl font-bold text-gray-900">₺{getTotalKurumsalPrice()}</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-gray-900">₺{getTotalKurumsalPrice()}</span>
                    <span className="text-sm text-gray-600 ml-1">/ay</span>
                  </>
                )}
                <span className="text-sm text-gray-600 ml-1">
                  {billingPeriod === 'monthly' ? '/ay' : ''}
                </span>
              </div>
              
              {billingPeriod === 'yearly' && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    {yearlyPrices.kurumsal_discount}% indirim
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    Yıllık ₺{getKurumsalYearlyTotal().toLocaleString()}
                  </div>
                </div>
              )}
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Sınırsız Danışan</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Online Randevu</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Randevu Hatırlatıcı</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Kredi Kartı & Havale Online Ödeme</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm text-gray-700">Kurumsal İsim ve Çoklu Kullanıcı</span>
              </li>
            </ul>
            
            {/* Seat Selection - Only show for Kurumsal plan */}
            {currentPlan === 'kurumsal' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kullanıcı Sayısı Seç
                </label>
                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setSelectedSeats(Math.max(1, selectedSeats - 1))}
                      disabled={selectedSeats <= 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        selectedSeats <= 1 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      −
                    </button>
                    
                    <div className="text-center min-w-[120px]">
                      <div className="text-2xl font-bold text-gray-900">{selectedSeats}</div>
                      <div className="text-sm text-gray-500">
                        {selectedSeats === 1 ? 'Kullanıcı' : 'Kullanıcı'}
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedSeats(Math.min(20, selectedSeats + 1))}
                      disabled={selectedSeats >= 20}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        selectedSeats >= 20 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Ek Maliyet</div>
                    <div className="font-semibold text-gray-900">
                      {selectedSeats > 1 ? (
                        `+₺${((selectedSeats - 1) * (billingPeriod === 'monthly' ? monthlyPrices.seatPrice : monthlyPrices.seatPrice)).toLocaleString()} ${billingPeriod === 'monthly' ? '/ay' : '/ay'}`
                      ) : (
                        'Dahil'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => handlePlanClick('kurumsal')}
              className={`w-full py-2 px-4 rounded-lg transition-colors mt-auto ${
                currentPlan === 'kurumsal'
                  ? 'bg-primary-600 text-white cursor-default'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              disabled={currentPlan === 'kurumsal'}
            >
              {currentPlan === 'kurumsal' ? 'Mevcut Plan' : 'Planı Seç'}
            </button>
          </div>
        </div>
        
        {/* Footnote */}
        <div className="mt-6 text-left">
          <p className="text-xs text-gray-500">KDV hariç fiyatlar gösterilmektedir</p>
        </div>
      </div>

      {/* Credit Card Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Kredi Kartı Bilgileri</h3>
        
        {/* Current Credit Card Display */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">**** **** **** 4532</div>
                <div className="text-sm text-gray-600">Ahmet Yılmaz • Son kullanma: 12/27</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Aktif</span>
            </div>
          </div>
        </div>

        {/* Change Payment Method Button */}
        <div className="flex justify-start">
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Ödeme Yöntemini Değiştir
          </button>
        </div>
      </div>

      {/* Notification Settings - Moved to end */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Bildirim Ayarları</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Bildirimleri</p>
              <p className="text-sm text-gray-600">Yeni siparişler ve müşteri mesajları</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 rounded" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">SMS Bildirimleri</p>
              <p className="text-sm text-gray-600">Önemli güncellemeler</p>
            </div>
            <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Pazarlama Emailları</p>
              <p className="text-sm text-gray-600">Yeni özellikler ve kampanyalar</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Rich Text Editor Component
const SimpleRichTextEditor = ({ value, onChange, placeholder, className }) => {
  const textareaRef = React.useRef(null);

  const insertFormatting = (before, after = '') => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newText);
    
    // Set cursor position after insertion
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length + after.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  return (
    <div className="border border-gray-300 rounded-lg">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={() => insertFormatting('**', '**')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Kalın (Bold)"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('*', '*')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="İtalik (Italic)"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('# ', '')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Başlık 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('## ', '')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Başlık 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('### ', '')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Başlık 3"
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('- ', '')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Liste"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('[', '](url)')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Link"
        >
          🔗
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('![alt](', ')')}
          className="px-2 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Resim"
        >
          🖼️
        </button>
      </div>
      
      {/* Text Area */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full p-3 border-none resize-none focus:outline-none ${className}`}
        rows={12}
      />
      
      {/* Preview Help */}
      <div className="p-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
        <strong>Markdown desteklenir:</strong> **kalın**, *italik*, # başlık, - liste, [link](url), ![resim](url)
      </div>
    </div>
  );
};

// Function to render markdown-like text to HTML
const renderMarkdownToHtml = (text) => {
  if (!text) return '';
  
  return text
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto;" />')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    // Line breaks
    .replace(/\n/g, '<br>');
};


// Mock blog data
const mockBlogPosts = [
  {
    id: 1,
    title: "Etkili Psikolojik Danışmanlık Teknikleri",
    content: `# Danışmanlık Süreci

Etkili psikolojik danışmanlık için temel yaklaşımlar ve teknikler vardır. Bu yazıda size en önemli noktaları paylaşacağım.

## Temel Yaklaşımlar

- **Empatik dinleme**: Danışanın duygularını anlama
- **Aktif geri bildirim**: Anlaşıldığını hissettirme
- **Soru sorma teknikleri**: Doğru soruları sorma

## Pratik Uygulamalar

Danışmanlık sürecinde kullanabileceğiniz pratik teknikler:

1. İlk görüşmede güven oluşturma
2. Hedef belirleme süreçleri
3. İlerleme takibi

**Sonuç olarak**, doğru yaklaşımlarla etkili danışmanlık hizmeti verebilirsiniz.`,
    category: "Psikoloji",
    keywords: ["psikoloji", "danışmanlık", "terapi", "gelişim"],
    status: "published",
    slug: "etkili-psikolojik-danismanlik-teknikleri",
    createdAt: "2024-06-15",
    updatedAt: "2024-06-15",
    author: "Ahmet Yılmaz"
  },
  {
    id: 2,
    title: "Beslenme ve Zihinsel Sağlık İlişkisi",
    content: `# Beslenme Alışkanlıkları

Doğru beslenme ile zihinsel sağlığımızı nasıl destekleyebiliriz? Bu konuda bilmeniz gerekenler:

## Önemli Besin Öğeleri

- **Omega-3 yağ asitleri**: Beyin sağlığı için kritik
- **B vitamini kompleksi**: Sinir sistemini destekler
- **Magnezyum**: Stres azaltımında etkili

### Günlük Öneriler

1. Bol su tüketin (günde en az 2 litre)
2. Sebze ve meyve çeşitliliğini artırın
3. İşlenmiş gıdaları azaltın

*Beslenme alışkanlıklarınızı yavaş yavaş değiştirin ve sonuçları gözlemleyin.*`,
    category: "Beslenme", 
    keywords: ["beslenme", "sağlık", "zihin", "vitamin"],
    status: "published",
    slug: "beslenme-ve-zihinsel-saglik-iliskisi",
    createdAt: "2024-06-10",
    updatedAt: "2024-06-12",
    author: "Ahmet Yılmaz"
  },
  {
    id: 3,
    title: "Dijital Çağda Kişisel Gelişim",
    content: `# Modern Yaklaşımlar

Teknolojinin gelişimi ile birlikte kişisel gelişim alanındaki yenilikler nelerdir?

## Dijital Araçlar

- **Mobil uygulamalar**: Habit tracking ve meditasyon
- **Online kurslar**: Uzaktan öğrenme imkanları
- **Sosyal medya**: Motivasyon ve topluluk desteği

### Dikkat Edilmesi Gerekenler

Teknoloji kullanırken dikkat etmeniz gereken noktalar:

1. **Ekran süresi kontrolü**
2. **Doğru kaynak seçimi**
3. **Dengeli yaklaşım**

Bu yazı henüz taslak halindedir ve yakında tamamlanacaktır.`,
    category: "Kişisel Gelişim",
    keywords: ["kişisel gelişim", "teknoloji", "dijital", "gelişim"],
    status: "draft",
    slug: "dijital-cagda-kisisel-gelisim",
    createdAt: "2024-06-05",
    updatedAt: "2024-06-05",
    author: "Ahmet Yılmaz"
  }
];

// Blog Main Component
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(mockBlogPosts);
  const [filter, setFilter] = useState('all');

  const categories = ["Psikoloji", "Kişisel Gelişim", "Spor", "Beslenme", "Teknoloji", "Business", "Tasarım", "Lifestyle"];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const deleteBlogPost = (id) => {
    if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      setBlogPosts(posts => posts.filter(post => post.id !== id));
    }
  };

  const getShareUrl = (post) => {
    return `${window.location.origin}/blog/${post.slug}`;
  };

  const copyShareUrl = (post) => {
    const url = getShareUrl(post);
    navigator.clipboard.writeText(url);
    alert('URL panoya kopyalandı!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Yönetimi</h1>
          <p className="text-gray-600 mt-1">Blog yazılarınızı oluşturun, düzenleyin ve yönetin</p>
        </div>
        <Link
          to="/dashboard/blog/create"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
        >
          <span className="mr-2">+</span>
          Yeni Blog Yazısı
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tümü ({blogPosts.length})
          </button>
          {categories.map(category => {
            const count = blogPosts.filter(post => post.category === category).length;
            return count > 0 ? (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category} ({count})
              </button>
            ) : null;
          })}
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="grid gap-6">
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz blog yazısı yok</h3>
            <p className="text-gray-600 mb-4">
              {filter === 'all' 
                ? 'İlk blog yazınızı oluşturmak için "Yeni Blog Yazısı" butonuna tıklayın.' 
                : `${filter} kategorisinde henüz yazı bulunmuyor.`
              }
            </p>
            <Link
              to="/dashboard/blog/create"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Yeni Blog Yazısı Oluştur
            </Link>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status === 'published' ? 'Yayınlandı' : 'Taslak'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded mr-2">{post.category}</span>
                    <span>Oluşturulma: {new Date(post.createdAt).toLocaleDateString('tr-TR')}</span>
                    {post.updatedAt !== post.createdAt && (
                      <span className="ml-2">• Güncelleme: {new Date(post.updatedAt).toLocaleDateString('tr-TR')}</span>
                    )}
                  </div>
                  <div
                    className="text-gray-600 text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(post.content.substring(0, 150) + '...') }}
                  />
                  <div className="mt-3">
                    <div className="text-xs text-gray-500">
                      <strong>Anahtar Kelimeler:</strong> {post.keywords.join(', ')}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0 sm:ml-4">
                  {post.status === 'published' && (
                    <button
                      onClick={() => copyShareUrl(post)}
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                      title="URL'yi Kopyala"
                    >
                      🔗 Paylaş
                    </button>
                  )}
                  <Link
                    to={`/dashboard/blog/edit/${post.id}`}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    ✏️ Düzenle
                  </Link>
                  <button
                    onClick={() => deleteBlogPost(post.id)}
                    className="inline-flex items-center px-3 py-1.5 border border-red-300 rounded-md shadow-sm text-xs font-medium text-red-700 bg-white hover:bg-red-50"
                  >
                    🗑️ Sil
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Blog Create Component
const BlogCreate = () => {
  const navigate = useNavigate();
  const categories = ["Psikoloji", "Kişisel Gelişim", "Spor", "Beslenme", "Teknoloji", "Business", "Tasarım", "Lifestyle"];
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    keywords: '',
    status: 'draft'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.category) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }

    const newPost = {
      id: Date.now(),
      title: formData.title,
      content: formData.content,
      category: formData.category,
      keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
      status: formData.status,
      slug: generateSlug(formData.title),
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      author: "Ahmet Yılmaz"
    };

    console.log('Yeni blog yazısı oluşturuldu:', newPost);
    alert('Blog yazısı başarıyla oluşturuldu!');
    navigate('/dashboard/blog');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/dashboard/blog"
          className="text-gray-500 hover:text-gray-700"
        >
          ← Geri
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Yeni Blog Yazısı</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Bilgiler</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yazı Başlığı *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Blog yazısının başlığını girin..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Kategori seçin</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durum
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="draft">Taslak</option>
                  <option value="published">Yayınla</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anahtar Kelimeler
              </label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="Virgülle ayırarak anahtar kelimeleri girin (örn: psikoloji, sağlık, gelişim)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">İçerik *</h3>
          <SimpleRichTextEditor
            value={formData.content}
            onChange={handleContentChange}
            placeholder="Blog yazısının içeriğini buraya yazın... Markdown formatını kullanabilirsiniz."
            className="min-h-[300px]"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-16">
          <Link
            to="/dashboard/blog"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {formData.status === 'published' ? 'Yayınla' : 'Taslak Olarak Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
};

// Blog Edit Component
const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const categories = ["Psikoloji", "Kişisel Gelişim", "Spor", "Beslenme", "Teknoloji", "Business", "Tasarım", "Lifestyle"];
  
  // Find the blog post by ID (in real app, this would be an API call)
  const existingPost = mockBlogPosts.find(post => post.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    title: existingPost?.title || '',
    content: existingPost?.content || '',
    category: existingPost?.category || '',
    keywords: existingPost?.keywords?.join(', ') || '',
    status: existingPost?.status || 'draft'
  });

  if (!existingPost) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard/blog"
            className="text-gray-500 hover:text-gray-700"
          >
            ← Geri
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Blog Yazısı Bulunamadı</h1>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
          <p className="text-gray-600">Düzenlemek istediğiniz blog yazısı bulunamadı.</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.category) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }

    console.log('Blog yazısı güncellendi:', {
      ...existingPost,
      ...formData,
      keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
      updatedAt: new Date().toISOString().split('T')[0]
    });
    
    alert('Blog yazısı başarıyla güncellendi!');
    navigate('/dashboard/blog');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/dashboard/blog"
          className="text-gray-500 hover:text-gray-700"
        >
          ← Geri
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Blog Yazısını Düzenle</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Bilgiler</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yazı Başlığı *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Blog yazısının başlığını girin..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Kategori seçin</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durum
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="draft">Taslak</option>
                  <option value="published">Yayınla</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anahtar Kelimeler
              </label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="Virgülle ayırarak anahtar kelimeleri girin (örn: psikoloji, sağlık, gelişim)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">İçerik *</h3>
          <SimpleRichTextEditor
            value={formData.content}
            onChange={handleContentChange}
            placeholder="Blog yazısının içeriğini buraya yazın... Markdown formatını kullanabilirsiniz."
            className="min-h-[300px]"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-16">
          <Link
            to="/dashboard/blog"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {formData.status === 'published' ? 'Güncelle ve Yayınla' : 'Taslak Olarak Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
};

// Public Blog View Component (for published posts)
export const BlogPublicView = () => {
  const { slug } = useParams();
  
  // Find blog post by slug
  const post = mockBlogPosts.find(p => p.slug === slug && p.status === 'published');
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog yazısı bulunamadı</h1>
            <p className="text-gray-600">Aradığınız blog yazısı bulunamadı veya yayından kaldırılmış.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 sm:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            {post.keywords && post.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="px-6 pb-8 sm:px-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(post.content) }}
            />
          </div>
          
          {/* Footer */}
          <div className="px-6 py-4 sm:px-8 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                {post.updatedAt && post.updatedAt !== post.createdAt && (
                  <span>
                    Son güncelleme: {new Date(post.updatedAt).toLocaleDateString('tr-TR')}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('URL panoya kopyalandı!');
                  }}
                  className="inline-flex items-center text-gray-600 hover:text-primary-600"
                >
                  🔗 Paylaş
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

// Mock Forms Data
const mockForms = [
  {
    id: 1,
    title: "Kişilik Değerlendirme Testi",
    description: "Danışanların kişilik özelliklerini değerlendirmek için hazırlanmış kapsamlı test.",
    status: "active",
    participantCount: 127,
    createdAt: "2024-06-15",
    updatedAt: "2024-06-20",
    fields: [
      {
        id: 1,
        type: "text",
        label: "Adınız ve Soyadınız",
        required: true,
        placeholder: "Tam adınızı yazınız"
      },
      {
        id: 2,
        type: "email",
        label: "E-posta Adresiniz",
        required: true,
        placeholder: "ornek@email.com"
      },
      {
        id: 3,
        type: "single-choice",
        label: "Yaş aralığınız nedir?",
        required: true,
        options: ["18-25", "26-35", "36-45", "46-55", "55+"]
      },
      {
        id: 4,
        type: "multiple-choice",
        label: "Hangi alanlarda gelişim göstermek istiyorsunuz? (Birden fazla seçebilirsiniz)",
        required: false,
        options: ["İletişim", "Liderlik", "Stres Yönetimi", "Zaman Yönetimi", "Duygusal Zeka", "Öz Güven"]
      },
      {
        id: 5,
        type: "ranking",
        label: "Aşağıdaki değerleri kendiniz için önem sırasına göre sıralayınız (1 en önemli)",
        required: true,
        options: ["Aile", "Kariyer", "Sağlık", "Para", "Mutluluk"]
      }
    ]
  },
  {
    id: 2,
    title: "Müşteri Memnuniyet Anketi",
    description: "Hizmet kalitemizi değerlendirmek için hazırlanmış anket formu.",
    status: "active",
    participantCount: 89,
    createdAt: "2024-06-10",
    updatedAt: "2024-06-18",
    fields: [
      {
        id: 1,
        type: "text",
        label: "Adınız (İsteğe bağlı)",
        required: false,
        placeholder: "Adınızı yazabilirsiniz"
      },
      {
        id: 2,
        type: "single-choice",
        label: "Genel memnuniyet seviyeniz nedir?",
        required: true,
        options: ["Çok Memnun", "Memnun", "Kararsız", "Memnun Değil", "Hiç Memnun Değil"]
      },
      {
        id: 3,
        type: "multiple-choice",
        label: "Hangi hizmetlerimizi kullandınız?",
        required: true,
        options: ["Bireysel Danışmanlık", "Grup Terapisi", "Online Seanslar", "Workshoplar"]
      },
      {
        id: 4,
        type: "file-upload",
        label: "Varsa ek belge veya görüşlerinizi yükleyebilirsiniz",
        required: false,
        acceptedTypes: ["pdf", "doc", "docx", "jpg", "png"]
      }
    ]
  },
  {
    id: 3,
    title: "Ön Değerlendirme Formu",
    description: "İlk görüşme öncesi hazırlık amacıyla doldurulacak form.",
    status: "draft",
    participantCount: 0,
    createdAt: "2024-06-25",
    updatedAt: "2024-06-25",
    fields: [
      {
        id: 1,
        type: "text",
        label: "Ad Soyad",
        required: true,
        placeholder: "Tam adınızı giriniz"
      },
      {
        id: 2,
        type: "phone",
        label: "Telefon Numaranız",
        required: true,
        placeholder: "+90 555 123 45 67"
      },
      {
        id: 3,
        type: "email",
        label: "E-posta Adresiniz",
        required: true,
        placeholder: "email@example.com"
      },
      {
        id: 4,
        type: "single-choice",
        label: "Daha önce psikolojik destek aldınız mı?",
        required: true,
        options: ["Evet", "Hayır", "Kısmen"]
      }
    ]
  }
];

// Mock Form Responses Data
const mockFormResponses = {
  1: [
    {
      id: 1,
      participantName: "Ayşe Demir",
      participantEmail: "ayse.demir@email.com",
      submittedAt: "2024-06-20T14:30:00",
      responses: {
        1: "Ayşe Demir",
        2: "ayse.demir@email.com",
        3: "26-35",
        4: ["İletişim", "Stres Yönetimi", "Öz Güven"],
        5: ["Mutluluk", "Aile", "Sağlık", "Kariyer", "Para"]
      }
    },
    {
      id: 2,
      participantName: "Mehmet Kaya",
      participantEmail: "mehmet.kaya@email.com",
      submittedAt: "2024-06-19T16:45:00",
      responses: {
        1: "Mehmet Kaya",
        2: "mehmet.kaya@email.com",
        3: "36-45",
        4: ["Liderlik", "Zaman Yönetimi"],
        5: ["Kariyer", "Para", "Sağlık", "Aile", "Mutluluk"]
      }
    },
    {
      id: 3,
      participantName: "Zeynep Yılmaz",
      participantEmail: "zeynep.yilmaz@email.com",
      submittedAt: "2024-06-18T11:20:00",
      responses: {
        1: "Zeynep Yılmaz",
        2: "zeynep.yilmaz@email.com",
        3: "18-25",
        4: ["Duygusal Zeka", "İletişim", "Öz Güven"],
        5: ["Aile", "Mutluluk", "Sağlık", "Kariyer", "Para"]
      }
    }
  ],
  2: [
    {
      id: 1,
      participantName: "Ali Özkan",
      participantEmail: "ali.ozkan@email.com",
      submittedAt: "2024-06-18T10:15:00",
      responses: {
        1: "Ali Özkan",
        2: "Çok Memnun",
        3: ["Bireysel Danışmanlık", "Online Seanslar"],
        4: null
      }
    },
    {
      id: 2,
      participantName: "Fatma Çelik",
      participantEmail: "fatma.celik@email.com",
      submittedAt: "2024-06-17T15:30:00",
      responses: {
        1: "",
        2: "Memnun",
        3: ["Grup Terapisi", "Workshoplar"],
        4: "feedback_document.pdf"
      }
    }
  ]
};

// Forms Main Component
const Forms = () => {
  const [forms, setForms] = useState(mockForms);
  const [filter, setFilter] = useState('all');

  const filteredForms = filter === 'all' 
    ? forms 
    : forms.filter(form => form.status === filter);

  const deleteForm = (id) => {
    if (window.confirm('Bu formu silmek istediğinizden emin misiniz?')) {
      setForms(prevForms => prevForms.filter(form => form.id !== id));
    }
  };

  const duplicateForm = (form) => {
    const newForm = {
      ...form,
      id: Date.now(),
      title: `${form.title} (Kopya)`,
      participantCount: 0,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setForms(prevForms => [...prevForms, newForm]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testler ve Formlar</h1>
          <p className="text-gray-600 mt-1">Form ve anketlerinizi oluşturun, yönetin ve sonuçları analiz edin</p>
        </div>
        <Link
          to="/dashboard/forms/create"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
        >
          <span className="mr-2">+</span>
          Yeni Form Oluştur
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">📋</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Toplam Form</p>
              <p className="text-2xl font-semibold text-gray-900">{forms.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm font-semibold">✅</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Aktif Form</p>
              <p className="text-2xl font-semibold text-gray-900">{forms.filter(f => f.status === 'active').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-semibold">📝</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Taslak</p>
              <p className="text-2xl font-semibold text-gray-900">{forms.filter(f => f.status === 'draft').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm font-semibold">👥</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Toplam Katılımcı</p>
              <p className="text-2xl font-semibold text-gray-900">{forms.reduce((sum, form) => sum + form.participantCount, 0)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tümü ({forms.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'active' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Aktif ({forms.filter(f => f.status === 'active').length})
          </button>
          <button
            onClick={() => setFilter('draft')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'draft' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Taslak ({forms.filter(f => f.status === 'draft').length})
          </button>
        </div>
      </div>

      {/* Forms List */}
      <div className="grid gap-6">
        {filteredForms.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz form yok</h3>
            <p className="text-gray-600 mb-4">
              İlk formunuzu oluşturmak için "Yeni Form Oluştur" butonuna tıklayın.
            </p>
            <Link
              to="/dashboard/forms/create"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Yeni Form Oluştur
            </Link>
          </div>
        ) : (
          filteredForms.map(form => (
            <div key={form.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      form.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {form.status === 'active' ? 'Aktif' : 'Taslak'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{form.description}</p>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3">
                    <span className="mr-4">📊 {form.participantCount} katılımcı</span>
                    <span className="mr-4">❓ {form.fields.length} soru</span>
                    <span>📅 Oluşturulma: {new Date(form.createdAt).toLocaleDateString('tr-TR')}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {form.fields.slice(0, 3).map(field => (
                      <span key={field.id} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        {field.type === 'text' && '📝 Metin'}
                        {field.type === 'email' && '📧 E-posta'}
                        {field.type === 'phone' && '📞 Telefon'}
                        {field.type === 'single-choice' && '⚪ Tek Seçim'}
                        {field.type === 'multiple-choice' && '☑️ Çoklu Seçim'}
                        {field.type === 'ranking' && '🔢 Sıralama'}
                        {field.type === 'file-upload' && '📎 Dosya'}
                      </span>
                    ))}
                    {form.fields.length > 3 && (
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        +{form.fields.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0 sm:ml-4">
                  {form.participantCount > 0 && (
                    <Link
                      to={`/dashboard/forms/${form.id}/responses`}
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                      title="Yanıtları Görüntüle"
                    >
                      📊 Yanıtlar ({form.participantCount})
                    </Link>
                  )}
                  
                  <button
                    onClick={() => duplicateForm(form)}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                    title="Kopyala"
                  >
                    📋 Kopyala
                  </button>
                  
                  <Link
                    to={`/dashboard/forms/edit/${form.id}`}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    ✏️ Düzenle
                  </Link>
                  
                  <button
                    onClick={() => deleteForm(form.id)}
                    className="inline-flex items-center px-3 py-1.5 border border-red-300 rounded-md shadow-sm text-xs font-medium text-red-700 bg-white hover:bg-red-50"
                  >
                    🗑️ Sil
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Form Create Component
const FormCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'draft'
  });
  const [fields, setFields] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const fieldTypes = [
    { type: 'text', label: 'Metin', icon: '📝', description: 'Kısa metin girişi' },
    { type: 'email', label: 'E-posta', icon: '📧', description: 'E-posta adresi girişi' },
    { type: 'phone', label: 'Telefon', icon: '📞', description: 'Telefon numarası girişi' },
    { type: 'single-choice', label: 'Tek Seçim', icon: '⚪', description: 'Seçeneklerden birini seçme' },
    { type: 'multiple-choice', label: 'Çoklu Seçim', icon: '☑️', description: 'Birden fazla seçenek seçme' },
    { type: 'ranking', label: 'Sıralama', icon: '🔢', description: 'Seçenekleri sıralama' },
    { type: 'file-upload', label: 'Dosya Yükleme', icon: '📎', description: 'Dosya yükleme alanı' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addField = (fieldType) => {
    const newField = {
      id: Date.now(),
      type: fieldType.type,
      label: `${fieldType.label} Sorusu`,
      required: false,
      placeholder: '',
      options: fieldType.type.includes('choice') || fieldType.type === 'ranking' ? ['Seçenek 1', 'Seçenek 2'] : undefined
    };
    setFields(prev => [...prev, newField]);
  };

  const updateField = (fieldId, updates) => {
    setFields(prev => prev.map(field => 
      field.id === fieldId ? { ...field, ...updates } : field
    ));
  };

  const removeField = (fieldId) => {
    setFields(prev => prev.filter(field => field.id !== fieldId));
  };

  const moveField = (dragIndex, hoverIndex) => {
    const draggedField = fields[dragIndex];
    const newFields = [...fields];
    newFields.splice(dragIndex, 1);
    newFields.splice(hoverIndex, 0, draggedField);
    setFields(newFields);
  };

  const addOption = (fieldId) => {
    const field = fields.find(f => f.id === fieldId);
    const newOptionNumber = field.options.length + 1;
    updateField(fieldId, {
      options: [...field.options, `Seçenek ${newOptionNumber}`]
    });
  };

  const updateOption = (fieldId, optionIndex, value) => {
    const field = fields.find(f => f.id === fieldId);
    const newOptions = [...field.options];
    newOptions[optionIndex] = value;
    updateField(fieldId, { options: newOptions });
  };

  const removeOption = (fieldId, optionIndex) => {
    const field = fields.find(f => f.id === fieldId);
    const newOptions = field.options.filter((_, index) => index !== optionIndex);
    updateField(fieldId, { options: newOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || fields.length === 0) {
      alert('Lütfen form başlığını girin ve en az bir soru ekleyin.');
      return;
    }

    const newForm = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: formData.status,
      participantCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      fields: fields
    };

    console.log('Yeni form oluşturuldu:', newForm);
    alert('Form başarıyla oluşturuldu!');
    navigate('/dashboard/forms');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/dashboard/forms"
          className="text-gray-500 hover:text-gray-700"
        >
          ← Geri
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Yeni Form Oluştur</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Field Types Palette */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 sticky top-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Soru Türleri</h3>
            <div className="space-y-2">
              {fieldTypes.map(fieldType => (
                <button
                  key={fieldType.type}
                  onClick={() => addField(fieldType)}
                  className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{fieldType.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{fieldType.label}</div>
                      <div className="text-xs text-gray-500">{fieldType.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Builder */}
        <div className="lg:col-span-3 space-y-6">
          {/* Form Basic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Form Bilgileri</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Form Başlığı *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Form başlığını girin..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Açıklama
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Form açıklamasını girin..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durum
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="draft">Taslak</option>
                  <option value="active">Aktif</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {fields.length === 0 ? (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                <div className="text-gray-400 text-6xl mb-4">📋</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz soru eklenmedi</h3>
                <p className="text-gray-600">
                  Sol taraftaki soru türlerinden birini seçerek formunuza soru eklemeye başlayın.
                </p>
              </div>
            ) : (
              fields.map((field, index) => (
                <div key={field.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {fieldTypes.find(ft => ft.type === field.type)?.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {fieldTypes.find(ft => ft.type === field.type)?.label}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeField(field.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Soru Metni
                      </label>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateField(field.id, { label: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    {(field.type === 'text' || field.type === 'email' || field.type === 'phone') && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Placeholder
                        </label>
                        <input
                          type="text"
                          value={field.placeholder || ''}
                          onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    {(field.type === 'single-choice' || field.type === 'multiple-choice' || field.type === 'ranking') && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Seçenekler
                        </label>
                        <div className="space-y-2">
                          {field.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <input
                                type="text"
                                value={option}
                                onChange={(e) => updateOption(field.id, optionIndex, e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                              {field.options.length > 2 && (
                                <button
                                  onClick={() => removeOption(field.id, optionIndex)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            onClick={() => addOption(field.id)}
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                          >
                            + Seçenek Ekle
                          </button>
                        </div>
                      </div>
                    )}

                    {field.type === 'file-upload' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kabul Edilen Dosya Türleri
                        </label>
                        <input
                          type="text"
                          value={field.acceptedTypes?.join(', ') || 'pdf, doc, docx, jpg, png'}
                          onChange={(e) => updateField(field.id, { 
                            acceptedTypes: e.target.value.split(',').map(type => type.trim()) 
                          })}
                          placeholder="pdf, doc, docx, jpg, png"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`required-${field.id}`}
                        checked={field.required}
                        onChange={(e) => updateField(field.id, { required: e.target.checked })}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`required-${field.id}`} className="ml-2 block text-sm text-gray-700">
                        Zorunlu alan
                      </label>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/dashboard/forms"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </Link>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {formData.status === 'active' ? 'Oluştur ve Yayınla' : 'Taslak Olarak Kaydet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Edit Component
const FormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the form by ID (in real app, this would be an API call)
  const existingForm = mockForms.find(form => form.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    title: existingForm?.title || '',
    description: existingForm?.description || '',
    status: existingForm?.status || 'draft'
  });
  const [fields, setFields] = useState(existingForm?.fields || []);

  const fieldTypes = [
    { type: 'text', label: 'Metin', icon: '📝', description: 'Kısa metin girişi' },
    { type: 'email', label: 'E-posta', icon: '📧', description: 'E-posta adresi girişi' },
    { type: 'phone', label: 'Telefon', icon: '📞', description: 'Telefon numarası girişi' },
    { type: 'single-choice', label: 'Tek Seçim', icon: '⚪', description: 'Seçeneklerden birini seçme' },
    { type: 'multiple-choice', label: 'Çoklu Seçim', icon: '☑️', description: 'Birden fazla seçenek seçme' },
    { type: 'ranking', label: 'Sıralama', icon: '🔢', description: 'Seçenekleri sıralama' },
    { type: 'file-upload', label: 'Dosya Yükleme', icon: '📎', description: 'Dosya yükleme alanı' }
  ];

  if (!existingForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard/forms"
            className="text-gray-500 hover:text-gray-700"
          >
            ← Geri
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Form Bulunamadı</h1>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
          <p className="text-gray-600">Düzenlemek istediğiniz form bulunamadı.</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addField = (fieldType) => {
    const newField = {
      id: Date.now(),
      type: fieldType.type,
      label: `${fieldType.label} Sorusu`,
      required: false,
      placeholder: '',
      options: fieldType.type.includes('choice') || fieldType.type === 'ranking' ? ['Seçenek 1', 'Seçenek 2'] : undefined
    };
    setFields(prev => [...prev, newField]);
  };

  const updateField = (fieldId, updates) => {
    setFields(prev => prev.map(field => 
      field.id === fieldId ? { ...field, ...updates } : field
    ));
  };

  const removeField = (fieldId) => {
    setFields(prev => prev.filter(field => field.id !== fieldId));
  };

  const addOption = (fieldId) => {
    const field = fields.find(f => f.id === fieldId);
    const newOptionNumber = field.options.length + 1;
    updateField(fieldId, {
      options: [...field.options, `Seçenek ${newOptionNumber}`]
    });
  };

  const updateOption = (fieldId, optionIndex, value) => {
    const field = fields.find(f => f.id === fieldId);
    const newOptions = [...field.options];
    newOptions[optionIndex] = value;
    updateField(fieldId, { options: newOptions });
  };

  const removeOption = (fieldId, optionIndex) => {
    const field = fields.find(f => f.id === fieldId);
    const newOptions = field.options.filter((_, index) => index !== optionIndex);
    updateField(fieldId, { options: newOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || fields.length === 0) {
      alert('Lütfen form başlığını girin ve en az bir soru ekleyin.');
      return;
    }

    console.log('Form güncellendi:', {
      ...existingForm,
      ...formData,
      fields: fields,
      updatedAt: new Date().toISOString().split('T')[0]
    });
    
    alert('Form başarıyla güncellendi!');
    navigate('/dashboard/forms');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/dashboard/forms"
          className="text-gray-500 hover:text-gray-700"
        >
          ← Geri
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Formu Düzenle</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Field Types Palette */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 sticky top-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Soru Türleri</h3>
            <div className="space-y-2">
              {fieldTypes.map(fieldType => (
                <button
                  key={fieldType.type}
                  onClick={() => addField(fieldType)}
                  className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{fieldType.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{fieldType.label}</div>
                      <div className="text-xs text-gray-500">{fieldType.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Builder */}
        <div className="lg:col-span-3 space-y-6">
          {/* Form Basic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Form Bilgileri</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Form Başlığı *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Form başlığını girin..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Açıklama
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Form açıklamasını girin..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durum
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="draft">Taslak</option>
                  <option value="active">Aktif</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {fields.length === 0 ? (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                <div className="text-gray-400 text-6xl mb-4">📋</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz soru eklenmedi</h3>
                <p className="text-gray-600">
                  Sol taraftaki soru türlerinden birini seçerek formunuza soru eklemeye başlayın.
                </p>
              </div>
            ) : (
              fields.map((field, index) => (
                <div key={field.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {fieldTypes.find(ft => ft.type === field.type)?.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {fieldTypes.find(ft => ft.type === field.type)?.label}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeField(field.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Soru Metni
                      </label>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateField(field.id, { label: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    {(field.type === 'text' || field.type === 'email' || field.type === 'phone') && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Placeholder
                        </label>
                        <input
                          type="text"
                          value={field.placeholder || ''}
                          onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    {(field.type === 'single-choice' || field.type === 'multiple-choice' || field.type === 'ranking') && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Seçenekler
                        </label>
                        <div className="space-y-2">
                          {field.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <input
                                type="text"
                                value={option}
                                onChange={(e) => updateOption(field.id, optionIndex, e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                              {field.options.length > 2 && (
                                <button
                                  onClick={() => removeOption(field.id, optionIndex)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            onClick={() => addOption(field.id)}
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                          >
                            + Seçenek Ekle
                          </button>
                        </div>
                      </div>
                    )}

                    {field.type === 'file-upload' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kabul Edilen Dosya Türleri
                        </label>
                        <input
                          type="text"
                          value={field.acceptedTypes?.join(', ') || 'pdf, doc, docx, jpg, png'}
                          onChange={(e) => updateField(field.id, { 
                            acceptedTypes: e.target.value.split(',').map(type => type.trim()) 
                          })}
                          placeholder="pdf, doc, docx, jpg, png"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`required-${field.id}`}
                        checked={field.required}
                        onChange={(e) => updateField(field.id, { required: e.target.checked })}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`required-${field.id}`} className="ml-2 block text-sm text-gray-700">
                        Zorunlu alan
                      </label>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/dashboard/forms"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </Link>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {formData.status === 'active' ? 'Güncelle ve Yayınla' : 'Taslak Olarak Kaydet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Responses Component
const FormResponses = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const form = mockForms.find(f => f.id === parseInt(id));
  const responses = mockFormResponses[id] || [];
  
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  if (!form) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard/forms"
            className="text-gray-500 hover:text-gray-700"
          >
            ← Geri
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Form Bulunamadı</h1>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
          <p className="text-gray-600">Yanıtları görüntülemek istediğiniz form bulunamadı.</p>
        </div>
      </div>
    );
  }

  const filteredResponses = responses.filter(response =>
    response.participantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    response.participantEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedResponses = [...filteredResponses].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.submittedAt) - new Date(a.submittedAt);
    } else if (sortBy === 'oldest') {
      return new Date(a.submittedAt) - new Date(b.submittedAt);
    } else if (sortBy === 'name') {
      return a.participantName.localeCompare(b.participantName);
    }
    return 0;
  });

  const renderResponseValue = (field, value) => {
    if (!value) return <span className="text-gray-400">Yanıt verilmedi</span>;
    
    if (field.type === 'multiple-choice') {
      return Array.isArray(value) ? value.join(', ') : value;
    }
    
    if (field.type === 'ranking') {
      return Array.isArray(value) ? value.map((item, index) => `${index + 1}. ${item}`).join(', ') : value;
    }
    
    if (field.type === 'file-upload') {
      return value ? (
        <span className="text-primary-600">📎 {value}</span>
      ) : (
        <span className="text-gray-400">Dosya yüklenmedi</span>
      );
    }
    
    return value;
  };

  const exportToCSV = () => {
    const headers = ['Katılımcı Adı', 'E-posta', 'Gönderim Tarihi', ...form.fields.map(f => f.label)];
    const csvData = [
      headers,
      ...responses.map(response => [
        response.participantName,
        response.participantEmail,
        new Date(response.submittedAt).toLocaleDateString('tr-TR'),
        ...form.fields.map(field => {
          const value = response.responses[field.id];
          if (Array.isArray(value)) {
            return value.join('; ');
          }
          return value || '';
        })
      ])
    ];
    
    const csvContent = csvData.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${form.title.replace(/[^a-zA-Z0-9]/g, '_')}_yanitlar.csv`;
    link.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard/forms"
            className="text-gray-500 hover:text-gray-700"
          >
            ← Geri
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{form.title} - Yanıtlar</h1>
            <p className="text-gray-600 mt-1">{responses.length} yanıt alındı</p>
          </div>
        </div>
        
        {responses.length > 0 && (
          <button
            onClick={exportToCSV}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            📊 CSV İndir
          </button>
        )}
      </div>

      {responses.length === 0 ? (
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
          <div className="text-gray-400 text-6xl mb-4">📊</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz yanıt yok</h3>
          <p className="text-gray-600">Bu form için henüz yanıt alınmamış.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Filters and Search */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Katılımcı adı veya e-posta ile ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="newest">En Yeni</option>
                  <option value="oldest">En Eski</option>
                  <option value="name">İsme Göre</option>
                </select>
              </div>
            </div>
          </div>

          {/* Responses List */}
          <div className="space-y-4">
            {sortedResponses.map(response => (
              <div key={response.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{response.participantName}</h3>
                    <p className="text-gray-600">{response.participantEmail}</p>
                    <p className="text-sm text-gray-500">
                      Gönderilme: {new Date(response.submittedAt).toLocaleDateString('tr-TR')} 
                      {' '}{new Date(response.submittedAt).toLocaleTimeString('tr-TR')}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedResponse(selectedResponse === response.id ? null : response.id)}
                    className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    {selectedResponse === response.id ? 'Gizle' : 'Detayları Göster'}
                  </button>
                </div>
                
                {selectedResponse === response.id && (
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-md font-medium text-gray-900 mb-3">Yanıtlar:</h4>
                    <div className="space-y-4">
                      {form.fields.map(field => (
                        <div key={field.id} className="border-l-4 border-primary-200 pl-4">
                          <div className="text-sm font-medium text-gray-900 mb-1">{field.label}</div>
                          <div className="text-sm text-gray-600">
                            {renderResponseValue(field, response.responses[field.id])}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// Dashboard Component
// Export blog components
export { Blog, BlogCreate, BlogEdit, Forms, FormCreate, FormEdit, FormResponses };
