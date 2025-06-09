import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from "react";

const FormHandling = () => {

    const [inputs, setInputs] = useState(
        {
            'name': '',
            'email': '',
            'password': '',
            'description': ''
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
          ...prevInputs,
          [name]: value,
        }));
      };
      
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" value={inputs.name} label="Name" name="name" variant="outlined" onChange={handleChange} />
      <TextField id="filled-basic" label="Email" value={inputs.email} name="email" variant="filled" onChange={handleChange} />
      <TextField id="standard-basic" label="Password" value={inputs.password} name="password" variant="standard" onChange={handleChange} />
      <TextareaAutosize
            aria-label="Description "
            minRows={3}
            placeholder="Description"
            name="description"
            style={{ width: 200 }}
            value={inputs.description}
            onChange={handleChange}
            />
      <Button type="submit" variant="text">Submit</Button>
    </Box>
  );
}

export default FormHandling;