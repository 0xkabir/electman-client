import { Button, Modal } from 'flowbite-react';
import {HiOutlineExclamationCircle} from 'react-icons/hi'
import React from 'react';

const DeleteReview = ({reviewId, showDeleteModal, setShowDeleteModal, closeDeleteModal, deleteReview}) => {
    return (
        <React.Fragment>
  <Modal
    show={showDeleteModal}
    size="md"
    popup={true}
    onClose={closeDeleteModal}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this review?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="failure"
            onClick={()=>deleteReview(reviewId)}
          >
            Yes, I'm sure
          </Button>
          <Button
            color="gray"
            onClick={()=>setShowDeleteModal(false)}
          >
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
    );
};

export default DeleteReview;