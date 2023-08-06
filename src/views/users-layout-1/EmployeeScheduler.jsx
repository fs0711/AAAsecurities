import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCLients,
  getAllEmployees,
  getAllSites,
} from "../../store/actions";
import { TomSelect } from "@/base-components";

function EmployeeDutyScheduler() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.client.clients);
  const sites = useSelector((state) => state.sites.sites);
  const employees = useSelector((state) => state.employee.employees);

  useEffect(() => {
    dispatch(getAllCLients());
    dispatch(getAllSites());
    dispatch(getAllEmployees());
  }, [dispatch]);

  const [data, setData] = useState({
    client: null,
    site: null,
    date: null,

    schedules: [
      {
        start_time: null,
        end_time: null,

        employees: [],
      },
    ],
  });

  const submit = () => {
    let list = [...data.schedules];
    list.push({
      start_time: null,
      end_time: null,

      employees: [],
    });
    console.log(data);
    setData({ ...data, schedules: [...list] });
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-4">Duty Scheduler</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-4">
          <div className="w-1/2">
            <label
              htmlFor="site"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Site
            </label>
            <select
              id="site"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data?.site}
              onChange={(e) => setData({ ...data, site: e.target.value })}
              required
            >
              <option value={null} selected>{"Select Site"}</option>
              {sites?.map((item, key) => (
                <option value={item?.id}>{item?.name}</option>
              ))}
            </select>
          </div>
          <div className="w-1/2 ml-4">
            <label
              htmlFor="client"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Client
            </label>
            <select
              id="client"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data?.client}
              onChange={(e) => setData({ ...data, client: e.target.value })}
              required
            >
              <option value={null} selected>{"Select Client"}</option>

              {clients?.map((item, key) => (
                <option value={item?.id}>{item?.name}</option>
              ))}
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <DatePicker
              id="startDate"
              selected={data?.date}
              onChange={(e) => {
                setData({ ...data, date: e });
              }}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select start date"
            />
          </div>
        </div>
        {data?.schedules?.map((item, idx) => {
          return (
            <>
              <div className="col-span-12 sm:col-span-6 mb-10">
                <label htmlFor="employee-select" className="form-label">
                  Select Employees
                </label>

                <TomSelect
                  value={item?.employees}
                  onChange={(e) => {
                    let emp = item?.employees || [];
                    emp.push(e);
                    setData({ ...data, schedules: [...data.schedules] });
                  }}
                  className="w-full"
                  multiple
                >
                  {employees?.map((item, key) => (
                    <option value={item?.id}>{item?.name}</option>
                  ))}
                </TomSelect>
              </div>
              <div className="flex justify-between mb-4">
                <div className="w-1/2 ml-4">
                  <label
                    htmlFor="startTime"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Start Time
                  </label>
                  <DatePicker
                    id="startTime"
                    selected={item?.start_time}
                    value={item?.start_time}
                    onChange={(e) => {
                      item.start_time = e;
                      setData({ ...data, schedules: [...data.schedules] });
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholderText="Select start time"
                  />
                </div>

                <div className="w-1/2 ml-4">
                  <label
                    htmlFor="endTime"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    End Time
                  </label>
                  <DatePicker
                    id="endTime"
                    selected={item?.end_time}
                    value={item?.end_time}
                    onChange={(e) => {
                      item.end_time = e;
                      setData({ ...data, schedules: [...data.schedules] });
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholderText="Select end time"
                  />
                </div>
              </div>
            </>
          );
        })}
        <div className="flex justify-between mb-4">
          <button onClick={submit} className="btn btn-primary shadow-md mr-2">
            Add New Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDutyScheduler;
