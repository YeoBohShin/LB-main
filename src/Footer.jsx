import LBLogoFooter from "./Logo/LBLogoFooter";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content p-4 w-full flex flex-col">
          <div className="flex flex-col justify-between xl:flex-row text-left">
            <LBLogoFooter />
          <ul className="flex flex-col mt-5">
            <h1 className="text-3xl font-bold text-left ml-5">Contact Us</h1>
            <li className="text-lg m-5 mb-0 flex flex-row">
              <strong className="mr-3">Phone: </strong>
              <div className="flex flex-col">
                <p>
                  +65 6509 9746
                </p>
              </div>
            </li>
            <li className="text-lg m-5 mb-5 flex flex-row">
              <strong className="mr-3">Email: </strong>
              <a href="mailto:enquiries@limobutler.com.sg" className="text-blue-500 hover:underline">
                enquiries@limobutler.com.sg
              </a>
            </li>
          </ul>
          <div className="flex flex-col mt-5">
            <h1 className="text-3xl font-bold ml-5">Find Us</h1>
          <div className="text-lg m-5 mb-5 flex flex-row xl:mb-0">
            <strong className="mr-3">Address: </strong>
            <p>
              33 Ubi Avenue 3, VERTEX, #05-67, Singapore 408868
            </p>
          </div>
          {/* <div className="text-lg m-5 mb-10 flex flex-row">
            <strong className="mr-3">Operating Hours: </strong>
            <div className="flex flex-col text-left">
              <p>
                Monday to Friday: 9:00 AM - 6:00 PM
              </p>
              <p>
                Saturday, Sunday & Public Holidays: Closed
              </p>
            </div>
          </div> */}
        </div>
        </div>
        <div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Limo Butler Pte Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    );
}
