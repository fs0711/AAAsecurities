import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TinySlider,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getAllUsers } from "../../store/actions";
import { createUser } from "../../store/actions";

function Main() {


  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.auth.user);
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
  useState(false);
 
  useEffect(() => {

    dispatch(getAllUsers());

  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic, e.g., send data to the server
    console.log('Submitted:', {
      name,
      email,
      password,
      gender,
      role,
      phoneNumber,
      
    });

    dispatch(createUser(name, email, password, gender, role, phoneNumber, user.id))
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setGender('');
    setRole('');
    setPhoneNumber('');
  };


  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Users Layout</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button
          onClick={() => {
            setHeaderFooterModalPreview(true);
          }} 
          className="btn btn-primary shadow-md mr-2">
            Add New User
          </button>
         {/* <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
           </div> */}
        </div>
        {/* BEGIN: Users Layout */}
        {$_.take(users, 9).map((user, userKey) => (
          
          <div
            key={userKey}
            className="intro-y col-span-12 md:col-span-6 lg:col-span-4"
          >
            <div className="box">
              <div className="flex items-start px-5 pt-5">
                <div className="w-full flex flex-col lg:flex-row items-center">
                 
                  <div className="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                    <a href="" className="font-medium">
                      {user.name}
                    </a>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {user.role.title}
                    </div>
                  </div>
                </div>
                <Dropdown className="absolute right-0 top-0 mr-5 mt-3">
                  <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> Edit
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="text-center lg:text-left p-5">
                <div></div>
                <div className="flex items-center justify-center lg:justify-start text-slate-500 mt-5">
                  <Lucide icon="Mail" className="w-3 h-3 mr-2" />
                  {user.email_address
                  }
                </div>
                <div className="flex items-center justify-center lg:justify-start text-slate-500 mt-1">
                  <Lucide icon="CreditCard" className="w-3 h-3 mr-2" />
                  {user.nic}
                </div>
              </div>
              {/*<div className="text-center lg:text-right p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                <button className="btn btn-primary py-1 px-2 mr-2">
                  Message
                </button>
                <button className="btn btn-outline-secondary py-1 px-2">
                  Profile
                </button>
                </div> */}
            </div>
          </div>
        ))}
        {/* END: Users Layout */}
          {/* BEGIN: Header & Footer Modal */}
          <PreviewComponent>
            {({ toggle }) => (
              <>
               
                    {/* BEGIN: Modal Toggle 
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setHeaderFooterModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={headerFooterModalPreview}
                      onHidden={() => {
                        setHeaderFooterModalPreview(false);
                      }}
                    >
                      <ModalHeader>
                        <h2 className="font-medium text-base mr-auto">
                          New User Form
                        </h2>
                       
                      </ModalHeader>
                      <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-6">
                          <label htmlFor="modal-form-1" className="form-label">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="xyz"
                            value={name} onChange={handleNameChange}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <label htmlFor="modal-form-2" className="form-label">
                             Email
                          </label>
                          <input
                            id="email"
                            type="text"
                            className="form-control"
                            placeholder="example@gmail.com"
                            value={email} onChange={handleEmailChange}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <label htmlFor="modal-form-3" className="form-label">
                            Password
                          </label>
                          <input
                            id="pass"
                            type="text"
                            className="form-control"
                            placeholder="*********"
                            value={password} onChange={handlePasswordChange}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <label htmlFor="modal-form-4" className="form-label">
                           Gender
                          </label>
                          <select 
                          id="modal-form-6" 
                          className="form-select"
                          value={gender} onChange={handleGenderChange}
                          >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <label htmlFor="modal-form-5" className="form-label">
                            Role
                          </label>
                          <select 
                          id="modal-form-6" 
                          className="form-select"
                          value={role} onChange={handleRoleChange}
                          >
                          <option value="">Select Role</option>
                          <option value="1">Manager</option>
                          <option value="2">User</option>
                          <option value="3">Other</option>
                          </select>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <label htmlFor="modal-form-6" className="form-label">
                            Phone No
                          </label>
                          <input
                          id="phone"
                          type="text"
                          className="form-control"
                          placeholder="03xxxxxxxxx"
                          value={phoneNumber} onChange={handlePhoneNumberChange}
                        />
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <button
                          type="button"
                          onClick={() => {
                            setHeaderFooterModalPreview(false);
                          }}
                          className="btn btn-outline-secondary w-20 mr-1"
                        >
                          Cancel
                        </button>
                        <button 
                        type="button" 
                        className="btn btn-primary w-20"
                        onClick={handleSubmit}
                        >
                          Create
                        </button>
                      </ModalFooter>
                    </Modal>
                    {/* END: Modal Content */}
                 
                  <Source>
                    <Highlight>
                     
                    </Highlight>
                  </Source>
              
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Modal */}
      </div>
    </>
  );
}

export default Main;
