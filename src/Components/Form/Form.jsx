import React from 'react';
import './Form.scss';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  // const [data, setData] = useState({
  //   username: '',
  //   email: '',
  //   phone: '',
  //   query: '',
  // });
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //    await axios.put(
  //       'https://async-tourism.herokuapp.com/add',
  //       data
  //     );
  //     toast.success('Got Your Query, Will Revert You Shortly 🚀');
  //     setData({ ...data, username: '', email: '', phone: '', query: '' });
  //   } catch (e) {
  //     console.log(e);
  //     toast.error('Something went Wrong...😓');
  //   }
  // };

  return (
    // <div
    //   className="container"
    //   style={{ display: 'flex', justifyContent: 'center' }}
    // >
    //   <div
    //     style={{
    //       backgroundColor: '#fff',
    //       boxShadow: '0 0 20px #0003',
    //       height: '100%',
    //       borderRadius: '18px',
    //       maxWidth: '800px',
    //       padding: '60px 60px',
    //       width: 'calc(100% - 100px)',
    //       maxHeight: '100%',
    //     }}
    //   >
    //     <h1 style={{ textAlign: 'center' }}>Any Queries?</h1>
    //
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label htmlFor="exampleFormControlInput1">Name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="exampleFormControlInput1"
    //           placeholder="Name"
    //           name="username"
    //           required
    //           value={data.username}
    //           onChange={(e) => {
    //             setData({ ...data, username: e.target.value });
    //           }}
    //         />
    //       </div>
    //
    //       <div className="form-group">
    //         <label htmlFor="exampleFormControlInput2">Email</label>
    //         <input
    //           style={{ marginLeft: '10px' }}
    //           type="email"
    //           className="form-control"
    //           id="exampleFormControlInput2"
    //           required
    //           placeholder="name@example.com"
    //           name="email"
    //           value={data.email}
    //           onChange={(e) => {
    //             setData({ ...data, email: e.target.value });
    //           }}
    //         />
    //       </div>
    //
    //       <div className="form-group">
    //         <label htmlFor="exampleFormControlInput3">Phone</label>
    //         <input
    //           style={{ marginLeft: '4px' }}
    //           type="tel"
    //           pattern="[1-9]{1}[0-9]{9}"
    //           className="form-control"
    //           required
    //           id="exampleFormControlInput3"
    //           placeholder="Phone No"
    //           name="phone"
    //           value={data.phone}
    //           onChange={(e) => {
    //             setData({ ...data, phone: e.target.value });
    //           }}
    //         />
    //       </div>
    //
    //       <div className="form-group">
    //         <label
    //           htmlFor="exampleFormControlTextarea1"
    //           style={{ textAlign: 'justify' }}
    //         >
    //           Query
    //         </label>
    //         <textarea
    //           className="form-control"
    //           id="exampleFormControlTextarea1"
    //           rows="3"
    //           name="query"
    //           required
    //           value={data.query}
    //           onChange={(e) => {
    //             setData({ ...data, query: e.target.value });
    //           }}
    //         ></textarea>
    //       </div>
    //
    //       <div className="btn-group">
    //         <button className="btn" type="submit">
    //           Send
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <section className="body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-[36px] mb-4">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any question, feel free to reach out with us.</p>
        </div>
         <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm">Name</label>
                <input type="text" id="name" name="name"
                       className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm">Email</label>
                <input type="email" id="email" name="email"
                       className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
