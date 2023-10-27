import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'


const FormData = () => {
  // const [data, setData] = useState({nombre: '', apellido: '',dni: 0, email: '',},);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState(0);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nombre?.trim() && apellido?.trim() && dni && email?.trim()) {
      Swal.fire({
        title: 'Seguro desea enviar el formulario?',
        showDenyButton: true,
        confirmButtonText: 'Enviar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Enviado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Envio cancelado', '', 'info')
        }
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos con datos validos',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    setNombre('')
    setApellido('')
    setDni(0)
    setEmail('')
  };

  return (
    <div className='text-center'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Nombre completo" maxLength={20} minLength={3} required onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Apellido" maxLength={20} minLength={4} required onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" placeholder="DNI" maxLength={8} minLength={7} required onChange={(e)=> setDni(e.target.value)} value={undefined}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="email" placeholder="Email" maxLength={25} minLength={12} required onChange={(e)=> setEmail(e.target.value)} value={email}/>
        </Form.Group>

        <Button type="submit" variant="secondary" className='bg-gradient mb-2'>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormData;
