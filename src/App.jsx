import React, { useEffect, useState } from 'react'
import { db } from './firebase/firebase'
import { addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import Form from './components/Form'
import ModalEdit from './components/ModalEdit';




const App = () => {

  const [products, setProducts] = useState([])
  const [inputName, setInputName] = useState([])
  const [inputMessage, setInputMessage] = useState([])
  const [error, setError] = useState('No debe estar vacio este campo')
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState('')
  const [updateId, setUpdateId] = useState('')

  var today = new Date();
  var now = today.toLocaleString();


  const handleOpen = () => {
    setOpen(true)

  }

  const handleClose = () => {
    setOpen(false)
  }


  useEffect(() => {
    onSnapshot(collection(db, "products"), (item) => {
      const allProducts = []
      item.forEach((item) => (
        allProducts.push({ ...item.data(), id: item.id })
      ))
      setProducts(allProducts)
    })
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id))
  }



  const handleSubmit = async (e) => {
    e.preventDefault()

    setInputMessage('')

    if (inputName.length === 0 || inputMessage.length === 0) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "products"), {
        product: inputName,
        stock: inputMessage
      });
    } catch (e) {

    }
  }

  return (
    <>

      <h1 className='text-white font-mono text-center mt-10'>Send Message</h1>

      <Form inputName={inputName}
        setInputName={setInputName}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
      />

      {products.map((item) => (



        <div key={item.id} className='bg-slate-800 w-10/12 lg:w-4/12 mx-auto flex  items-center flex-col mb-4'>
          <div className='text-xl max-w-prose px-2 py-2'>

            <p className='text-center text-green-500 font-mono mb-4 text-xs max-w-prose break-all mt-4 '>{item.stock}</p>
          </div>

          <h1 className='text-center text-white font-mono mb-4 text-xs max-w-prose break-all p-2'>Usuario: {item.product}</h1>
          <h1 className='text-center text-white font-mono mb-4 text-xs max-w-prose break-all p-2'>Enviado el {now}</h1>
          <span onClick={() => setEditModal(item.stock)}><button className='text-white mb-4 bg-orange-500 hover:bg-orange-700  font-bold py-1 px-1 rounded  text-xs'
            onClick={() => handleOpen(setUpdateId(item.id))}>Edit</button></span>

          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded mb-4 text-xs' onClick={() => handleDelete(item.id)}>Delete </button>



          <ModalEdit updateId={updateId} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} editModal={editModal} setEditModal={setEditModal} />

        </div>


      ))
      }







    </>

  )
}


export default App