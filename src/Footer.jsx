import LBLogoFooter from "./Logo/LBLogoFooter";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content p-4 w-full flex flex-col">
        <div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Limo Butler Pte Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    );
}
