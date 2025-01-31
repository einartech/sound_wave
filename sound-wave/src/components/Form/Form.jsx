import styled from "styled-components";

const FormContainer = styled.div`
background-color: red;
width: 40%;
heigth: 40%;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

const Label = styled.label`
display: block;
margin-bottom: 10px;
font-weight: bold;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 15px;
border: 1px solid #ddd;
border-radius: 4px;
`;

const SubmitButton = styled.button`
background-color: #007bff;
color: white;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
background-color: #0056b3
}
`;

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
    };

    return (
    <>
    <FormContainer>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" id="name" name="name" required />

                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required/>

                <Label htmlFor="password">Password:</Label>
                <Input type="password" id="password" name="password" required/>

            <SubmitButton type="submit">Join Now</SubmitButton>
            </form>
            </FormContainer>
    </>
         );
         };
    

export default Form;