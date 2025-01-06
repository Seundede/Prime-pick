import { create } from "zustand";

interface useStoreProps {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export const useStore = create<useStoreProps>((set) => ({
isOpen: false,
onOpen: () => set({isOpen: true}),
onClose: () => set({isOpen: false})
}));
