import { useForm } from "react-hook-form";
import { useState } from "react";

import { createNominations } from "../../services";
import "./createNominations.css";

const Form = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [response, setResponseStatus] = useState();
    const watchShowAge = watch(["talent", "involvement"]);
    const memberId = "fd74c127-9d51-4d61-8539-69633d6d7f7f"

    const handleClickSubmit = async ({ email, description, talent, involvement }) => {
        const response = await createNominations(memberId, { email, description, score: { talent, involvement } });
        setResponseStatus(response);
    };

    const errorMessage = (statusCode) => {
        if (statusCode === 409) return "Nomination already exists";
        else if (statusCode === 400) return "Given data failed";
        else return "An error occurred";
    };

    return (
        <div className="create_nomination_page">
            <h2>Create a new candidate filling the form below</h2>
            <form className="create_nominations_form" onSubmit={handleSubmit(handleClickSubmit)}>
                <div className="input_email_container">
                    <input
                        className="input_email"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^\S+@\S+$/i,
                            },
                        })}
                    />
                    {errors.email && errors.email.type === "required" && <span className="form_error">This field is required</span>}
                    {errors.email && errors.email.type === "pattern" ? (<span className="form_error">This is not an email</span>) : null}
                </div>

                <div className="input_description_container">
                    <textarea
                        className="input_description"
                        type="text"
                        placeholder="Description"
                        {...register("description", {
                            required: false, maxLength: {
                                value: 150,
                                message: "max characters 150"
                            }
                        })}
                    />
                </div>

                {errors.description && errors.description.type === "maxLength" && <span className="form_error">Max length exceeded</span>}

                <div className="input_talent_container">
                    <label className="slider_label">Talent: {watchShowAge[0] || 0}</label>
                    <input
                        name="talent"
                        type="range"
                        min="0"
                        max="10"
                        defaultValue="0"
                        className="input_talent"
                        step="1"
                        {...register("talent")}
                    />
                </div>

                <div className="input_involvement_container">
                    <label className="slider_label">Involvement: {watchShowAge[1] || 0}</label>
                    <input
                        name="involvement"
                        type="range"
                        min="0"
                        max="10"
                        defaultValue="0"
                        className="input_involvement"
                        step="1"
                        {...register("involvement")}
                    />
                </div>

                <input className="input_submit" type="submit" value="SEND" />
            </form>
            {response && response.status === 200 ? <span className="nomination_alert_succed">Nomination created.</span> : ""}
            {response && response.status !== 200 ? <span className="nominatin_alert_failed">{errorMessage(response.status)}</span> : ""}

        </div>
    )
};


export default Form;