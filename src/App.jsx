import React, { useState } from "react";

// Import React và hook useState từ thư viện React
// useState là một hook để quản lý state trong React
// Trong React, dữ liệu chỉ thay đổi khi có sự thay đổi trong state

function ToDoAPP() {
  // Định nghĩa component chính ToDoAPP

  const [number, setNumber] = useState(1);
  // Khởi tạo state 'number' với giá trị ban đầu là 1
  // setNumber là hàm để cập nhật giá trị của number

  const [tasks, setTasks] = useState([]);
  // Khởi tạo state 'tasks' là một mảng rỗng
  // setTasks là hàm để cập nhật mảng tasks

  const [newTask, setNewTask] = useState("");
  // Khởi tạo state 'newTask' là một chuỗi rỗng
  // setNewTask là hàm để cập nhật giá trị của newTask

  function handleClick() {
    setNumber(number + 1);
  }
  // Hàm xử lý sự kiện click, tăng giá trị number lên 1

  function handleAddTask() {
    if (newTask.trim() !== "") {
      // Kiểm tra nếu newTask không rỗng sau khi loại bỏ khoảng trắng
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, status: "Not Started" },
      ]);
      // Thêm task mới vào mảng tasks, sử dụng spread operator để tạo mảng mới
      // id được tạo bằng Date.now() để đảm bảo tính duy nhất
      setNewTask("");
      // Reset giá trị của newTask về rỗng
    }
  }

  function handleCompleteTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
    // Cập nhật trạng thái của task có id tương ứng thành "Completed"
    // Sử dụng map để tạo mảng mới, chỉ thay đổi task cần cập nhật
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    // Xóa task có id tương ứng khỏi mảng tasks
    // Sử dụng filter để tạo mảng mới không bao gồm task cần xóa
  }

  return (
    
    <div className="container">
      <h1>{number}</h1>
      <button onClick={handleClick}>Tăng 1 đơn vị</button>
      {/* // Hiển thị giá trị number và nút để tăng giá trị */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* // Input để nhập task mới, giá trị được kiểm soát bởi state newTask */}
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleAddTask}
        >
          ADD
          {/* Add Task */}
        </button>
        {/* // Nút để thêm task mới */}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            // Duyệt qua mảng tasks và render từng task
            <tr key={task.id}>
              <th scope="row">{index + 1}</th>
              <td>{task.text}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => handleCompleteTask(task.id)}
                  disabled={task.status === "Completed"}
                >
                  Complete
                </button>
                {/* // Nút để đánh dấu task hoàn thành, vô hiệu hóa nếu đã hoàn */}
                thành
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
                {/* // Nút để xóa task */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoAPP;
// Export component ToDoAPP để có thể sử dụng ở nơi khác
