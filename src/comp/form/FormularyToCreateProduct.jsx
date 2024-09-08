import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import Button from 'react-bootstrap/Button';
import FormBS from 'react-bootstrap/Form';
import './formulary.css'
import { axiosInstance } from '../../services/axios.config';



const FormularyToCreateProduct = () => {

    const initialValues = {
        name : "",
        description : "",
        stock : 0,
        price : 0,
        qr : " "
    }
    const validationSchema = Yup.object().shape({
        name : Yup.string().min(3, "nombre demasiado corto").max(30,"nombre demasiado largo").required("El campo nombre es requerido"),

        description : Yup.string()   .min(5, "descripcion demasiado corto").max(50,"descripcion demasiado largo").required("El campo description es requerido"),
        stock : Yup.number().required("el campo stock es requerido"),
        price : Yup.number().required("el campo price es requerido")
    })

    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting})=>{
                    console.log(values);
                    axiosInstance.post('/', values)
                    .then(r=> {
                        if (r.status == 201){
                        console.log(r)
                        setSubmitting(false)
                        }else {
                            throw new Error(`[${r.status}] error en la solicitud`)
                        }
                    })
                    .catch(err=> console.log(err))
                    
                }}
            >
                {
                    ({values,isSubmitting,errors,touched})=>(
                        <Form>
                            <FormBS.Group className='mb-3'>
                            <label htmlFor='name'>Nombre del producto</label>
                            <Field type="text" id="name" name="name" placeholder="Mini Encendedor Bic" className='form-control field-input'/>
                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='description'>Descripción del producto</label>
                            <Field type="text" id="description" name="description" placeholder="Encendedor pequeño de la marca bic, contiene 10gr" className='form-control field-input'/>
                            {
                                errors.description && touched.description && (
                                    <ErrorMessage name='description' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='stock'>Cantidad de producto</label>
                            <Field type="number" id="stock" name="stock" placeholder="0 " className='form-control field-input'/>
                            {
                                errors.stock && touched.stock && (
                                    <ErrorMessage name='stock' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='price'>Precio del producto</label>
                            <Field type="number" id="price" name="price" placeholder="200" className='form-control field-input'/>
                            {
                                errors.price && touched.price && (
                                    <ErrorMessage name='price' component='div'></ErrorMessage>
                                )
                            }
                            </FormBS.Group>
                            

                            <FormBS.Group className='mb-3'>
                            <label htmlFor='qr'>qr del producto</label>
                            <Field type="text" id="qr" name="qr" className='form-control field-input' />
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
            
        </div>
    )
}

export default FormularyToCreateProduct;