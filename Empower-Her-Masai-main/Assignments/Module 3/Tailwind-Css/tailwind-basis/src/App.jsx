function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <nav className="bg-white shadow p-4">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Features</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="p-6 text-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold
          bg-gradient-to-r from-blue-500 to-purple-600
          text-transparent bg-clip-text">
          Tailwind CSS Assignment
        </h2>

        <div className="mt-6 flex justify-center">
          <div className="w-64 overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              className="transition transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Button */}
      <section className="p-6 text-center">
        <button className="bg-gray-200 px-6 py-2 rounded-lg
          hover:bg-gray-300 active:bg-gray-400 transition">
          Click Me
        </button>
      </section>

      {/* List */}
      <section className="p-6">
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Utility Classes</li>
          <li className="hover:text-blue-600">Responsive Design</li>
          <li className="hover:text-blue-600">React Components</li>
        </ul>
      </section>

      {/* Cards Grid */}
      <section className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <img
                src="https://via.placeholder.com/400x200"
                className="rounded mb-3"
              />
              <h3 className="text-xl font-bold mb-2">Card {i}</h3>
              <p className="text-gray-600 mb-3">
                Tailwind card component.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="p-6 overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {["A","B","C"].map((n,i)=>(
              <tr key={i} className="odd:bg-gray-100 hover:bg-gray-200">
                <td className="border p-2">{n}</td>
                <td className="border p-2">Developer</td>
                <td className="border p-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Form */}
      <section className="p-6 max-w-md mx-auto bg-white shadow rounded mb-10">
        <form className="space-y-4">
          <input className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Name" />
          <input className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Email" />
          <input className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Password" />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
