import React from 'react'
import Button from 'react-bootstrap/Button';
import ModalBS from 'react-bootstrap/Modal';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import FormBS from 'react-bootstrap/Form';

const Modal = (props) => {

        const initialValues = {
            name : props.item.name || "",
            description :props.item.description || "",
            stock :props.item.stock || 0,
            price :props.item.price || 0,
            qr : props.item.qr ||" "
        }
        const validationSchema = Yup.object().shape({
            name : Yup.string().min(3, "nombre demasiado corto").max(30,"nombre demasiado largo").required("El campo nombre es requerido"),
    
            description : Yup.string()   .min(5, "descripcion demasiado corto").max(50,"descripcion demasiado largo").required("El campo description es requerido"),
            stock : Yup.number().required("el campo stock es requerido"),
            price : Yup.number().required("el campo price es requerido")
        })
       
    return (
        <>
            <ModalBS
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalBS.Header closeButton className='bg-dark'>
                    <ModalBS.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </ModalBS.Title>
                </ModalBS.Header>
                <ModalBS.Body className='bg-dark'>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ async (values, {setSubmitting})=>{
                    console.log(values);
                    await props.onSubmit(props.item.id,values)
                    setSubmitting(false)
                    props.onHide()
                }}
            >
                {
                    ({values,isSubmitting,errors,touched,handleChange})=>(
                        <Form>
                            <FormBS.Group className='mb-3'>
                            <label htmlFor='name'>Nombre del producto</label>
                            <Field type="text" id="name" name="name" placeholder="Mini Encendedor Bic" className='form-control field-input' onChange={handleChange}/>
                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='description'>Descripción del producto</label>
                            <Field type="text" id="description" name="description" placeholder="Encendedor pequeño de la marca bic, contiene 10gr" className='form-control field-input'onChange={handleChange}/>
                            {
                                errors.description && touched.description && (
                                    <ErrorMessage name='description' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='stock'>Cantidad de producto</label>
                            <Field type="number" id="stock" name="stock" placeholder="0 " className='form-control field-input' onChange={handleChange}/>
                            {
                                errors.stock && touched.stock && (
                                    <ErrorMessage name='stock' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='price'>Precio del producto</label>
                            <Field type="number" id="price" name="price" placeholder="200" className='form-control field-input' onChange={handleChange}/>
                            {
                                errors.price && touched.price && (
                                    <ErrorMessage name='price' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='qr'>qr del producto</label>
                            <Field type="text" id="qr" name="qr" className='form-control field-input' onChange={handleChange}/>
                            {
                                errors.qr && touched.qr && (
                                    <ErrorMessage name='qr' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            
                            <Button type='submit' className='btn-primary'>Cargar Producto</Button>
                            {
                                isSubmitting ? (<p>Cargando...</p>) : null
                            }
                        </Form>
                    )
                }
            </Formik>
                </ModalBS.Body>
                <ModalBS.Footer className='bg-dark'>
                    <Button onClick={props.onHide}>Close</Button>
                </ModalBS.Footer>
            </ModalBS>
        </>
    )
}
export default Modal