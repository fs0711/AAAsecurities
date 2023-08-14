import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
export default function ViewAttendance() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const [data, setData] = useState([]);

  if (!isAuthenticated) {
    return navigate("/");
  }

  const config = {
    headers: {
      "x-session-key": token,
      "x-session-type": "application/json",
    },
  };

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://munashrmsapi.digtrosoft.com/api/schedules/read",
          config
        );
        setData(response.data.response_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {user.role.user_role_id === 1 ? (
        <>
          <h2 className="intro-y text-lg font-medium mt-10">Attendance</h2>
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
              <button
                onClick={() => {
                //   setHeaderFooterModalPreview(true);
                navigate("/create-attendance")
                }}
                className="btn btn-primary shadow-md mr-2"
              >
                Add New Attendance
              </button>
            </div>
            {/* BEGIN: Users Layout */}
            {data?.map((user, userKey) => (
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
                      <DropdownToggle
                        tag="a"
                        className="w-5 h-5 block"
                        href="#"
                      >
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Edit2" className="w-4 h-4 mr-2" />{" "}
                            Edit
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="text-center lg:text-left p-5">
                    <div></div>
                    <div className="flex items-center justify-center lg:justify-start text-slate-500 mt-5">
                      <Lucide icon="Mail" className="w-3 h-3 mr-2" />
                      {user.email_address}
                    </div>
                  </div>
                 
                </div>
              </div>
            ))}
          
          </div>
        </>
      ) : (
        // <RestrictedPage />
        null
      )}
    </>
  );
}
