
const NoContact = () => {
    return (
      <div className="lg:w-[500px] md:w-3/5 w-10/12 flex justify-evenly items-center bg-red-50 mt-8 py-7 rounded-md">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 16 16"
          >
            <path
              fill="#991b1b"
              d="M11.18 6.06A4.399 4.399 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.391 4.391 0 0 0 1.808 3.551A2.564 2.564 0 0 1 6 7.99a2.755 2.755 0 0 1-1.209 2.003a4.441 4.441 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.435 4.435 0 0 0-1.769-3.492a2.762 2.762 0 0 1-1.23-1.996a2.551 2.551 0 0 1 1.169-1.946zM9 8a3.693 3.693 0 0 0 1.519 2.763A3.477 3.477 0 0 1 12 13.495V14H4v-.5a3.472 3.472 0 0 1 1.459-2.723a3.698 3.698 0 0 0 1.54-2.766a3.482 3.482 0 0 0-1.498-2.683a3.438 3.438 0 0 1-1.502-2.827v-.5h8v.5a3.426 3.426 0 0 1-1.479 2.813a3.487 3.487 0 0 0-1.521 2.678z"
            ></path>
          </svg>
        </div>
        <div className="text-3xl text-red-800 flex flex-col items-center">
          <span>No Contact Found</span>
          <span>Please add contact from</span>
          <span>Create Contact Button</span>
        </div>
      </div>
    );
}

export default NoContact;