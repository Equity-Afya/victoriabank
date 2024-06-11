import React from 'react';
import "./Bulkuploads.css";

function Bulkuploads({ onEftMpesaRtgs, onUploads }) {
  return (
    <div>
      <div className='bulkupload'>Bulk Upload</div>
      <div className='uploads'>
        <hr />
        <ul className='ul3' onClick={() => onEftMpesaRtgs()}>
          EFT/MPESA/RTGS
        </ul>
        <hr />
        <ul className='ul3' onClick={() => onUploads()}>
          Uploads History
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Bulkuploads;
