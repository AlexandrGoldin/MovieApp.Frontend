import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button className='btn btn-success' type='button' onClick={toggleModal}>
        Login
      </button>
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalBody>
          <LoginForm />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Login;

////-----------V1------------------
// import React from 'react';
// import { Modal, ModalBody } from 'reactstrap';
// import LoginForm from './LoginForm';

// export default class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false
//     };
//   }

//   toggleModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <button
//           className='btn btn-success'
//           type='button'
//           onClick={this.toggleModal}
//         >
//           Login
//         </button>
//         <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
//           <ModalBody>
//             <LoginForm/>
//           </ModalBody>
//         </Modal>
//       </div>
//     )
//   }
// }
////-----------The End V1------------------

