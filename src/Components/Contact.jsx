import React from 'react';

function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }} className='m-5 p-5'>
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <img src="https://i.pinimg.com/originals/20/b6/86/20b6860e2f5560e6fae086a51051bdbc.gif" alt="Contact" style={{ width: '300px', height: 'auto', marginRight: '20px' }} />
        <div>
          <h2>Contact Us</h2>
          <p>For inquiries, reach out to us via the following channels:</p>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
