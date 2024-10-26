// components/FeatureDialog.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Feature } from '@/types/feature'

export const FeatureDialog = ({ icon: Icon, title, description }: Feature) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-gray-800 hover:bg-gray-700 border-gray-700">
                    <Icon className="w-5 h-5 mr-2" />
                    {title}
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 text-white border-gray-700">
                <DialogHeader>
                    <DialogTitle className="text-emerald-500">{title}</DialogTitle>
                </DialogHeader>
                <p>{description}</p>
            </DialogContent>
        </Dialog>
    )
}