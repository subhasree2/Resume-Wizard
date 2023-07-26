const InfoModal = ({ Addr, setAddr, Email, setEmail, phNo, setphNo, onClose, isVisible }) => {
    if (!isVisible) return null;
  
    return (
      <div className="Titlemodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
        <div className="w-[700px]">
          <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
            <div className="Address">
              <div className="m-0 text-left">Address : </div>
              <input className="p-1 m-2" type="text" name="address" value={Addr} onChange={(e) => setAddr(e.target.value)}/>
            </div>
  
            <div className="Email mt-3">
              <div className="m-0 text-left">Email : </div>
              <input className="p-1 m-2" name="email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="Number mt-3">
              <div className="m-0 text-left">Phone number : </div>
              <input className="p-1 m-2" name="number" value={phNo} onChange={(e) => setphNo(e.target.value)}/>
            </div>
  
            <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {onClose(e);e.stopPropagation();}}>Save & Close</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoModal;
  