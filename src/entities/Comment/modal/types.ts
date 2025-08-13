import { User } from 'src/entities/User';

export type CommentType = {
    id: string;
    text: string;
    user: User;
};
