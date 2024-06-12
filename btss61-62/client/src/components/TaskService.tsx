import axios from "axios";

export interface TaskType {
  id?: number;
  name: string;
  status: boolean;
}

const API_URL = "http://localhost:8080/jobs";

// Method lấy tất cả công việc
export const getAllTask = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Lỗi không lấy được công việc", error);
    throw error;
  }
};

// Method để lấy công việc theo ID
export const getTaskById = async (id: number) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Lỗi, không tìm thấy công việc");
    throw error;
  }
};

// Method để thêm công việc
export const addStudent = async (student: TaskType) => {
  try {
    const res = await axios.post(API_URL, student);
    return res.data;
  } catch (error) {
    console.error("Lỗi, không thể thêm công việc", error);
    throw error;
  }
};

// Method để update công việc theo ID
export const updateTaskById = async (id: number, student: TaskType) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, student);
    return res.data;
  } catch (error) {
    console.error("Lỗi, không thể cập nhật", error);
    throw error;
  }
};

// Method để xóa công việc theo ID
export const deleteTaskById = async (id: number) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    if (res.status === 200) {
      console.log(`Đã xóa công việc với id là ${id} thành công`);
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.log("Không tìm thấy bản ghi");
    } else {
      console.error("Lỗi, không thể xóa công việc:", error);
    }
    throw error;
  }
};

// Method để xóa các công việc hoàn thành
export const deleteCompletedTask = async (): Promise<void> => {
  try {
    const res = await axios.get(API_URL);
    const completedTasks = res.data.filter((task: TaskType) => task.status === true);
    await Promise.all(completedTasks.map(async (task: TaskType) => {
      await axios.delete(`${API_URL}/${task.id}`);
    }));
    console.log("Đã xóa các công việc hoàn thành");
  } catch (error) {
    console.error("Error deleting completed tasks:", error);
    throw error;
  }
};

export const deleteAllTask = async () => {
  try {
    const res = await axios.delete(`${API_URL}`);
    if (res.status === 200) {
      console.log("Đã xóa tất cả công việc");
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.log("Lỗi, không tìm thấy các bản ghi");
    } else {
      console.error("Lỗi, không thể xóa tất cả công việc:", error);
    }
    throw error;
  }
};

// Method để thay đổi trạng thái công việc
export const changeStatus = async (
  id: number | undefined,
  key: string,
  value: any
) => {
  try {
    if (!id) {
      console.error("Lỗi, không nhận được ID từ công việc");
      return;
    }
    const res = await axios.patch(`${API_URL}/${id}`, { [key]: value });
    if (res.status === 200) {
      console.log("Đã thay đổi trạng thái của công việc");
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.log("Lỗi, không tìm thấy bản ghi");
    } else {
      console.error("Lỗi, không thể thay đổi trạng thái công việc");
    }
  }
};
