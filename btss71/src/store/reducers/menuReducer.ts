import { createSlice } from "@reduxjs/toolkit"
import { DashboardOutlined, DockerOutlined, DollarCircleFilled, FileOutlined, StockOutlined, UserOutlined } from '@ant-design/icons';

const initialState = {
    status: true,
    interface: [
        {
            title: "Bảng điều khiển",
            icon: DashboardOutlined ,
        },
        {
            title: "Tài khoản",
            icon: UserOutlined,
        },
        {
            title: "Thống kê",
            icon: StockOutlined,
        },
        {
            title: "Tài liệu",
            icon: FileOutlined,
        },
    ]
}

const menuReducer = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.status = !state.status
        }
    }
});

export const { toggleMenu } = menuReducer.actions;
export default menuReducer.reducer;