import { PortableText } from "next-sanity";
import Modal from "./utils/modal.jsx";
import useMediaQuery from "./utils/useMediaQuery.jsx";

export default function About({about, onClose}) {
    const isMedium = useMediaQuery('(min-width: 768px)');
    let  size = 85; if (isMedium) { size =75; }
    return (
        <Modal onClose={onClose} size={size}>
            <div className="flex flex-col p-4 md:p-7 gap-4 max-w-readable">
                <h2 className="text-xl md:text-3xl">About us</h2>
                <PortableText value={about[0].description} />
                <h2 className="text-xl md:text-3xl">Contact us</h2>
                <PortableText value={about[0].contact} />
            </div>
        </Modal>
    )
}