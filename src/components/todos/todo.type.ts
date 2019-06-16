
// Semantic type
// so readers can confirm
// semantics behind comparisons
export type TodoId = string;

export class Todo {
    completed: boolean;
    name: string;
}
export class TodoResponse extends Todo {
    _id: TodoId;
    created_data: string;
}
