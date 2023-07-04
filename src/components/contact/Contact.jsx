import './Contact.css'
import svgg from '../../assets/svgg.png'

const Contact = () => {
  return (
    <>
    <h3 id='contact' className="text-3xl font-bold underline md:ml-9">Contact Me</h3>
    <div className="contact md:flex md:align-middle md:justify-center w-full md:ml-3">   
      <div className="left-column flex align-middle ml-40 md:ml-60 mt-10 container">
        <img src={svgg} alt="" />
      </div>
      <div>

      </div>
      <div className="right-column p-20 md-ml-0 ml-30">
        <form className='p-200 m-3 bg-gray-900 opacity-75  '>
        <label className="mt-4" htmlFor="email">Name</label>
          <input  class="appearance-none block p-4 m-5 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "  type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input  class="appearance-none block p-4 m-5 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Your Email" />

          <label htmlFor="message">Message</label>
          <textarea  class="appearance-none block p-4 m-5 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" name="message" placeholder="Your Message"></textarea>

          <button  class="bg-blue-500 hover:bg-blue-700 p-4 m-5 text-white font-bold py-2 px-4 rounded my-9" type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
