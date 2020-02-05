export interface ITodoItemDTOCreateOrUpdate {
    item_name: string,
    item_description: string
}

export interface ITodoItemDTOView {
    id: string,
    item_name: string,
    item_description: string,
    item_status: TodoStatusEnum
}

export enum TodoStatusEnum {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}
