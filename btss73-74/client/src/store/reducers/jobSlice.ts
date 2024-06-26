import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { Job } from "../../interface/interface";
import axios, { AxiosResponse } from "axios";

const initialState: Job[] = [];

export const getJobs: any = createAsyncThunk(
    "jobs/getAllJob",
    async () => {   
        const res: AxiosResponse = await axios.get("http://localhost:8080/jobs");
        return res.data;
    }
)

export const addJob: any = createAsyncThunk(
    'jobs/addJob',
    async (job) => {
        const res: AxiosResponse = await axios.post("http://localhost:8080/jobs", job);
        return res.data;
    }
)

export const deletejob: any = createAsyncThunk(
    'jobs/deleteJob',
    async (id) => {
        const res: AxiosResponse = await axios.delete(`http://localhost:8080/jobs/${id}`);
        return id;
    }
)

export const updatedJob: any = createAsyncThunk(
    'jobs/updateJob',
    async (job: Job) => {
        const res: AxiosResponse = await axios.put(`http://localhost:8080/jobs/${job.id}`);
        return res.data;
    }
)

export const changeStatus: any = createAsyncThunk(
    'jobs/changeStatus',
    async (job: Job) => {
        const res: AxiosResponse = await axios.put(`http://localhost:8080/jobs/${job.id}`, job);
        return res.data;
    }
);

const jobSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: initialState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getJobs.pending, () => {
            console.log('...loading');
        })
        .addCase(getJobs.fulfilled, (state, action: any) => {
            state.jobs = action.payload;
        })
        .addCase(getJobs.rejected, () => {
            console.error("Lỗi không thể lấy bản ghi");
        })
        .addCase(addJob.fulfilled, (state, action) => {
            console.log("Thêm công việc thành công");
            state.jobs = [...state.jobs, action.payload];
        })
        .addCase(deletejob.fulfilled, (state, action) => {
            console.log("Xóa công việc thành công");
            state.jobs = state.jobs.filter((item) => {
                return item.id !== action.payload;
            })
        })
        .addCase(changeStatus.fulfilled, (state, action) => {
            const updatedJob = action.payload;
            state.jobs = state.jobs.map((job) =>
                job.id === updatedJob.id ? { ...job, status: updatedJob.status } : job
            );
        });
    }
});

export default jobSlice.reducer;
