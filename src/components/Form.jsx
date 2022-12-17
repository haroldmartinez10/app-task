import React from 'react'

const Form = ({ inputName, setInputName, inputMessage, setInputMessage, handleSubmit, error, }) => {

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputMessage = (e) => {
        setInputMessage(e.target.value)
    }



    return (
        <div className="w-full max-w-xs mx-auto mt-5">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Your Name
                    </label>
                    <input value={inputName} onChange={handleInputName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name" />
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Send Message
                </label>

                <textarea value={inputMessage} onChange={handleInputMessage} className='py-2 px-2' id="w3review" name="w3review" rows="4" cols="30" placeholder='Message'>
                </textarea>

                <div className="mb-6">

                </div>
                <div className="flex items-center justify-between">
                    <button onClick={handleSubmit} className="bg-slate-900 hover:bg-slate-600 text-white font-mono py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="">
                        Send Msg
                    </button>

                </div>
                {error === true ? <h1 className='text-center text-red-600 font-mono text-xs mt-4'>Los campos son obligatorios.</h1> : null}
            </form >



        </div >
    )
}

export default Form;