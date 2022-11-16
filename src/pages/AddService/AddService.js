import React from 'react';
import useTitle from '../../hooks/useTitle'

const AddService = () => {
    useTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const imgurl = form.imgurl.value;
        const price = form.price.value;
        const intro = form.intro.value;
        const description = form.description.value;
        const servcieObj = {name, imgurl, price, intro, description}
        fetch('https://electman-server.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(servcieObj)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <div className='text-center'>
            <h2 className='text-5xl font-medium text-center my-10'>Add a Service</h2>
            <form onSubmit={handleAddService}>
                <input type="text" name="name" placeholder='Service Name' className='block w-11/12 md:w-3/4 lg:w-1/2 mx-auto px-2.5 py-1 border-2 border-gray-400 my-2.5 rounded focus:border-orange-600 ' required/>
                <input type="text" name="imgurl" placeholder='Image URL' className='block w-11/12 md:w-3/4 lg:w-1/2 mx-auto px-2.5 py-1 border-2 border-gray-400 my-2.5 rounded focus:border-orange-600 ' required/>
                <input type="text" name="price" placeholder='Price (in $)' className='block w-11/12 md:w-3/4 lg:w-1/2 mx-auto px-2.5 py-1 border-2 border-gray-400 my-2.5 rounded focus:border-orange-600 ' required/>
                <textarea type="text" name="intro" rows="2" placeholder='Introductory Text' className='block w-11/12 md:w-3/4 lg:w-1/2 mx-auto px-2.5 py-1 border-2 border-gray-400 my-2.5 rounded focus:border-orange-600 ' required/>
                <textarea type="text" name="description" rows="5" placeholder='Description' className='block w-11/12 md:w-3/4 lg:w-1/2 mx-auto px-2.5 py-1 border-2 border-gray-400 my-2.5 rounded focus:border-orange-600 ' required/>
                <button type='submit' className='px-4 py-1 rounded font-medium border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;