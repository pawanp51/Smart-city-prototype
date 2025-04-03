import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus } from 'lucide-react';
import { useLoginContext } from '../../ContextApi/Logincontext';
// StatusTaskTable component
const StatusTaskTable = ({tasks}) => {
  const navigate = useNavigate();
  const { user } = useLoginContext();
const task_status = tasks.filter((task)=>{return task.employee_email === user.Email});
// console.log(tasks);

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Task List</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b space-y-2 sm:space-y-0">
          <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
            <button className="flex items-center justify-center px-4 py-2 border rounded-md w-full sm:w-auto">
              <Filter size={20} className="mr-2" />
              Filters
            </button>
            <button
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md w-full sm:w-auto"
              onClick={() => navigate('/CreateTask')}
            >
              <Plus size={20} className="mr-2" />
              Assign Task
            </button>
          </div>
        </div>
        <div className="overflow-x-auto"> {/* Enable horizontal scroll for tables */}
          <table className="w-full min-w-[600px] table-auto"> {/* Ensure minimum width for table */}
            <thead>
              <tr>
                <th className="px-2 py-3">ID</th>
                <th className="px-2 py-3">Task Name</th>
                <th className="px-2 py-3">Date</th>
                <th className="px-2 py-3">Assigned By</th>
                <th className="px-2 py-3">Department</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-t">
                  <td className="px-4 py-2">{task._id}</td>
                  <td className="px-4 py-2">{task.task_name}</td>
                  <td className="px-4 py-2">{task.date}</td>
                  <td className="px-4 py-2">{task.assigned_by}</td>
                  <td className="px-4 py-2">{task.department}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      task.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'Declined' ? 'bg-red-800 text-white' :
                      task.status === 'Approved' ? 'bg-green-500 text-green-800' :
                      'bg-gray-100 text-gray-800' 
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {task.status === 'Declined' ? (
                      <div className="text-red-500 text-sm">
                        <p>Reason: {task.reason}</p>
                      </div>
                    ) : task.status === 'pending' ? (
                      <button
                        onClick={() => navigate('/Task')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                      >
                        Complete Task
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center p-4 border-t">
          <div className="flex space-x-2">
            <button className="px-2 py-1 border rounded-md">&lt;</button>
            <button className="px-2 py-1 border rounded-md bg-blue-600 text-white">1</button>
            <button className="px-2 py-1 border rounded-md">2</button>
            <span className="px-2 py-1">...</span>
            <button className="px-2 py-1 border rounded-md">7</button>
            <button className="px-2 py-1 border rounded-md">8</button>
            <button className="px-2 py-1 border rounded-md">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTaskTable;
