

const Contact = () => {
    return ( 
        <div className="flex flex-col  md:flex-row items-center justify-center min-h-screen py-2 bg-gray-50">
          <div className="w-full mb-8 max-w-3xl ">
          <form action="mailto:hamzabenarfa4@gmail.com" method="post" enctype="text/plain">

              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg" placeholder="Nom" />
                </div>
                <div>
                  <label htmlFor="tel" className="sr-only">Numero telephone</label>
                  <input id="tel" name="tel" type="tel" autoComplete="tel" required className="appearance-none rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg" placeholder="Numero telephone " />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg" placeholder="Email " />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows="5" required className="appearance-none rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Message"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="group mt-2 relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send
                </button>
              </div>
            </form>
          </div>
  
       
     
   
      </div>
     );
}
 
export default Contact;