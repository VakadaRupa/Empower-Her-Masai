import React, { useReducer } from 'react';
import { formReducer, initialState } from './formReducer';

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { step, formData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Bonus: Validation logic
  const isStep1Valid = formData.name.trim() !== '' && formData.email.includes('@');
  const isStep2Valid = formData.username.trim() !== '' && formData.password.length >= 6;

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>Registration Successful! ✅</h2>
        <p>Welcome aboard, {formData.name}!</p>
        <button onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset Form</button>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      {/* Progress Indicator */}
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>
      <p className="step-text">Step {step} of 3</p>

      {step === 1 && (
        <div className="form-group">
          <h3>Personal Details</h3>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <button disabled={!isStep1Valid} onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-group">
          <h3>Account Details</h3>
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <div className="button-row">
            <button className="back-btn" onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}>Back</button>
            <button disabled={!isStep2Valid} onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-group">
          <h3>Review & Submit</h3>
          <div className="review-card">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Username:</strong> {formData.username}</p>
          </div>
          <div className="button-row">
            <button className="back-btn" onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}>Back</button>
            <button className="submit-btn" onClick={() => dispatch({ type: 'SUBMIT_FORM' })}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;