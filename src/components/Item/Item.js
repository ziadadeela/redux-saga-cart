import React from 'react';
import * as Yup from 'yup';
import {
    Formik,
    FormikHelpers,
    Form,
    Field,
} from 'formik';
import {addItem} from "../../actions";
import {useDispatch} from "react-redux";

export const Item = () => {
    const dispatch = useDispatch();
    const initialValues = {};
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        quantityAvailable: Yup.number().required(),
    });
    return (
        <div>
            <h1>Item</h1>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    dispatch(addItem(values));
                    actions.setSubmitting(false);
                }}
                render={({setFieldValue, handleChange, values, errors, status, touched, isSubmitting}) => (
                    <Form>
                        <Field
                            name="name"
                            render={({field, meta}) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Name"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Field
                            name="description"
                            render={({field, meta}) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Description"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Field
                            name="quantityAvailable"
                            render={({field, meta}) => (
                                <div>
                                    <div>
                                        <input type="number" min={0} {...field} placeholder="Quantity Available"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <button className="btn btn-primary btn-lg"
                                type="submit"
                                disabled={isSubmitting}>
                            Save
                        </button>
                    </Form>
                )}
            />
        </div>


    )
};