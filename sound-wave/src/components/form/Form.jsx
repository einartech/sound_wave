import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202027;
  width: 400px;
  heigth: 25%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: poppins;
`;

const Input = styled.input`
  background-color: #202027;
  color: #ffffff;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #2e3852;
  border-radius: 4px;
  &:focus {
    border: 1px solid ##596da0;
  }
`;

const SubmitButton = styled.button`
  background-color: #1762a7;
  width: 100%;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2180d8;
  }
  &:autofocus {
    background-color: #2796ff;
  }
`;

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" maxLength={20} pattern="[A-Za-z]{3,}" 
            title="Please enter your name  (mín 3 characters)"
            onChange={(e) => {
              const valor = e.target.value;
              // Validación en tiempo real
              if (!/^[A-Za-z]+$/.test(valor)) {
                console.log("Only letters allowed");
              }
            }}id="name" name="name" required />

          <Label htmlFor="email">Email:</Label>
          <Input type="email" 
          pattern="[A-Za-z0-9]"
          title="Please enter a valid email"
          onChange={(e) => {
            const valor = e.target.value;
            if (!/^[A-Za-z0-9]+$/.test(valor)) {
              console.log("Please enter a valid email");
            }

          }}
          id="email" name="email" required />

          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" name="password" required />

          <SubmitButton type="submit" autoFocus>
            Join Now
          </SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
