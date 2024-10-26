import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface MessageInputProps {
    newMessage: string;
    setNewMessage: (message: string) => void;
    expiryTime: string;
    setExpiryTime: (time: string) => void;
    onSend: () => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
    newMessage,
    setNewMessage,
    expiryTime,
    setExpiryTime,
    onSend
}) => {
    return (
        <div className="flex gap-2 p-4 border-t border-gray-800">
            <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow bg-gray-800 text-white border-gray-700 focus-visible:ring-emerald-500"
            />

            <Select value={expiryTime} onValueChange={setExpiryTime}>
                <SelectTrigger className="w-[110px] bg-gray-800 text-white border-gray-700 focus:ring-emerald-500">
                    <SelectValue placeholder="Expiry" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="1h" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        1 hour
                    </SelectItem>
                    <SelectItem value="24h" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        24 hours
                    </SelectItem>
                    <SelectItem value="never" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        Never
                    </SelectItem>
                </SelectContent>
            </Select>

            <Button
                onClick={onSend}
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
                Send
            </Button>
        </div>
    );
};

export default MessageInput;