import { useSelector } from "react-redux";
import { RootState } from "../../redux_utilis/appStore";
import { deleteContacts } from "../../redux_utilis/cartSlice";
import { useDispatch } from "react-redux";

const ShowContact = ({setEditClick}) => {
    const contactList = useSelector((state: RootState) => state.contact.contact);
    const dispatch = useDispatch();

    const handleDeleteContact = (contactId: number) => {
      dispatch(deleteContacts(contactId));
    };

    return (
      <div className="flex flex-wrap gap-4">
        {contactList.map((list) =>
          <div className="w-full flex flex-col bg-gray-100 text-center rounded-md py-4 px-2" key={list.id}>
            <p className="font-sans font-semibold text-2xl text-gray-700">
              {list.firstname} {list.lastname}
            </p>
            <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center lg:space-y-0 space-y-2 my-3">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62ZM176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208Z"
                  ></path>
                </svg>
                <a href={`tel:${list.phone}`}>{list.phone}</a>
              </div>
              <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g id="evaEmailOutline0">
                    <g id="evaEmailOutline1">
                      <path
                        id="evaEmailOutline2"
                        fill="currentColor"
                        d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1Z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <a href={`mailto:${list.email}`}>{list.email}</a>
              </div>
            </div>
            <span>Status: {list.status}</span>
            <div className="flex justify-around mt-6">
              <button onClick={() => setEditClick(list.id)} className="w-fit bg-blue-500 font-sans font-semibold text-lg text-white rounded-md py-2 px-4 hover:opacity-90">
                Edit
              </button>
              <button onClick={() => handleDeleteContact(list.id)} className="w-fit bg-red-500 font-sans font-semibold text-lg text-white rounded-md py-2 px-4 hover:opacity-90">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default ShowContact;