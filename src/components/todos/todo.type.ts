
// Semantic type
// so readers can confirm
// semantics behind comparisons
export type TodoId = string;

export class Todo {
    _id: TodoId;
    completed: boolean;
    name: string;
    created_data: string;
}
