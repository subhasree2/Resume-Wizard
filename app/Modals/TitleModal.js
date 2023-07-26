const TitleModal = ({ name, setName, desc, setDesc, onClose, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="Titlemodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
      <div className="w-[700px]">
        <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
          <div className="NameChange">
            <div className="m-0 text-left">Name : </div>
            <input className="p-1 m-2" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="Desc mt-3">
            <div className="m-0 text-left">Description : </div>
            <input className="p-1 m-2" name="description" value={desc} onChange={(e) => setDesc(e.target.value)}/>
          </div>

          <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {onClose(e);e.stopPropagation();}}>Save & Close</button>
        </div>
      </div>
    </div>
  );
};

export default TitleModal;
