import { User } from 'src/entities/User';

export interface CommentData {
    id: string;
    text: string;
    user: User;
}
