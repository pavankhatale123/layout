import Table from '../common/Table';

const Settings = () => {
  const title = 'Settings';
  return (
    <div>
      {/* <div className="w-full md:w-4/4 p-6 bg-white rounded shadow-md bg-gray-100 mt-10 dark:border-strokedark dark:bg-boxdark">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-4 xl:grid-cols-1 2xl:gap-7.5">
          <h2 className="text-2xl font-bold mb-4">Add User</h2>

          <form className="w-full mx-auto md:flex md:justify-between md:items-start gap-10">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="mb-4">
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter project name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="projectOwner"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="projectOwner"
                  name="projectOwner"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter project owner"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="projectVoiceOwner"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="text"
                  id="projectVoiceOwner"
                  name="projectVoiceOwner"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter project voice owner"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="projectManager"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teckstack
                </label>
                <input
                  type="text"
                  id="projectManager"
                  name="projectManager"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter project manager"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="summary"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="summary"
                  name="summary"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter summary here"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter contact here"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="remark"
                  className="block text-sm font-medium text-gray-700"
                >
                  Remark
                </label>
                <input
                  type="text"
                  id="remark"
                  name="remark"
                  className="mt-1 p-2 border w-full rounded-md dark:border-strokedark dark:bg-boxdark"
                  placeholder="Enter remark here"
                />
              </div>
            </div>
          </form>

          <div className="flex justify-end mt-6 gap-5">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white bg-[#90E0EF] rounded-md w-28 font-bold"
            >
              Save
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white bg-[#b7b6b6] rounded-md w-28 font-bold"
            >
              Clear
            </button>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-4 xl:grid-cols-1 2xl:gap-7.5">
        <Table TableTitle={title}  Addbtn={true} btnTitle={'User'}  />
      </div>
    </div>
  );
};

export default Settings;
