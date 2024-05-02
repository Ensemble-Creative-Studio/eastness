import { PortableText } from "next-sanity";
import Modal from "./utils/modal.jsx";

export default function About({about, onClose}) {
    return (
        <Modal onClose={onClose} size={75}>
            <div className="flex flex-col p-7 gap-4 max-w-readable">
                <h2 className="text-3xl">About us</h2>
                <PortableText value={about[0].description} />
                <h2 className="text-3xl">Contact us</h2>
                <PortableText value={about[0].contact} />
            </div>
        </Modal>
    )
}