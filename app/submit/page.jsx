'use client'
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Submit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    description: '',
    material: 'pla',
    color: '',
    quantity: 1,
    resolution: 'standard',
    notes: ''
  });
  
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const dropRef = useRef(null);
  
  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.projectName) newErrors.projectName = 'Project name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!file) newErrors.file = 'Please upload a 3D model file';
    return newErrors;
  };
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };
  
  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };
  
  // Drag and drop handlers
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.remove('ring-4', 'ring-primary/60');
    const selectedFile = e.dataTransfer.files[0];
    handleFile(selectedFile);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.add('ring-4', 'ring-primary/60');
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.remove('ring-4', 'ring-primary/60');
  };
  
  // File validation
  const handleFile = (selectedFile) => {
    if (selectedFile) {
      const validTypes = ['model/stl', 'model/obj', 'model/gltf-binary', 'model/gltf+json', 'application/octet-stream'];
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      const valid3DExtensions = ['stl', 'obj', 'gltf', 'glb', '3mf', 'fbx', 'step', 'stp'];
      if (validTypes.includes(selectedFile.type) || valid3DExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setFileError('');
        setErrors(prev => ({ ...prev, file: undefined }));
      } else {
        setFile(null);
        setFileError('Please upload a valid 3D model file (STL, OBJ, GLTF, GLB, 3MF, FBX, STEP, STP)');
        setErrors(prev => ({ ...prev, file: 'Please upload a valid 3D model file' }));
      }
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setIsSubmitting(true);
    setProgress(0);
    // Simulate upload progress
    let prog = 0;
    const interval = setInterval(() => {
      prog += Math.random() * 20 + 10;
      setProgress(Math.min(prog, 100));
      if (prog >= 100) {
        clearInterval(interval);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
          setProgress(100);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectName: '',
          description: '',
          material: 'pla',
          color: '',
          quantity: 1,
          resolution: 'standard',
          notes: ''
        });
        setFile(null);
        setSubmitSuccess(false);
            setProgress(0);
            if (fileInputRef.current) fileInputRef.current.value = '';
          }, 5000);
        }, 800);
      }
    }, 300);
  };
  
  return (
    <div className="min-h-screen bg-dark-200 text-white pt-24 pb-20 font-['NeueMontreal']">
      {/* Header with 3D elements and How it Works */}
      <div className="container mx-auto px-6 mb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 bg-dark-300 rounded-full py-1 px-3 mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium font-['NeueMontreal']">3D Printing Service</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative text-primary font-['MonumentExtended'] drop-shadow-xl tracking-tight leading-tight">Model Gateway</h1>
          <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">Upload your 3D models and we&apos;ll bring them to life with our professional 3D printing services. Fill out the form below with your project details and specifications.</p>
        </div>
        {/* How it works strip */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 bg-dark-100/80 rounded-xl shadow-lg p-6 border border-dark-300 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">1</span>
            <span className="font-semibold text-lg font-['NeueMontreal']">Fill out the form</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">2</span>
            <span className="font-semibold text-lg font-['NeueMontreal']">Upload your 3D file</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">3</span>
            <span className="font-semibold text-lg font-['NeueMontreal']">We review & contact you</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-dark-100 p-8 rounded-3xl shadow-2xl border border-dark-300 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary font-['MonumentExtended'] tracking-tight leading-tight">Project Details</h2>
              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center animate-fade-in-up">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h3 className="text-2xl font-bold mb-2 font-['MonumentExtended']">Submission Successful!</h3>
                  <p className="text-gray-300 mb-4 font-['NeueMontreal']">We&apos;ve received your 3D printing request and will review it shortly.</p>
                  <p className="text-gray-400 font-['NeueMontreal']">You&apos;ll receive a confirmation email with next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary font-['MonumentExtended']">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Your Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full bg-dark-200 border ${errors.name ? 'border-red-500' : 'border-dark-300'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Your Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full bg-dark-200 border ${errors.email ? 'border-red-500' : 'border-dark-300'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-200 border border-dark-300 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10" 
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  {/* Project Information */}
                  <div className="space-y-6 pt-4 border-t border-dark-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary font-['MonumentExtended']">Project Information</h3>
                    <div>
                      <label htmlFor="projectName" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Project Name *</label>
                      <input 
                        type="text" 
                        id="projectName" 
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        required
                        className={`w-full bg-dark-200 border ${errors.projectName ? 'border-red-500' : 'border-dark-300'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                        placeholder="My Awesome 3D Project"
                      />
                      {errors.projectName && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.projectName}</p>}
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Project Description *</label>
                      <textarea 
                        id="description" 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`w-full bg-dark-200 border ${errors.description ? 'border-red-500' : 'border-dark-300'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10 resize-none`}
                        placeholder="Describe your project, requirements, and goals..."
                      ></textarea>
                      {errors.description && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.description}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="material" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Material</label>
                        <select 
                          id="material" 
                          name="material"
                          value={formData.material}
                          onChange={handleChange}
                          className="w-full bg-dark-200 border border-dark-300 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                        >
                          <option value="pla">PLA</option>
                          <option value="abs">ABS</option>
                          <option value="petg">PETG</option>
                          <option value="resin">Resin</option>
                          <option value="nylon">Nylon</option>
                          <option value="metal">Metal</option>
                          <option value="composite">Composite</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="color" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Color</label>
                        <input 
                          type="text" 
                          id="color" 
                          name="color"
                          value={formData.color}
                          onChange={handleChange}
                          className="w-full bg-dark-200 border border-dark-300 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                          placeholder="e.g. Black, Red, Silver"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Quantity</label>
                        <input 
                          type="number" 
                          id="quantity" 
                          name="quantity"
                          min={1}
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full bg-dark-200 border border-dark-300 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                        />
                      </div>
                      </div>
                      <div>
                      <label htmlFor="resolution" className="block text-base font-semibold text-gray-300 mb-2 font-['NeueMontreal']">Print Resolution</label>
                        <select 
                          id="resolution" 
                          name="resolution"
                          value={formData.resolution}
                          onChange={handleChange}
                        className="w-full bg-dark-200 border border-dark-300 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                      >
                        <option value="standard">Standard (0.2mm)</option>
                        <option value="high">High (0.1mm)</option>
                        <option value="ultra">Ultra (0.05mm)</option>
                        </select>
                      </div>
                  </div>
                  {/* File Upload Section */}
                  <div className="space-y-6 pt-4 border-t border-dark-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary font-['MonumentExtended']">Upload 3D Model</h3>
                    <div
                      ref={dropRef}
                      className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 transition-all duration-300 bg-dark-200 hover:bg-dark-100/80 cursor-pointer ${errors.file ? 'border-red-500' : 'border-primary/40'}`}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      tabIndex={0}
                      aria-label="Upload 3D model file"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".stl,.obj,.gltf,.glb,.3mf,.fbx,.step,.stp"
                        className="hidden"
                        onChange={handleFileChange}
                        aria-label="Upload 3D model file"
                      />
                      <svg className="w-12 h-12 text-primary mb-4 animate-fade-in" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      <p className="text-lg font-semibold mb-2 font-['NeueMontreal']">Drag & drop or click to upload</p>
                      <p className="text-gray-400 text-sm mb-2 font-['NeueMontreal']">Accepted: STL, OBJ, GLTF, GLB, 3MF, FBX, STEP, STP</p>
                      {file && (
                        <div className="mt-2 text-green-400 text-sm animate-fade-in">{file.name} ({(file.size/1024/1024).toFixed(2)} MB)</div>
                      )}
                      {fileError && <div className="mt-2 text-red-500 text-sm animate-fade-in">{fileError}</div>}
                      {errors.file && <div className="mt-2 text-red-500 text-sm animate-fade-in">{errors.file}</div>}
                    </div>
                  </div>
                  {/* Additional Notes */}
                  <div className="space-y-6 pt-4 border-t border-dark-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary font-['MonumentExtended']">Additional Notes</h3>
                      <textarea 
                        id="notes" 
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                      rows={3}
                      className="w-full bg-dark-200 border border-dark-300 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10 resize-none"
                      placeholder="Anything else we should know? (Optional)"
                      ></textarea>
                  </div>
                  {/* Submit Button & Progress */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className={`w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-primary/40 focus:outline-none active:scale-95 hover:shadow-primary/40 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center"><span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>Uploading...</span>
                      ) : (
                        'Submit Project'
                      )}
                    </button>
                    {isSubmitting && (
                      <div className="w-full bg-dark-300 rounded-full h-3 mt-4 overflow-hidden animate-fade-in">
                        <div className="bg-primary h-3 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
          {/* Submission Guidelines */}
          <aside className="bg-dark-100/80 rounded-3xl shadow-xl p-8 border border-dark-300 flex flex-col gap-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-primary font-['MonumentExtended']">Submission Guidelines</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 font-['NeueMontreal']">
              <li>Accepted file types: STL, OBJ, GLTF, GLB, 3MF, FBX, STEP, STP</li>
              <li>Maximum file size: 50MB</li>
              <li>Include all relevant project details for accurate quoting</li>
              <li>For multiple files, please compress into a ZIP archive</li>
              <li>Contact us for special materials or requirements</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-primary font-['MonumentExtended']">Need help?</h4>
              <p className="text-gray-400 font-['NeueMontreal']">See our <Link href="/contact" className="underline hover:text-primary transition-colors">contact page</Link> or <a href="mailto:admin@galactic-3d.com" className="underline hover:text-primary transition-colors">email support</a>.</p>
            </div>
          </aside>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
      `}</style>
    </div>
  );
}