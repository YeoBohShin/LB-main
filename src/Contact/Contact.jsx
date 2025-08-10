import { useEffect } from "react";
import Footer from "../Footer.jsx";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-top min-h-screen top-0">
        <div className="flex flex-col justify-top m-10 w-full">
          <h1 className="text-4xl m-5">Limo Butler Pte Ltd</h1>
          <p className="text-lg m-5">
            Feel free to reach out to us for any inquiries or feedback. We are here to assist you with your limousine service needs.
          </p>
          <div className="text-lg m-5">
            <strong className="mr-3">Email: </strong>
            <a href="mailto:enquiries@limobutler.com.sg" className="text-blue-500 hover:underline">
              enquiries@limobutler.com.sg
            </a>
          </div>
          <div className="text-lg m-5 flex flex-row">
            <strong className="mr-3">Phone: </strong>
            <div className="flex flex-col">
              <p>
                +65 6509 9746 (During office hours)
              </p>
              <p>
                +65 6659 1264 (After office hours)
              </p>
            </div>
          </div>
          <div className="text-lg m-5 flex flex-row">
            <strong className="mr-3">Address: </strong>
            <p>
              33 Ubi Avenue 3, VERTEX, #05-67, Singapore 408868
            </p>
          </div>
          <div className="text-lg m-5 flex flex-row">
            <strong className="mr-3">Operating Hours: </strong>
            <div className="flex flex-col">
              <p>
                Monday to Friday: 9:00 AM - 6:00 PM
              </p>
              <p>
                Saturday, Sunday & Public Holidays: Closed
              </p>
            </div>
          </div>
        </div>
        <img
          src="./Contact.jpg"
          alt="Contact Us"
          className="h-150 m-15 mt-5 rounded-4xl"
        />
      </div>
      <Footer />
    </>
  );
}