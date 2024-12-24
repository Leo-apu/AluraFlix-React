import { useState } from "react";

function useModal( ) {
    const [open, setOpen] = useState(false);
    const [typeModal, setTypeModal] = useState(null);

    function cambiarEstado( type) {
        setOpen(!open);
        setTypeModal(type);
    }

    return { open, cambiarEstado , typeModal };
}

export default useModal;