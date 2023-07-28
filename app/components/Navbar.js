import ReactToPrint from "react-to-print";

function Navbar({componentRef}) {
  return (
    <div className="navbar h-12 p-2 shadow-2xl flex justify-between">
      <h1 className="font-serif text-2xl pl-10">ResumeWizard</h1>
      <ReactToPrint 
          trigger={() => <button className="pl-4 pr-4 mr-2 bg-blue-950 border-white rounded-md">Download as PDF</button>}
          content={() => componentRef.current}
        />
    </div>
  );
}

export default Navbar;
