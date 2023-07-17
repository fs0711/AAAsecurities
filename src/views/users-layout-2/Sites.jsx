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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCLients, getAllSites, createSite } from "../../store/actions";

function Sites() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated );
  const clients = useSelector((state) => state.client.clients);
  const sites = useSelector((state) => state.sites.sites);
  const [headerFooterModalPreview, setHeaderFooterModal] =
  useState(false);
  const [options, setOptions] = useState(clients);

  // Check authentication and redirect to login page
  if(!isAuthenticated)
  {
    return navigate('/');
  }
  
  useEffect(() => {

    dispatch(getAllCLients());
    dispatch(getAllSites());

    console.log (clients)

  }, [dispatch]);

// Define state variables
const [siteName, setSiteName] = useState('');
const [client, setClient] = useState('');
const [cpPhoneNumber, setCpPhoneNumber] = useState(['']);
const [cpEmailAddress, setCpEmailAddress] = useState('');
const [contactPerson, setContactPerson] = useState('');
const [country, setCountry] = useState('');
const [city, setCity] = useState('');
const [zipCode, setZipCode] = useState('');
const [address, setAddress] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();

  
  dispatch(createSite(siteName, contactPerson, cpPhoneNumber, address, city, country, zipCode, cpEmailAddress, client ))

  setSiteName('');
  setContactPerson('');
  setCpPhoneNumber(['']);
  setAddress('');
  setCity('');
  setCountry('');
  setZipCode('');
  setCpEmailAddress('');
  setClient('');
  

};

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Sites Section</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button 
          onClick={() => {
            setHeaderFooterModal(true);
          }}
          className="btn btn-primary shadow-md mr-2"
          >
            Add New Site
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
        {sites.length === 0 ? (
          <div className="flex justify-center items-center h-full">
          <p className="text-center font-bold">No sites available</p>
        </div>
        ):(sites.map((client, clientKey) => (
          <div
          key={clientKey}
          className="intro-y col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div className="box">
            <div className="flex items-start px-5 pt-5">
              <div className="w-full flex flex-col lg:flex-row items-center">
               
                <div className="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                  <a 
                  className="font-medium"
                  
                  >
                    {client.name}
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {client.client_id}
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
                {client.cp_email_address}
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
        )))}
        {/* BEGIN: Users Layout */}
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
                              setHeaderFooterModal(false);
                            }}
                          >
                            <ModalHeader>
                              <h2 className="font-medium text-base mr-auto">
                                New Client Form
                              </h2>
                             
                            </ModalHeader>
                            <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-1" className="form-label">
                                Site Name
                              </label>
                              <input
                                id="modal-form-1"
                                type="text"
                                className="form-control"
                                placeholder="Client Name"
                                value={siteName}
                                onChange={(e) => setSiteName(e.target.value)}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                            <label htmlFor="modal-form-10" className="form-label">
                            Client 
                          </label>
                          <select 
                          id="modal-form-11" 
                          className="form-select"
                          value={client}    
                          onChange={(e) => setClient(e.target.value)}
                          >
                          <option value="">Select Client</option>
                          {options.map((option, index) => (
                            <option key={index} value={option.id}>{option.name}</option>
                          ))}
                          </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-3" className="form-label">
                                CP Phone Number
                              </label>
                              <input
                                id="modal-form-3"
                                type="text"
                                className="form-control"
                                placeholder="CP Phone Number"
                                value={cpPhoneNumber}
                                onChange={(e) => setCpPhoneNumber([e.target.value])}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-4" className="form-label">
                                CP Email Address
                              </label>
                              <input
                                id="modal-form-4"
                                type="text"
                                className="form-control"
                                placeholder="CP Email Address"
                                value={cpEmailAddress}
                                onChange={(e) => setCpEmailAddress(e.target.value)}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-5" className="form-label">
                                Contact Person
                              </label>
                              <input
                                id="modal-form-5"
                                type="text"
                                className="form-control"
                                placeholder="Contact Person"
                                value={contactPerson}
                                onChange={(e) => setContactPerson(e.target.value)}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-6" className="form-label">
                                Country
                              </label>
                              <input
                                id="modal-form-6"
                                type="text"
                                className="form-control"
                                placeholder="Country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-7" className="form-label">
                                City
                              </label>
                              <input
                                id="modal-form-7"
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-8" className="form-label">
                                Zip Code
                              </label>
                              <input
                                id="modal-form-8"
                                type="text"
                                className="form-control"
                                placeholder="Zip Code"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                              />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                              <label htmlFor="modal-form-9" className="form-label">
                                Address
                              </label>
                              <input
                                id="modal-form-9"
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                            </ModalBody>
                            <ModalFooter>
                              <button
                                type="button"
                                onClick={() => {
                                  setHeaderFooterModal(false);
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

export default Sites;
