import React from "react";

function EditProfile() {
  return (
    <div className="container mt-5">

      <h2>Edit Teacher Profile</h2>

      <div className="mb-3">
        <label>Teacher Name</label>
        <input
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Subject</label>
        <input
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Monthly Fee</label>
        <input
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">
        Save Changes
      </button>

    </div>
  );
}

export default EditProfile;