import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EmployeeDutyScheduler() {
    
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const employees = [
      { value: 'employee1', label: 'Employee 1' },
      { value: 'employee2', label: 'Employee 2' },
      { value: 'employee3', label: 'Employee 3' },
      // ... other employees
    ];
    const handleEmployeeChange = (selectedOptions) => {
        setSelectedEmployees(selectedOptions);
      };
    return (
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-4">Duty Scheduler</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between mb-4">
              <div className="w-1/2">
                <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Site
                </label>
                <select
                  id="site"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="w-1/2 ml-4">
                <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Client
                </label>
                <select
                  id="client"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="option1">Option A</option>
                  <option value="option2">Option B</option>
                  <option value="option3">Option C</option>
                </select>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
            <label htmlFor="employee-select" className="form-label">
              Select Employees
            </label>
            <select
              id="employee-select"
              isMulti
              options={employees}
              value={selectedEmployees}
              onChange={handleEmployeeChange}
            />
          </div>
            <div className="flex justify-between mb-4">
              <div className="w-1/2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select start date"
                />
              </div>
              <div className="w-1/2 ml-4">
                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <DatePicker
                  id="startTime"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholderText="Select start time"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <DatePicker
                  id="endDate"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select end date"
                />
              </div>
              <div className="w-1/2 ml-4">
                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <DatePicker
                  id="endTime"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
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
          </div>
        </div>
      );
}

export default EmployeeDutyScheduler;
