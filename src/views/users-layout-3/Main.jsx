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
import RestrictedPage from "./RestrictedPage";

function Main() {


  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated );
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state)=> state.auth.token)

  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
  useState(false);
  const [options, setOptions] = useState([]);
  const [data, setData] = useState([]);

  if(!isAuthenticated)
  {
    return navigate('/');
  }

  const config = {
    headers: {
      
       'x-session-key' : token,
      'x-session-type': 'application/json'
    }
  };
 
  useEffect(() => {

    dispatch(getAllUsers())
    setOptions(users);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://munashrmsapi.digtrosoft.com/api/organizations/getorganizations', config);
        setData(response.data.response_data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [manager, setManager] = useState("");
  const [organization, setOrganization] = useState("");

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
  const handleManagerChange = (event) => {
    setManager(event.target.value);
  };
  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic, e.g., send data to the server
    // console.log('Submitted:', {
    //   name,
    //   email,
    //   password,
    //   gender,
    //   role,
    //   phoneNumber,
    //   manager,
    //   organization,
      
    // });

    dispatch(createUser(name, email, password, gender, role, phoneNumber, manager, organization))
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setGender('');
    setRole('');
    setPhoneNumber('');
    setManager('');
    setOrganization('');
  };


  return (
    <>
    {user.role.user_role_id === 1 ? (
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
         
        </div>
        {/* BEGIN: Users Layout */}
        {users.map((user, userKey) => (
          
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
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                        <label htmlFor="modal-form-10" className="form-label">
                        Organization
                      </label>
                      <select 
                      id="modal-form-11" 
                      className="form-select"
                      value={organization} 
                      onChange={handleOrganizationChange}
                      >
                      <option value="">Select Organization</option>
                      {data.map((option, index) => (
                        <option key={index} value={option.id}>{option.name}</option>
                      ))}
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
                          <option value={1}>Owner</option>
                          <option value={2}>Manager</option>
                          <option value={3}>Assistant Manager</option>
                          <option value={4}>User</option>
                          </select>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                        <label htmlFor="modal-form-10" className="form-label">
                        Manager
                      </label>
                      <select 
                      id="modal-form-11" 
                      className="form-select"
                      value={manager} 
                      onChange={handleManagerChange}
                      >
                      <option value="">Select Manager</option>
                      {options.map((option, index) => (
                        <option key={index} value={option.id}>{option.name}</option>
                      ))}
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
                          placeholder="+923xxxxxxxxx"
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
    ):(
      <RestrictedPage />
    )}
    </>
  );
}

export default Main;
