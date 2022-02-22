import { useState, useEffect } from "react";

export const UserEdit = ({ user, setIsOpenModal, isOpenModal, submitForm }) => {
  const [newUser, setNewUser] = useState({ ...user });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(!modal);
  }, []);

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(newUser);
    closeModal();
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.type === "number" ? +e.target.value : e.target.value;
    setNewUser((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <>
      <div className="screen"></div>
      <div className={`user-edit ${modal ? "modal-open" : ""}`}>
        <div className="user-edit-header">
          <h2>{newUser.id ? "Edit User" : "Add User"}</h2>
        </div>
        <div className="user-edit-body">
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <label htmlFor="name-title">Title</label>
              <input
                name="title"
                id="name-title"
                value={newUser.title}
                placeholder="Add title, like: Mr, Mrs, Dr"
                required
                onChange={handleChange}
              />

              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                minLength="3"
                id="first-name"
                name="firstName"
                value={newUser.firstName}
                required
                onChange={handleChange}
              />
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={newUser.lastName}
                required
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={newUser.email}
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                required
                onChange={handleChange}
              />
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={newUser.country}
                required
                onChange={handleChange}
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={newUser.city}
                required
                onChange={handleChange}
              />
              <label htmlFor="street-name">Street Name</label>
              <input
                type="text"
                id="street-name"
                name="streetName"
                value={newUser.streetName}
                required
                onChange={handleChange}
              />
              <label htmlFor="street-number">Street No.</label>
              <input
                type="number"
                id="street-number"
                name="streetNumber"
                value={newUser.streetNumber}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn primary">
                Save
              </button>
              <button
                type="reset"
                className="btn secondary"
                onClick={() => {
                  closeModal();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
