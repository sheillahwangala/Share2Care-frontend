import Navbar from "../navbar/Navbar";

function Template ({children}) {
    return (
        <div className="template">
            <Navbar />
            {children}
        </div>
    );
};
export default Template;