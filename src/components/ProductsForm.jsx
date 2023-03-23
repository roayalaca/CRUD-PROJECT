import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ProductsForm = ({newProduct, updateProduct, selectedProduct, setForm, cleanForm}) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect( () => {
        if(selectedProduct){
            reset(selectedProduct)
        }else{
            defaultValues()
        }
    }, [ selectedProduct ])

    const submit = data => {

        if(selectedProduct){
            updateProduct(data)
            setForm(false)
        }else{

            newProduct(data)
            defaultValues()
            setForm(false)
        }  
    }

    const defaultValues = () => {
        console.log("limpiar")
        reset(
            {
                name: "", 
                category: "",
                price: "",
                isAvailable: false
            }
        )
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submit)} className="Form">
                <div className='cross'>
                    <h1 className='new'>New User</h1>
                    <button className='button' onClick={() => {
                        setForm(false)
                        defaultValues()
                        cleanForm()
                        }}>x</button>
                </div>
         

                <div className='name'>
                    <label htmlFor="name">
                        Name  
                    </label>
                    <input 
                    type="text"
                    id="name"
                    placeholder="Product's name goes here" 
                    {...register("name", {required: true})}
                    />
                </div>
                <div className='category'>
                    <label htmlFor="category">
                        Category  
                    </label>
                    <input 
                    type="text"
                    id="category"
                    placeholder="Product's category goes here" 
                    {...register("category", {required: true})}
                    />
                </div>
                <div className='price'>
                    <label htmlFor="price">
                        Price  
                    </label>
                    <input 
                    type="number"
                    id="price"
                    placeholder="Product's price goes here" 
                    {...register("price", {required: true})}
                    />
                </div>
                <div className='available'>
                    <label htmlFor="isAvailable">
                        Availability: 
                    </label>
                    <input 
                    type="checkbox"
                    id="isAvailable"
                    {...register("isAvailable", {required: false})}
                    />
                </div>

                <button className='create'> Create New User </button>
            </form>
        </div>
    );
};

export default ProductsForm;