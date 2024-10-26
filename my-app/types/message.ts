// types/message.ts
export interface Message {
    id: number;
    text: string;
    sender: 'System' | 'You';
    expiry: string | null;
}