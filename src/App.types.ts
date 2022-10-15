export interface Person {
    name: string;
    id: string;
}

export enum Access {
    FULL_ACCESS = 'full-access',
    CAN_EDIT = 'can-edit',
    CAN_VIEW = 'can-view',
    NO_ACCESS = 'no-access',
}

export default {};
