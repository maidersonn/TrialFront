import { useForm } from "react-hook-form";

const Slider = (name) => {
    console.log("name componen", name)
    const { register } = useForm();

    return (
        <input
            name={name}
            type="range"
            min="0"
            max="10"
            defaultValue="5"
            className="slider"
            step="1"
            {...register("talent2", { required: true })}
        />
    );
};

export default Slider;