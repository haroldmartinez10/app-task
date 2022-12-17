import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { db } from '../firebase/firebase.js'
import { doc, updateDoc } from 'firebase/firestore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ModalEdit = ({ open, handleClose, editModal, setEditModal, updateId }) => {

  const handleEditModal = (e) => {
    setEditModal(e.target.value)

  }

  const handleUpdate = async () => {

    handleClose()

    setEditModal('')

    const productRef = doc(db, "products", updateId);

    await updateDoc(productRef, {
      stock: editModal
    });



  }

  return (
    <>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className='font-mono'>Edit Message</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <div className="mb-4">
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Edit Message
            </label>

            <textarea value={editModal} onChange={handleEditModal} className='px-2 py-2' id="w3review" name="w3review" rows="4" cols="30" placeholder='Edit Message'>
            </textarea>

            <div className="mb-6">

            </div>
            <div className="flex items-center justify-between">
              <button onClick={handleUpdate} className="bg-orange-500 hover:bg-orange-700 text-white font-mono py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Edit Message
              </button>

              <button onClick={handleClose} className="bg-red-500 hover:bg-red-700 text-white font-mono py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Close Edit
              </button>

            </div>
          </Typography>

        </Box>

      </Modal>
    </>
  );
}

export default ModalEdit;