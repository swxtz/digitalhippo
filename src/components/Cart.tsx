import { ShoppingCartIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

export function Cart() {
    const itemCount = 1;

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCartIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition-colors"
                />
                <span className="ml-2 tezt-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors">
                    {itemCount}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                {/* Header */}
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Card ({itemCount})</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            {/* TODO Card Logic */}
                            Cart Items
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">
                                        Transaction Fee
                                    </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div></div>
                )}
            </SheetContent>
        </Sheet>
    );
}
