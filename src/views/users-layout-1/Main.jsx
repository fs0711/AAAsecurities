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
import { getAllEmployees } from "../../store/actions";
import { createEmployee } from "../../store/actions";

function Main() {


  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const users = useSelector((state) => state.users.users);
  const employees = useSelector((state) => state.employee.employees);
  const user = useSelector((state) => state.auth.user);
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
  useState(false);
  const [options, setOptions] = useState([]);


  useEffect(() => {

    dispatch(getAllEmployees());

    setOptions(users);
  }, [dispatch]);

  if(!isAuthenticated)
  {
    return navigate('/');
  }

const [employeeName, setEmployeeName] = useState("");
const [designation, setDesignation] = useState("");
const [address, setAddress] = useState("");
const [postCode, setPostCode] = useState("");
const [mobileNum, setMobileNum] = useState("");
const [brpExpiry, setBrpExpiry] = useState("");
const [siaLicence, setSiaLicence] = useState("");
const [siaIssueDate, setSiaIssueDate] = useState("");
const [siaExpiryDate, setSiaExpiryDate] = useState("");
const [gender, setGender] = useState("");
const [manager, setManager] = useState("");
const [joiningDate, setJoiningDate] = useState(new Date());
const [country, setCountry] = useState("");
const [city, setCity] = useState("");
const [allocatedLeaves, setAllocatedLeaves] = useState('');
const [consumedLeaves, setConsumedLeaves] = useState('');
const [probationPeriod, setProbationPeriod] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

const handleManagerChange = (event) => {
  setManager(event.target.value);
};

const handleGenderChange = (event) => {
  setGender(event.target.value)
}

const resetForm = () => {
  setEmployeeName("");
  setDesignation("");
  setAddress("");
  setPostCode("");
  setMobileNum("");
  setBrpExpiry("");
  setSiaLicence("");
  setSiaIssueDate("");
  setSiaExpiryDate("");
  setGender("");
  setManager("");
  setJoiningDate(new Date());
  setCountry("");
  setCity("");
  setAllocatedLeaves("");
  setConsumedLeaves("");
  setProbationPeriod("");
  setPassword("");
  setEmail("");
};

const handleClick = () => {
  e.preventDefault();
  dispatch(createEmployee(employeeName, email, password, allocatedLeaves, consumedLeaves, probationPeriod, gender, joiningDate, country, city, address, postCode, mobileNum,brpExpiry,siaLicence,siaIssueDate,siaExpiryDate, manager, user.id ));

  resetForm();
}

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Employees Section</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button
          onClick={() => {
            setHeaderFooterModalPreview(true);
          }} 
          className="btn btn-primary shadow-md mr-2">
            Add New Employee
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
        {employees.map((employee, employeeKey) => (
          
          <div
            key={employeeKey}
            className="intro-y col-span-12 md:col-span-6 lg:col-span-4"
          >
            <div className="box">
              <div className="flex items-start px-5 pt-5">
                <div className="w-full flex flex-col lg:flex-row items-center">
                 
                  <div className="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                    <a href="" className="font-medium">
                      {employee.name}
                    </a>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {employee.employee_id}
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
                  {employee.email_address
                  }
                </div>
                <div className="flex items-center justify-center lg:justify-start text-slate-500 mt-1">
                  <Lucide icon="CreditCard" className="w-3 h-3 mr-2" />
                  {employee.phone_number}
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
                          New Employee Form
                        </h2>
                       
                      </ModalHeader>
                      <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                      <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-1" className="form-label">
                        Employee Name
                      </label>
                      <input
                        id="employee-name"
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-2" className="form-label">
                        Designation
                      </label>
                      <input
                        id="designation"
                        type="text"
                        className="form-control"
                        placeholder="Manager"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-3" className="form-label">
                      Country
                      </label>
                      <input
                        id="address"
                        type="text"
                        className="form-control"
                        placeholder="Pakistan"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                    <label htmlFor="modal-form-3" className="form-label">
                    City
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      placeholder="Lahore"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-3" className="form-label">
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        className="form-control"
                        placeholder="123 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-4" className="form-label">
                        Post Code
                      </label>
                      <input
                        id="post-code"
                        type="text"
                        className="form-control"
                        placeholder="12345"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-5" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        id="mobile-num"
                        type="text"
                        className="form-control"
                        placeholder="1234567890"
                        value={mobileNum}
                        onChange={(e) => setMobileNum(e.target.value)}
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
                        BRP Expiry
                      </label>
                      <input
                        id="brp-expiry"
                        type="text"
                        className="form-control"
                        placeholder="DD/MM/YYYY"
                        value={brpExpiry}
                        onChange={(e) => setBrpExpiry(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-7" className="form-label">
                        SIA Licence #
                      </label>
                      <input
                        id="sia-licence"
                        type="text"
                        className="form-control"
                        placeholder="SIA12345"
                        value={siaLicence}
                        onChange={(e) => setSiaLicence(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-8" className="form-label">
                        SIA License Issue Date
                      </label>
                      <input
                        id="sia-issue-date"
                        type="text"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        value={siaIssueDate}
                        onChange={(e) => setSiaIssueDate(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="modal-form-9" className="form-label">
                        SIA License Expiry Date
                      </label>
                      <input
                        id="sia-expiry-date"
                        type="text"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        value={siaExpiryDate}
                        onChange={(e) => setSiaExpiryDate(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                    <label htmlFor="modal-form-6" className="form-label">
                      Joining Date
                    </label>
                    <input
                      id="joining-date"
                      type="date"
                      className="form-control"
                      placeholder="01/01/2023"
                      value={joiningDate}
                      onChange={(e) => setJoiningDate(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                  <label htmlFor="modal-form-2" className="form-label">
                    Allocated Leaves
                  </label>
                  <input
                    id="allocated-leaves"
                    type="number"
                    className="form-control"
                    placeholder="Enter allocated leaves"
                    value={allocatedLeaves}
                    onChange={(e) => {setAllocatedLeaves(e.target.value)}}
                  />
                </div>
          
                <div className="col-span-12 sm:col-span-6">
                  <label htmlFor="modal-form-3" className="form-label">
                    Consumed Leaves
                  </label>
                  <input
                    id="consumed-leaves"
                    type="number"
                    className="form-control"
                    placeholder="Enter consumed leaves"
                    value={consumedLeaves}
                    onChange={(e) => {setConsumedLeaves(e.target.value)}}
                  />
                </div>
          
                <div className="col-span-12 sm:col-span-6">
                  <label htmlFor="modal-form-4" className="form-label">
                    Probation Period
                  </label>
                  <input
                    id="probation-period"
                    type="number"
                    className="form-control"
                    placeholder="Enter probation period"
                    value={probationPeriod}
                    onChange={(e) => {setProbationPeriod(e.target.value)}}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                <label htmlFor="modal-form-2" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>
                <div className="col-span-12 sm:col-span-6">
                <label htmlFor="modal-form-5" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value);}}
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
                        onClick={handleClick}
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
