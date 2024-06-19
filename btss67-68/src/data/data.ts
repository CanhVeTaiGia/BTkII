// localStorage.setItem(books", JSON.stringify(books))

import { BookInterface } from "../interface/interface";

export const books: BookInterface[] = [
    {
        id: 1,
        name: "To Kill a Mockingbird",
        studentName: "John Doe",
        loanDate: "2023-06-01",
        payDate: "2023-06-15",
        status: true
    },
    {
        id: 2,
        name: "1984",
        studentName: "Jane Smith",
        loanDate: "2023-06-10",
        payDate: "2023-06-24",
        status: false
    },
    {
        id: 3,
        name: "The Great Gatsby",
        studentName: "Emily Johnson",
        loanDate: "2023-06-15",
        payDate: "2023-06-29",
        status: true
    }
];