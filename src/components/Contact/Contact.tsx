import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux_utilis/appStore";
import ContactEdit from "./ContactEdit";
import ContactForm from "./ContactForm";
import NoContact from "./NoContact";
import ShowContact from "./ShowContact";

const Contact = () => {
    
    const [newContact, setNewContact] = useState<boolean>(false);
    const [editClick, setEditClick] = useState<number | undefined>(undefined);
    console.log(editClick);

    const contactList = useSelector((state: RootState) => state.contact.contact);
    

    return (
      <div className="sm:ml-0 md:ml-64">
        <div className="relative flex flex-col items-center">
          <h1 className="w-full h-20 bg-[#00ccff] font-medium text-white text-5xl flex justify-center items-center">
            Contact
          </h1>
          {editClick == undefined ? (
            <div className="lg:w-2/4 md:w-3/5 w-11/12">
              {!newContact ? (
                <div>
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setNewContact(true)}
                      className="bg-[#8400ff] text-white text-lg font-medium my-4 py-2 px-6 rounded-md cursor-pointer"
                    >
                      Create Contact
                    </button>
                    {contactList.length == 0 ? (
                      <NoContact />
                    ) : (
                      <ShowContact setEditClick={setEditClick} />
                    )}
                  </div>
                </div>
              ) : (
                <ContactForm setNewContact={setNewContact} />
              )}
            </div>
          ) : (
            <ContactEdit editClick={editClick} setEditClick={setEditClick} />
          )}
        </div>
      </div>
    );
}

export default Contact;